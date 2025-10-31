import estilos from './Select.module.css'
import { SelectHTMLAttributes } from 'react'
type Props = SelectHTMLAttributes<HTMLSelectElement> & { rotulo?: string }
export default function Select({ rotulo, children, ...props }: Props){ return (<label className={estilos.grupo}>{rotulo && <span className={estilos.rotulo}>{rotulo}</span>}<select className={estilos.campo} {...props}>{children}</select></label>) }
