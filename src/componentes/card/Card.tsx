import estilos from './Card.module.css'
import { PropsWithChildren } from 'react'
type Props = PropsWithChildren & { titulo?: string; acoes?: React.ReactNode }
export default function Card({ titulo, acoes, children }: Props){ return (<article className={estilos.card}>{(titulo||acoes)&&(<header className={estilos.cabecalho}>{titulo&&<h3 className={estilos.titulo}>{titulo}</h3>}{acoes&&<div className={estilos.acoes}>{acoes}</div>}</header>)}<div className={estilos.conteudo}>{children}</div></article>) }
