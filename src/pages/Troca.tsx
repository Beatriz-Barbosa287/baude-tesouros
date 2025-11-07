import React, { useMemo, useState } from 'react';
import logo from '../assets/banner.png';
import ProductGrid, { Produto } from '../componentes/ProductGrid';
import Button from '../componentes/ui/Button';
import '../styles/home.css';

export default function Troca() {
  const data: Produto[] = [
    { id:'1', name:'Carro Vermelho', kind:'troca' },
    { id:'2', name:'Mini Boneco',    kind:'troca' },
    { id:'3', name:'Kit Blocos',     kind:'troca' },
  ];

  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.max(1, Math.ceil(data.length / perPage));
  const pageItems = useMemo(() => data.slice((page-1)*perPage, (page-1)*perPage+perPage), [data, page]);

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width:'100%', maxWidth:'1000px' }} />
          </div>
        </section>

        <section className="bt-list" style={{ marginTop: 18 }}>
          <h3>Itens Disponíveis para Troca</h3>

          <ProductGrid items={pageItems} />

          <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:14 }}>
            <Button variant="neutral" size="sm" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>◀</Button>
            <div style={{ alignSelf:'center', fontWeight:800 }}>{page} / {totalPages}</div>
            <Button variant="neutral" size="sm" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>▶</Button>
          </div>

          <div style={{ textAlign:'center', marginTop:18 }}>
            <Button variant="danger">➕ CADASTRAR NOVO ITEM PARA TROCA</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
