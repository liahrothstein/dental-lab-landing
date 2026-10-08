import './ServiceRow.scss';

import type { Service } from '../types';

interface ServiceRowProps {
    service: Service;
}

export function ServiceRow({ service }: ServiceRowProps) {
    return (
        <div className="price-row">
            <div className="price-info">
                <div className="price-title">{service.title}</div>
                <div className="price-description">{service.description}</div>
            </div>
            <div className="price-price">{service.price ?? 'по запросу'}</div>
        </div>
    );
}