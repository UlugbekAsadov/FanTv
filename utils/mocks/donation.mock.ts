import { recommendedDonatinoGenerator } from '../funcs/generate-recommended-donation';
import {
  IDonationForm,
  IDonationMethod,
} from '../interfaces/donation.interface';

export const MIN_DONATION = 5000;

export const recommendedDonations = recommendedDonatinoGenerator(MIN_DONATION);

export const DONATION_METHODS: IDonationMethod[] = [
  {
    icon: '/icons/uzcard-humo.png',
    type: 'uzcard',
  },
  {
    icon: '/icons/visa.png',
    type: 'visa',
  },
  {
    icon: '/icons/payme.png',
    type: 'payme',
  },
  {
    icon: '/icons/click.png',
    type: 'click',
  },
];

export const DEFAULT_DONATION_FORM: IDonationForm = {
  name: '',
  amount: MIN_DONATION,
  is_anonymous: false,
  message: '',
  gateway: DONATION_METHODS[0].type,
};
