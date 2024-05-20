import { DonationTypes } from '../types/donation.type';

export interface IDonationMethod {
  icon: string;
  type: DonationTypes;
}

export interface IDonationForm extends IDonationFormRequest {
  is_anonymous?: boolean;
}

export interface IDonationFormRequest {
  name: string;
  amount: number;
  message?: string;
  gateway: DonationTypes;
}

export interface IDonationInit {
  data: {
    about: string;
    backgroundPhoto: string;
    name: string;
    profilePhoto: string;
    textColor: string;
  };
}
