import type { RequestFormData } from './types';

export function validateName(name: string): string | null {
  return name.trim().length >= 2 ? null : 'Введите имя (минимум 2 символа)';
}

export function validatePhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) return 'Введите корректный телефон (минимум 10 цифр)';
  return null;
}

export function validateForm(data: RequestFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  const nameError = validateName(data.name);
  const phoneError = validatePhone(data.phone);
  if (nameError) errors.name = nameError;
  if (phoneError) errors.phone = phoneError;
  return errors;
}