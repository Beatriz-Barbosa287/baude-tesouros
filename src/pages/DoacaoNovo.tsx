import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/banner.png';
import ItemForm, { ItemFormData } from '../componentes/forms/ItemFormDoacao';
import '../styles/home.css';
import '../styles/cadastroItem.css';

export default function DoacaoNovo(){
  const nav = useNavigate();

  async function handleSubmit(data: ItemFormData){
    console.log('Salvar DOACAO:', data);
    alert('Doação cadastrada com sucesso!');
    nav('/doacao');
  }

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width:'100%', maxWidth:'1000px' }} />
          </div>
        </section>

        <ItemForm kind="doacao" onSubmit={handleSubmit} onCancel={()=>nav('/doacao')} />
      </main>
    </div>
  );
}
