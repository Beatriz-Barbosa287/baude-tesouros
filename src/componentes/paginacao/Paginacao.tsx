import estilos from './Modal.module.css'
import { PropsWithChildren, useEffect, useRef } from 'react'
type Props = PropsWithChildren & { aberto:boolean; titulo?:string; onFechar:()=>void }
export default function Modal({ aberto, titulo, onFechar, children }: Props){
  const refDialog = useRef<HTMLDialogElement|null>(null)
  useEffect(()=>{ const d=refDialog.current; if(!d) return; if(aberto && !d.open){ d.showModal(); const first=d.querySelector<HTMLElement>('[tabindex],button,input,select,textarea,a[href]'); first?.focus() } else if(!aberto && d.open){ d.close() } },[aberto])
  return (<dialog ref={refDialog} className={estilos.modal} aria-labelledby='titulo-modal'><div className={estilos.caixa}>{titulo&&<h3 id='titulo-modal' className={estilos.titulo}>{titulo}</h3>}<div className={estilos.conteudo}>{children}</div><div className={estilos.acoes}><button onClick={onFechar} className={estilos.fechar} aria-label='Fechar modal'>Fechar</button></div></div></dialog>)
}
