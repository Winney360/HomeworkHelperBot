import React, { useRef, useState } from 'react';
import { X, Upload, FileText, File, CheckCircle } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  onClose: () => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload, onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/gif'
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && acceptedTypes.includes(file.type)) {
      setUploadedFile(file);
    } else {
      alert('Please select a valid file type (PDF, Word, Text, or Image)');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && acceptedTypes.includes(file.type)) {
      setUploadedFile(file);
    } else {
      alert('Please select a valid file type (PDF, Word, Text, or Image)');
    }
  };

  const handleUpload = () => {
    if (uploadedFile) {
      onFileUpload(uploadedFile);
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return <FileText className="h-8 w-8 text-red-600" />;
    if (fileType.includes('word')) return <FileText className="h-8 w-8 text-blue-600" />;
    if (fileType.includes('image')) return <File className="h-8 w-8 text-green-600" />;
    return <File className="h-8 w-8 text-gray-600" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Upload Homework File
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Upload a document or image of your homework
          </p>
        </div>

        <div className="p-6 space-y-4">
          {!uploadedFile ? (
            <div
              className={`w-full p-8 border-2 border-dashed rounded-xl transition-colors ${
                dragActive
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Drag and drop a file here, or
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  choose a file
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-green-300 bg-green-50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {getFileIcon(uploadedFile.type)}
                    <div>
                      <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-600">{formatFileSize(uploadedFile.size)}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="p-1 hover:bg-green-200 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-green-600" />
                </button>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
            onChange={handleFileChange}
            className="hidden"
          />

          {uploadedFile && (
            <button
              onClick={handleUpload}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-purple-700 transition-colors"
            >
              Upload File
            </button>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-1">
            <p>Supported formats:</p>
            <p>• Documents: PDF, Word, Text files</p>
            <p>• Images: JPG, PNG, GIF</p>
            <p>• Maximum file size: 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;