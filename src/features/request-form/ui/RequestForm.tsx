import './RequestForm.scss';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import type { RequestFormData, RequestStatus } from '../model';
import { deliverRequest, DELIVERY_NOTE, validateForm } from '../model';

export function RequestForm() {
  const [data, setData] = useState<RequestFormData>({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<RequestStatus>('idle');

  const handleChange = (field: keyof RequestFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    try {
      await deliverRequest(data);
      setStatus('success');
      setData({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="request-form" onSubmit={handleSubmit} noValidate>
      <p className="request-form__note">{DELIVERY_NOTE}</p>

      <div className="request-form__field">
        <input
          type="text"
          placeholder="Ваше имя"
          value={data.name}
          onChange={handleChange('name')}
        />
        {errors.name && <span className="request-form__error">{errors.name}</span>}
      </div>

      <div className="request-form__field">
        <input
          type="tel"
          placeholder="Телефон"
          value={data.phone}
          onChange={handleChange('phone')}
        />
        {errors.phone && <span className="request-form__error">{errors.phone}</span>}
      </div>

      <div className="request-form__field">
        <textarea
          placeholder="Опишите задачу (необязательно)"
          value={data.message}
          onChange={handleChange('message')}
          rows={4}
        />
      </div>

      {status === 'success' && (
        <p className="request-form__status request-form__status--success">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === 'error' && (
        <p className="request-form__status request-form__status--error">
          Не удалось отправить. Попробуйте ещё раз или позвоните нам.
        </p>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
      </button>
    </form>
  );
}