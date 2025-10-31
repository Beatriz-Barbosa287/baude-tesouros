import Card from '@componentes/card/Card'
import Botao from '@componentes/botao/Botao'
import Badge from '@componentes/badge/Badge'
import { listar, atualizar } from '@infraestrutura/api/denuncias'
import { useEffect, useState } from 'react'
import { useUI } from '@aplicacao/provedores'

export default function Administracao() {
  const [denuncias, setDenuncias] = useState<any[]>([])
  const { notificar } = useUI()
  async function carregar(){ setDenuncias(await listar()) }
  useEffect(()=>{ carregar() },[])
  async function mudar(id: string, status: 'aberta'|'em_analise'|'fechada') {
    await atualizar(id, status); notificar('Status atualizado'); carregar()
  }
  return (
    <Card titulo='Moderação e denúncias'>
      {denuncias.length===0 ? <p>Sem denúncias.</p> : (
        <div style={{ display: 'grid', gap: 12 }}>
          {denuncias.map(d => (
            <div key={d.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }}>
              <div><strong>{d.motivo}</strong> · {d.descricao || '—'} · <Badge texto={d.status} /></div>
              <div style={{ display: 'flex', gap: 8 }}>
                <Botao variante='fantasma' onClick={()=>mudar(d.id, 'em_analise')}>Analisar</Botao>
                <Botao onClick={()=>mudar(d.id, 'fechada')}>Fechar</Botao>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
