import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import BookingHistory from './components/BookingHistory';
import AdminPanel from './components/AdminPanel';

// Mock user data - in a real app, this would come from authentication
const MOCK_USER = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  isAdmin: true
};

function App() {
  const [activeTab, setActiveTab] = useState('booking');
  const [user] = useState(MOCK_USER);

  const renderContent = () => {
    switch (activeTab) {
      case 'booking':
        return <BookingForm />;
      case 'history':
        return <BookingHistory />;
      case 'admin':
        return user?.isAdmin ? <AdminPanel /> : <BookingForm />;
      default:
        return <BookingForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        isAdmin={user?.isAdmin || false}
      />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">AutoWash Pro</div>
                <div className="text-xs text-gray-500">Touchless Car Wash</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © 2024 AutoWash Pro. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Operating Hours: 8:00 AM - 8:00 PM, 7 Days a Week
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;