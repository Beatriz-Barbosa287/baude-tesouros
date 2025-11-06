import React from 'react';
import logo from '../assets/banner.png';
import ItemCard from '../componentes/ItemCard';
import '../styles/home.css';

export default function Venda() {
  const produtos = [
    { name: 'Motoca Infantil', kind: 'venda' as const },
    { name: 'Coleção HP', kind: 'venda' as const },
    { name: 'Boneco Disney', kind: 'venda' as const },
    { name: 'Jogo Educativo', kind: 'venda' as const },
    { name: 'Kit Blocos', kind: 'venda' as const },
    { name: 'Carrinho Azul', kind: 'venda' as const },
    { name: 'Pelúcia Urso', kind: 'venda' as const },
    { name: 'Quebra-Cabeça', kind: 'venda' as const },
    { name: 'Caminhão', kind: 'venda' as const },
    { name: 'Livro Infantil', kind: 'venda' as const },
  ];

  return (
    <div className="bt-shell">
      <main className="bt-content">
        {/* Banner igual ao da Home, com sua imagem */}
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width: '100%', maxWidth: '1000px' }} />
          </div>
        </section>

        <section className="bt-list" style={{ marginTop: 18 }}>
          <h3>Itens Disponíveis para Venda</h3>
          <div className="bt-grid">
            {produtos.map((p, i) => (
              <ItemCard key={i} name={p.name} kind={p.kind} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <button
              style={{
                background: '#FF4D4F',
                color: '#fff',
                fontWeight: 800,
                border: 'none',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 3px 0 #b92c2e',
              }}
            >
              ➕ CADASTRAR NOVO ITEM PARA VENDA
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
