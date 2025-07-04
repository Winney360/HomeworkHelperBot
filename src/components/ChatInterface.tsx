import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Send, 
  Mic, 
  Camera, 
  Volume2,
  Image,
  FileText,
  Bot,
  User as UserIcon,
  LogOut,
  Paperclip
} from 'lucide-react';
import VoiceRecorder from './VoiceRecorder';
import ImageUploader from './ImageUploader';
import FileUploader from './FileUploader';
import type { User } from '../types/auth';
import { generateAIResponse } from '../utils/aiResponses';

interface ChatInterfaceProps {
  grade: number;
  user: User;
  onBack: () => void;
  onLogout: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  hasAudio?: boolean;
  messageType?: 'text' | 'voice' | 'image' | 'file';
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ grade, user, onBack, onLogout }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hello ${user.name}! I'm here to help with Grade ${grade} homework. I can assist with Mathematics, English, Kiswahili, Science, and Social Studies. You can ask me questions by typing, speaking, or uploading photos of your homework. What would you like help with today?`,
      timestamp: new Date(),
      hasAudio: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string, type: 'text' | 'voice' | 'image' | 'file' = 'text') => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
      messageType: type
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    
    // Generate bot response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: generateAIResponse(content, grade, type),
          timestamp: new Date(),
          hasAudio: true
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }, 500);
  };

  const handleVoiceRecording = (audioBlob: Blob) => {
    // In a real app, you'd convert this to text using speech recognition
    handleSendMessage("I need help with my homework. Can you explain how to solve this problem?", 'voice');
  };

  const handleImageUpload = (imageFile: File) => {
    handleSendMessage(`I've uploaded an image of my homework: ${imageFile.name}. Can you help me understand this problem?`, 'image');
    setShowImageUpload(false);
  };

  const handleFileUpload = (file: File) => {
    handleSendMessage(`I've uploaded a file: ${file.name}. Can you help me with this homework?`, 'file');
    setShowFileUpload(false);
  };

  const playAudio = (messageId: string) => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const message = messages.find(m => m.id === messageId);
    if (!message) return;

    const utterance = new SpeechSynthesisUtterance(message.content);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const getMessageTypeIcon = (type?: string) => {
    switch (type) {
      case 'voice':
        return <Mic className="h-4 w-4 text-orange-600" />;
      case 'image':
        return <Image className="h-4 w-4 text-blue-600" />;
      case 'file':
        return <FileText className="h-4 w-4 text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-green-700 rounded-full transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-lg font-semibold">Grade {grade} Helper</h1>
              <p className="text-green-100 text-sm">CBC Curriculum Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-700 px-3 py-1 rounded-full text-sm">
              Grade {grade}
            </div>
            <button
              onClick={onLogout}
              className="p-2 hover:bg-green-700 rounded-full transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 shadow-md'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.type === 'bot' && (
                  <div className="bg-green-100 p-1 rounded-full">
                    <Bot className="h-4 w-4 text-green-600 flex-shrink-0" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    {message.type === 'user' && getMessageTypeIcon(message.messageType)}
                  </div>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-75">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                    {message.hasAudio && message.type === 'bot' && (
                      <button
                        onClick={() => playAudio(message.id)}
                        className={`p-1 rounded-full transition-colors ${
                          isSpeaking ? 'bg-green-200' : 'hover:bg-gray-200'
                        }`}
                      >
                        <Volume2 className={`h-4 w-4 ${
                          isSpeaking ? 'text-green-700' : 'text-green-600'
                        }`} />
                      </button>
                    )}
                  </div>
                </div>
                {message.type === 'user' && (
                  <div className="bg-green-700 p-1 rounded-full">
                    <UserIcon className="h-4 w-4 text-green-200 flex-shrink-0" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl shadow-md">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Bot className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Type your homework question..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <VoiceRecorder
              isRecording={isRecording}
              onStartRecording={() => setIsRecording(true)}
              onStopRecording={() => setIsRecording(false)}
              onRecordingComplete={handleVoiceRecording}
            />
            
            <button
              onClick={() => setShowImageUpload(true)}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Camera className="h-5 w-5" />
            </button>

            <button
              onClick={() => setShowFileUpload(true)}
              className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={!inputText.trim()}
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modals */}
      {showImageUpload && (
        <ImageUploader
          onImageUpload={handleImageUpload}
          onClose={() => setShowImageUpload(false)}
        />
      )}

      {showFileUpload && (
        <FileUploader
          onFileUpload={handleFileUpload}
          onClose={() => setShowFileUpload(false)}
        />
      )}
    </div>
  );
};

export default ChatInterface;