import estilos from './Input.module.css'
import { InputHTMLAttributes, forwardRef } from 'react'
type Props = InputHTMLAttributes<HTMLInputElement> & { rotulo?: string; mensagem?: string; erro?: boolean }
const Input = forwardRef<HTMLInputElement, Props>(function Input({ rotulo, mensagem, erro, ...props }, ref){
  return (
    <label className={estilos.grupo}>
      {rotulo && <span className={estilos.rotulo}>{rotulo}</span>}
      <input ref={ref} className={[estilos.campo, erro?estilos.erro:''].join(' ')} {...props} />
      {mensagem && <small className={[estilos.mensagem, erro?estilos.mensagemErro:''].join(' ')}>{mensagem}</small>}
    </label>
  )
})
export default Input
