export enum CarType {
  SEDAN = 'Sedan',
  SUV = 'SUV',
  COUPE = 'Coupe',
  CONVERTIBLE = 'Convertible',
  ELECTRIC = 'Electric'
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  type: CarType;
  image: string;
  description: string;
  features: string[];
  mileage: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FilterState {
  type: CarType | 'All';
  maxPrice: number;
}