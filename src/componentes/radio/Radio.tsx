import estilos from './Radio.module.css'
import { InputHTMLAttributes } from 'react'
type Props = InputHTMLAttributes<HTMLInputElement> & { rotulo?: string }
export default function Radio({ rotulo, name, ...props }: Props){ return (<label className={estilos.caixa}><input type='radio' name={name} className={estilos.input} {...props}/><span>{rotulo}</span></label>) }
