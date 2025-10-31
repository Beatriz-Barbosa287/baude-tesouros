import estilos from './Botao.module.css'
import { ButtonHTMLAttributes } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variante?: 'primario'|'secundario'|'fantasma'; tamanho?: 'sm'|'md'|'lg' }
export default function Botao({ variante='primario', tamanho='md', className='', ...props }: Props){ const cls=[estilos.botao,estilos[variante],estilos[tamanho],className].join(' '); return <button {...props} className={cls}/> }
