import estilos from './Checkbox.module.css'
import { InputHTMLAttributes } from 'react'
type Props = InputHTMLAttributes<HTMLInputElement> & { rotulo?: string }
export default function Checkbox({ rotulo, ...props }: Props){ return (<label className={estilos.caixa}><input type='checkbox' className={estilos.input} {...props}/><span>{rotulo}</span></label>) }
