import React from 'react';
import logo from '../assets/banner.png';
import ItemCard from '../componentes/ItemCard';
import '../styles/home.css';

export default function Home() {
  const mock = [
    { name: 'Carrinho de Passeio', kind: 'venda' as const },
    { name: 'Carro Vermelho', kind: 'troca' as const },
    { name: 'Fantasia Azul', kind: 'doacao' as const },
    { name: 'Boneca', kind: 'doacao' as const },
    { name: 'Mini Boneco', kind: 'troca' as const },
    { name: 'Motoca', kind: 'venda' as const },
    { name: 'Coleção HP', kind: 'venda' as const },
    { name: 'Kit Blocos', kind: 'troca' as const },
    { name: 'Caminhão', kind: 'venda' as const },
    { name: 'Boneco', kind: 'doacao' as const },
  ];

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          
          <div className="illus">
            <img src={logo} alt="Logo Baú de Tesouros" style={{ width: '100%', maxWidth: '1000px' }} />
          </div>
        </section>

        <section className="bt-row">
          <div className="bt-ads">Espaço para anúncio</div>
          <div className="bt-list">
            <h3>Itens Cadastrados Recentemente</h3>
            <div className="bt-grid">
              {mock.map((it, i) => (
                <ItemCard key={i} name={it.name} kind={it.kind} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
