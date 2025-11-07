import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/banner.png';
import ItemForm, { ItemFormData } from '../componentes/forms/ItemForm';
import '../styles/home.css';
import '../styles/cadastroItem.css';

export default function TrocaNovo(){
  const nav = useNavigate();

  async function handleSubmit(data: ItemFormData){
    console.log('Salvar TROCA:', data);
    alert('Item de TROCA cadastrado com sucesso!');
    nav('/troca');
  }

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width:'100%', maxWidth:'1000px' }} />
          </div>
        </section>

        <ItemForm kind="troca" onSubmit={handleSubmit} onCancel={()=>nav('/troca')} />
      </main>
    </div>
  );
}
