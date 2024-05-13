import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function defaultOption(value: never): never {
  if (value) throw Error('You missed one of the case on switch');

  throw Error('You missed one of the case on switch');
}
