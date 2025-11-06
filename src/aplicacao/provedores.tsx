import { createContext, useContext, useMemo, useState, PropsWithChildren } from 'react'
import Snackbar from '../componentes/snackbar/Snackbar'

type UIState = { mensagem?: string; notificar: (m: string) => void }
const UIContext = createContext<UIState | null>(null)
export function useUI(){ const c = useContext(UIContext); if(!c) throw new Error('UIContext'); return c }

export type Usuario = { id: string; nome: string; email: string; tipo: 'responsavel' | 'admin' }
type AuthState = { usuario?: Usuario | null; entrar: (e:string,s:string)=>Promise<void>; cadastrar:(n:string,e:string,s:string)=>Promise<void>; sair:()=>void }
const AuthContext = createContext<AuthState | null>(null)
export function useAuth(){ const c = useContext(AuthContext); if(!c) throw new Error('AuthContext'); return c }


export default function Provedores({ children }: PropsWithChildren){
  const [mensagem, setMensagem] = useState<string|undefined>()
  const ui = useMemo<UIState>(()=>({ mensagem, notificar:(m)=>setMensagem(m) }),[mensagem])

  const [usuario, setUsuario] = useState<Usuario|null>(null)
  async function entrar(email:string, senha:string){
    const { autenticar } = await import('../infraestrutura/api/auth'); const u = await autenticar(email, senha); setUsuario(u)
  }
  async function cadastrar(nome:string, email:string, senha:string){
    const { registrar } = await import('../infraestrutura/api/auth'); const u = await registrar(nome, email, senha); setUsuario(u)
  }
  function sair(){ const { sair:sairApi } = require('../infraestrutura/api/auth'); sairApi(); setUsuario(null) }
  const auth = useMemo<AuthState>(()=>({ usuario, entrar, cadastrar, sair }),[usuario])

  
  return (
    <UIContext.Provider value={ui}>
      <AuthContext.Provider value={auth}>
        {children}
        <Snackbar mensagem={mensagem} />
      </AuthContext.Provider>
    </UIContext.Provider>
  )
}
