import React, { useMemo, useState } from 'react';
import logo from '../assets/banner.png';
import ProductGrid, { Produto } from '../componentes/ProductGrid';
import Button from '../componentes/ui/Button';
import '../styles/home.css';

export default function Venda() {
  // fonte dos dados: somente itens do tipo 'venda'
  const data: Produto[] = [
    { id:'1', name:'Motoca Infantil', kind:'venda' },
    { id:'2', name:'Coleção HP',      kind:'venda' },
    { id:'3', name:'Boneco Disney',   kind:'venda' },

  ];

  // paginação simples
  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.max(1, Math.ceil(data.length / perPage));

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [data, page]);

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width:'100%', maxWidth:'1000px' }} />
          </div>
        </section>

        <section className="bt-list" style={{ marginTop: 18 }}>
          <h3>Produtos Classificados para Venda</h3>

          <ProductGrid items={pageItems} />

          {/* Paginação */}
          <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:14 }}>
            <Button variant="neutral" size="sm" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>◀</Button>
            <div style={{ alignSelf:'center', fontWeight:800 }}>{page} / {totalPages}</div>
            <Button variant="neutral" size="sm" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>▶</Button>
          </div>

          <div style={{ textAlign:'center', marginTop:18 }}>
            <Button variant="danger">➕ CADASTRAR NOVO ITEM PARA VENDA</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
