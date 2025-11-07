import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/banner.png';
import ItemForm, { ItemFormData } from '../componentes/forms/ItemForm';
import '../styles/home.css';
import '../styles/cadastroItem.css';

export default function VendaNovo(){
  const nav = useNavigate();

  async function handleSubmit(data: ItemFormData){
    // TODO: enviar para sua API
    console.log('Salvar VENDA:', data);
    alert('Item de VENDA cadastrado com sucesso!');
    nav('/venda');
  }

  return (
    <div className="bt-shell">
      <main className="bt-content">
        <section className="bt-banner">
          <div className="illus">
            <img src={logo} alt="Baú de Tesouros" style={{ width:'100%', maxWidth:'1000px' }} />
          </div>
        </section>

        <ItemForm kind="venda" onSubmit={handleSubmit} onCancel={()=>nav('/venda')} />
      </main>
    </div>
  );
}
