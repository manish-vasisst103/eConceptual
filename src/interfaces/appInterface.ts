import { KeyboardTypeOptions } from 'react-native';

export interface LoginParams {
  email: string;
  password: string;
}

export interface ApiResponse {
  data: {
    token: string;
  };
}

export interface ProfileResponse {
  data: ProfileItems;
}

export interface ProfileItems {
  city: string;
  country: string;
  email: string;
  id: number;
  name: string;
  pincode: string;
}

export interface ProfileInputItems {
  name: 'city' | 'country' | 'email' | 'name' | 'pincode';
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  id: number;
  data?: { name: string }[];
}

export interface ProductListResponse {
  data: ProductListItems[];
  status: number;
}

export interface ProductListItems {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
