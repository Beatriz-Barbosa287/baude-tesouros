import React from 'react';
import ItemCard, { Kind } from './ItemCard';

export type Produto = { id: string; name: string; image?: string; kind: Kind };

export default function ProductGrid({ items }: { items: Produto[] }){
  if (!items?.length) {
    return (
      <div className="bt-list" style={{ textAlign:'center', padding: 24 }}>
        <div style={{ fontWeight: 800, marginBottom: 6 }}>Nenhum item encontrado</div>
        <div style={{ color:'#666' }}>Tente ajustar os filtros ou a busca.</div>
      </div>
    );
  }

  return (
    <div className="bt-grid">
      {items.map((p) => (
        <ItemCard key={p.id} name={p.name} image={p.image} kind={p.kind} />
      ))}
    </div>
  );
}
