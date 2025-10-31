import estilos from './Badge.module.css'
type Props = { texto: string, cor?: 'padrao'|'sucesso'|'alerta'|'erro' }
export default function Badge({ texto, cor='padrao' }: Props){ return <span className={[estilos.badge, estilos[cor]].join(' ')}>{texto}</span> }
