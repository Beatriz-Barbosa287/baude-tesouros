import React from 'react';
import logo from '../assets/logo.png';

export default function Topbar() {
  return (
    <header className="bt-topbar">
      <div className="bt-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="Baú de Tesouros" style={{ height: '50px' }} />
      </div>

      <div className="bt-search">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
            stroke="#999"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <input placeholder="Buscar brinquedos, livros, roupas..." />
      </div>
    </header>
  );
}
