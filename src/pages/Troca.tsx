import React from 'react';
import logo from '../assets/banner.png';
import ItemCard from '../componentes/ItemCard';
import '../styles/home.css';

export default function Troca() {
  const itens = [
    { name: 'Carro Vermelho', kind: 'troca' as const },
    { name: 'Mini Boneco', kind: 'troca' as const },
    { name: 'Kit Blocos', kind: 'troca' as const },
    { name: 'Jogo de Cartas', kind: 'troca' as const },
    { name: 'Patinete', kind: 'troca' as const },
    { name: 'Boneco Dragon', kind: 'troca' as const },
    { name: 'Cubo Mágico', kind: 'troca' as const },
    { name: 'Caminhão Azul', kind: 'troca' as const },
    { name: 'Livro Aventura', kind: 'troca' as const },
    { name: 'Quebra-Cabeça 100pç', kind: 'troca' as const },
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
          <h3>Itens Disponíveis para Troca</h3>
          <div className="bt-grid">
            {itens.map((p, i) => (
              <ItemCard key={i} name={p.name} kind={p.kind} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <button
              style={{
                background: '#58A9E0',
                color: '#fff',
                fontWeight: 800,
                border: 'none',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 3px 0 #377fb2',
              }}
            >
              🔄 CADASTRAR ITEM PARA TROCA
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
