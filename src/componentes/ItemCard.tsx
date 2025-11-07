import React from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';

export type Kind = 'venda' | 'troca' | 'doacao';

export type ItemCardProps = {
  name: string;
  image?: string;
  kind: Kind;
  onClick?: () => void;
};

export default function ItemCard({ name, image, kind, onClick }: ItemCardProps){
  return (
    <div className="bt-card">
      <div className="thumb">
        {image ? <img src={image} alt={name} /> : <span>📦</span>}
      </div>
      <div className="body">
        <Badge kind={kind} />
        <div className="name">{name}</div>
        <Button variant="neutral" size="sm" onClick={onClick}>Saiba Mais</Button>
      </div>
    </div>
  );
}
