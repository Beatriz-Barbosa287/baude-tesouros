import React from 'react';
import logo from '../assets/banner.png';
import ItemCard from '../componentes/ItemCard';
import '../styles/home.css';

export default function Doacao() {
  const itens = [
    { name: 'Vestido Azul', kind: 'doacao' as const },
    { name: 'Boneca', kind: 'doacao' as const },
    { name: 'Chuteira Infantil', kind: 'doacao' as const },
    { name: 'Casaco Inverno', kind: 'doacao' as const },
    { name: 'Livros Infantis', kind: 'doacao' as const },
    { name: 'Pelúcia Jacaré', kind: 'doacao' as const },
    { name: 'Berço Portátil', kind: 'doacao' as const },
    { name: 'Tabuleiro', kind: 'doacao' as const },
    { name: 'Brinquedos Sortidos', kind: 'doacao' as const },
    { name: 'Carrinho Verde', kind: 'doacao' as const },
  ];

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width: '100%', maxWidth: '1000px' }} />
          </div>
        </section>

        <section className="bt-list" style={{ marginTop: 18 }}>
          <h3>Itens Disponíveis para Doação</h3>
          <div className="bt-grid">
            {itens.map((p, i) => (
              <ItemCard key={i} name={p.name} kind={p.kind} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <button
              style={{
                background: '#54C08A',
                color: '#fff',
                fontWeight: 800,
                border: 'none',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 3px 0 #3b966a',
              }}
            >
              🎁 CADASTRAR NOVA DOAÇÃO
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
