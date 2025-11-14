import { Route, Routes, Navigate } from 'react-router-dom'
import LayoutPadrao from './ui/LayoutPadrao'
import RotaProtegida from './RotaProtegida'
import React from 'react'
import ItemForm from '../componentes/forms/ItemFormVenda'
import PaginaInicial from '../pages/Home'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import FormularioItemVenda from '../pages/VendaNovo'
import FormularioItemDoacao from '../pages/DoacaoNovo'
import FormularioItemTroca from '../pages/TrocaNovo'
import DetalheItem from '../pages/DetalheItem'
import Paginavenda from '../pages/Venda'
import Paginadoacao from '../pages/Doacao'
import Paginatroca from '../pages/Troca'
import Perfil from '../pages/Perfil'

//npm install react-router-dom && npm install -D @types/react @types/react-dom @types/react-router-dom
export default function Rotas() {
  return (
    <LayoutPadrao>
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='/venda' element={< Paginavenda />} />
        <Route path='/doacao' element={< Paginadoacao />} />
        <Route path='/troca' element={<Paginatroca />} />
        <Route path='/venda/novo' element={<FormularioItemVenda />} />
        <Route path='/troca/novo' element={<FormularioItemTroca />} />
        <Route path='/doacao/novo' element={<FormularioItemDoacao />} />
        <Route path='/item/:id' element={<DetalheItem />} />
       
        <Route path='/perfil' element={
          <RotaProtegida>
            <Perfil />
          </RotaProtegida>
        } />

      

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </LayoutPadrao>
  )
}
