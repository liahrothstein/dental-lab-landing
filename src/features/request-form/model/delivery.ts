import { REQUEST_DELIVERY_NOTE } from '@constants/config';

import type { RequestFormData } from './types';

export const DELIVERY_NOTE = REQUEST_DELIVERY_NOTE;

export async function deliverRequest(_data: RequestFormData): Promise<void> {
  // TODO: реальный канал доставки. См. варианты в config.ts.
  // Контракт: resolve — заявка доставлена, reject — ошибка, показать юзеру.
  await new Promise((resolve) => setTimeout(resolve, 900));
}