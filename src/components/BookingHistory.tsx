import React, { useState } from 'react';
import { Calendar, Clock, Car, CreditCard, Phone, X, Edit2 } from 'lucide-react';

// Mock data - in a real app, this would come from your database
const MOCK_BOOKINGS = [
  {
    id: '1',
    service_name: 'Premium Wash',
    date: '2024-01-20',
    start_time: '10:00',
    end_time: '10:25',
    status: 'confirmed',
    total_amount: 19.99,
    payment_status: 'paid',
    vehicle_type: 'Sedan',
    license_plate: 'ABC123',
    created_at: '2024-01-15'
  },
  {
    id: '2',
    service_name: 'Basic Wash',
    date: '2024-01-18',
    start_time: '14:30',
    end_time: '14:45',
    status: 'completed',
    total_amount: 12.99,
    payment_status: 'paid',
    vehicle_type: 'SUV',
    license_plate: 'XYZ789',
    created_at: '2024-01-16'
  },
  {
    id: '3',
    service_name: 'Deluxe Package',
    date: '2024-01-25',
    start_time: '16:00',
    end_time: '16:35',
    status: 'pending',
    total_amount: 29.99,
    payment_status: 'paid',
    vehicle_type: 'Truck',
    license_plate: 'DEF456',
    created_at: '2024-01-19'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status) {
    case 'paid':
      return 'text-green-600';
    case 'pending':
      return 'text-yellow-600';
    case 'failed':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export default function BookingHistory() {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);

  const handleCancelBooking = (bookingId: string) => {
    console.log('Cancelling booking:', bookingId);
    setShowCancelModal(false);
    // In a real app, you would make an API call here
  };

  const handleRescheduleBooking = (bookingId: string) => {
    console.log('Rescheduling booking:', bookingId);
    setShowRescheduleModal(false);
    // In a real app, you would make an API call here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">My Bookings</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your car wash appointments</p>
        </div>

        <div className="divide-y divide-gray-200">
          {MOCK_BOOKINGS.map((booking) => (
            <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {booking.service_name}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {booking.start_time} - {booking.end_time}
                    </div>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      {booking.vehicle_type} {booking.license_plate && `(${booking.license_plate})`}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm">
                        <CreditCard className="w-4 h-4 mr-1" />
                        <span className={getPaymentStatusColor(booking.payment_status)}>
                          {booking.payment_status.charAt(0).toUpperCase() + booking.payment_status.slice(1)}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        ${booking.total_amount}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {booking.status === 'confirmed' || booking.status === 'pending' ? (
                        <>
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setShowRescheduleModal(true);
                            }}
                            className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                          >
                            <Edit2 className="w-3 h-3 mr-1 inline" />
                            Reschedule
                          </button>
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setShowCancelModal(true);
                            }}
                            className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors"
                          >
                            <X className="w-3 h-3 mr-1 inline" />
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {MOCK_BOOKINGS.length === 0 && (
          <div className="p-12 text-center">
            <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600">
              Book your first car wash appointment to see it here.
            </p>
          </div>
        )}
      </div>

      {/* Cancel Booking Modal */}
      {showCancelModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancel Booking</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your {selectedBooking.service_name} appointment
              on {new Date(selectedBooking.date).toLocaleDateString()} at {selectedBooking.start_time}?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Keep Booking
              </button>
              <button
                onClick={() => handleCancelBooking(selectedBooking.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Booking Modal */}
      {showRescheduleModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reschedule Booking</h3>
            <p className="text-gray-600 mb-6">
              Reschedule your {selectedBooking.service_name} appointment. You'll be able to
              select a new date and time on the next page.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowRescheduleModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRescheduleBooking(selectedBooking.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}