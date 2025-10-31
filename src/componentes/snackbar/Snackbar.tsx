import estilos from './Snackbar.module.css'
import { useEffect, useState } from 'react'
type Props = { mensagem?: string; duracao?: number }
export default function Snackbar({ mensagem, duracao=3000 }: Props){
  const [visivel,setVisivel]=useState(Boolean(mensagem))
  useEffect(()=>{ if(!mensagem) return; setVisivel(true) },[])
  useEffect(()=>{ if(!mensagem) return; setVisivel(true); const t=setTimeout(()=>setVisivel(false), duracao); return ()=>clearTimeout(t) },[mensagem,duracao])
  if(!mensagem) return null
  return (<div aria-live='polite' role='status' className={[estilos.snackbar, visivel?estilos.ativo:estilos.inativo].join(' ')}>{mensagem}</div>)
}
