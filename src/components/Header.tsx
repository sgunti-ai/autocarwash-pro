import React from 'react';
import { Car, User, Calendar, Settings } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: any;
  isAdmin: boolean;
}

export default function Header({ activeTab, setActiveTab, user, isAdmin }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoWash Pro</h1>
              <p className="text-xs text-gray-500">Touchless Car Wash</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'booking'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Book Service
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Bookings
            </button>
            {isAdmin && (
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'admin'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Admin Panel
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
            ) : (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('booking')}
            className={`flex-1 flex items-center justify-center py-3 text-sm font-medium ${
              activeTab === 'booking'
                ? 'bg-blue-100 text-blue-700 border-t-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <Calendar className="w-4 h-4 mr-1" />
            Book
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 flex items-center justify-center py-3 text-sm font-medium ${
              activeTab === 'history'
                ? 'bg-blue-100 text-blue-700 border-t-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <User className="w-4 h-4 mr-1" />
            History
          </button>
          {isAdmin && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 flex items-center justify-center py-3 text-sm font-medium ${
                activeTab === 'admin'
                  ? 'bg-blue-100 text-blue-700 border-t-2 border-blue-600'
                  : 'text-gray-500'
              }`}
            >
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </button>
          )}
        </div>
      </div>
    </header>
  );
}