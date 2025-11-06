import React from 'react';

type Kind = 'venda'|'troca'|'doacao';
export type ItemCardProps = {
  name: string;
  image?: string;
  kind: Kind;
};

const label = { venda:'VENDA', troca:'TROCA', doacao:'DOAÇÃO' };

export default function ItemCard({ name, image, kind }: ItemCardProps){
  return (
    <div className="bt-card">
      <div className="thumb">
        {image ? <img src={image} alt={name} /> : <span>📦</span>}
      </div>
      <div className="body">
        <span className={`bt-chip ${kind}`}>{label[kind]}</span>
        <div className="name">{name}</div>
        <button className="btn">Saiba Mais</button>
      </div>
    </div>
  );
}
