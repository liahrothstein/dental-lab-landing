export interface RequestFormData {
  name: string;
  phone: string;
  message: string;
}

export type RequestStatus = 'idle' | 'sending' | 'success' | 'error';