import { ler, gravar } from '../../infraestrutura/armazenamento/local'
import { uid } from '../../utilitarios/uid'

export type TipoUsuario = 'responsavel' | 'admin'
export type Usuario = { id: string; nome: string; email: string; tipo: TipoUsuario }

const CH = 'api_usuarios'
const SESSAO = 'api_sessao'

const delay = <T,>(v: T, ms = 300) => new Promise<T>((r) => setTimeout(() => r(v), ms))

function init(): Usuario[] {
  let usuarios = ler<Usuario[]>(CH, [])
  if (!usuarios.length) {
    usuarios = [
      { id: uid('usr'), nome: 'Admin', email: 'admin@demo', tipo: 'admin' },
      { id: uid('usr'), nome: 'Beatriz', email: 'bea@demo', tipo: 'responsavel' },
      { id: uid('usr'), nome: 'Adrielly', email: 'adri@demo', tipo: 'responsavel' },
    ]
    gravar(CH, usuarios)
  }
  return usuarios
}

/** Login simples: valida por e-mail (senha é ignorada no mock) */
export async function autenticar(email: string, _senha: string): Promise<Usuario> {
  const usuarios = init()
  const u = usuarios.find((x) => x.email === email)
  if (!u) throw new Error('Usuário não encontrado')
  gravar(SESSAO, u)
  return delay(u)
}

export async function registrar(nome: string, email: string, _senha: string): Promise<Usuario> {
  const usuarios = init()
  if (usuarios.some((x) => x.email === email)) throw new Error('E-mail já cadastrado')
  const novo: Usuario = { id: uid('usr'), nome, email, tipo: 'responsavel' }
  usuarios.push(novo)
  gravar(CH, usuarios)
  gravar(SESSAO, novo)
  return delay(novo)
}

export function usuarioAtual(): Usuario | null {
  try {
    return ler<Usuario | null>(SESSAO, null)
  } catch {
    return null
  }
}

export function sair(): void {
  gravar(SESSAO, null as any)
}
