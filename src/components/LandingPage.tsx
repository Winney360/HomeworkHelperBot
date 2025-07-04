import React from 'react';
import { BookOpen, Camera, Mic, Upload, Star, ArrowRight, Users, School, Coins, LogOut } from 'lucide-react';
import type { User } from '../types/auth';

interface LandingPageProps {
  onStartChat: () => void;
  onShowPricing: () => void;
  user: User | null;
  onLogout: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartChat, onShowPricing, user, onLogout }) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">HomeworkHelper</h1>
          </div>
          <nav className="flex items-center space-x-6">
            {user && (
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-green-800">
                    Welcome, {user.name}!
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</a>
              <button
                onClick={onStartChat}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                {user ? 'Start Helping' : 'Get Started'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Homework Help Made
            <span className="text-green-600"> Simple</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered homework assistant designed specifically for Kenyan parents and children. 
            Get instant, grade-appropriate help with CBC curriculum assignments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStartChat}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>{user ? 'Continue Learning' : 'Start Helping Now'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={onShowPricing}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Help Your Child Excel
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Camera className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Photo Scanning</h4>
              <p className="text-gray-600">Snap a photo of any homework question and get instant, detailed explanations</p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Mic className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Voice Learning</h4>
              <p className="text-gray-600">Ask questions using voice and get spoken answers with pronunciation help</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Upload className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">File Support</h4>
              <p className="text-gray-600">Upload documents, worksheets, and images for comprehensive help</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <School className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CBC Curriculum</h4>
              <p className="text-gray-600">Perfectly aligned with Kenya's CBC curriculum for all grade levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Grade-Specific Help for Every CBC Subject
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mathematics</h4>
                    <p className="text-gray-600">From basic counting to advanced algebra, step-by-step solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Languages</h4>
                    <p className="text-gray-600">English, Kiswahili, and local languages with voice pronunciation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sciences</h4>
                    <p className="text-gray-600">Biology, Chemistry, Physics - complex concepts made simple</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Studies</h4>
                    <p className="text-gray-600">History, Geography, Civic Education with cultural context</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Child-Friendly Features</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-green-600" />
                  <span>Gentle voice guidance and pronunciation help</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-green-600" />
                  <span>Step-by-step explanations for complex problems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-green-600" />
                  <span>Interactive spelling and vocabulary assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-green-600" />
                  <span>Patient, encouraging responses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Affordable Plans for Every Family
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-transparent hover:border-orange-200 transition-colors">
              <Coins className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pay-per-Use</h4>
              <p className="text-gray-600 mb-4">KES 5-10 per question</p>
              <p className="text-sm text-gray-500">Perfect for occasional help</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Family Plan</h4>
              <p className="text-gray-600 mb-4">KES 500/month</p>
              <p className="text-sm text-gray-500">Unlimited questions for all children</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-transparent hover:border-blue-200 transition-colors">
              <School className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">School Partnership</h4>
              <p className="text-gray-600 mb-4">Custom pricing</p>
              <p className="text-sm text-gray-500">For schools and institutions</p>
            </div>
          </div>
          <button
            onClick={onShowPricing}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View Full Pricing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold">HomeworkHelper</span>
          </div>
          <p className="text-gray-400">
            Empowering Kenyan families through quality education support
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;