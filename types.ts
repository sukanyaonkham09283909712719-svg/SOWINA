import { ReactElement } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Necklace' | 'Bracelet' | 'Ring' | 'Hair Clip';
  belief: 'การงาน' | 'การเงิน' | 'ความรัก' | 'สุขภาพ' | 'ความสมดุล';
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'Home' | 'Shop' | 'Our Story' | 'Custom Design' | 'Consultation';

export interface BeliefCategory {
  key: string;
  name: 'การงาน' | 'การเงิน' | 'ความรัก' | 'สุขภาพ' | 'ความสมดุล';
  icon: ReactElement;
  color: string;
  hoverColor: string;
}