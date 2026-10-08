import type { TabId } from './types';

export interface Tab {
    id: TabId;
    label: string;
}

export const tabs: Tab[] = [
    { id: 'price', label: 'Прайс-лист' },
    { id: 'order', label: 'Заказ-наряд' },
    { id: 'tour', label: 'Приглашение на экскурсию' },
];