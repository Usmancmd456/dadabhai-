import { Car, CarType } from '../types';

export const INVENTORY: Car[] = [
  {
    id: '1',
    make: 'Verdant',
    model: 'Sylvan GT',
    year: 2024,
    price: 85000,
    type: CarType.COUPE,
    image: 'https://picsum.photos/seed/car1/800/600',
    description: 'A masterpiece of engineering, the Sylvan GT combines raw power with eco-conscious materials.',
    features: ['Hybrid V6', 'Teak Wood Interior', 'Panoramic Roof'],
    mileage: 0
  },
  {
