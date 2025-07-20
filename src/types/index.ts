export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  active: boolean;
}

export interface TimeSlot {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  available: boolean;
  service_id: string;
}

export interface Booking {
  id: string;
  user_id: string;
  service_id: string;
  time_slot_id: string;
  date: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  total_amount: number;
  payment_status: 'pending' | 'paid' | 'failed';
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  vehicle_type: string;
  license_plate?: string;
  created_at: string;
  updated_at: string;
}

export interface AdminStats {
  totalBookings: number;
  todayBookings: number;
  revenue: number;
  activeServices: number;
}