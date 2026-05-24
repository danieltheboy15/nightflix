export interface Sponsor {
  name: string;
  id: string;
  tagline: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  emoji: string;
  perks: string[];
}

export interface Booking {
  ticket: TicketType;
  quantity: number;
}

export interface AttendeeInfo {
  name: string;
  email: string;
  phone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
