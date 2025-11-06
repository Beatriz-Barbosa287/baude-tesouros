/** Listas e constantes reaproveitáveis no app (evita “strings mágicas”) */

export const CATEGORIAS = ['Brinquedos', 'Roupas', 'Livros', 'Acessórios'] as const
export const CONDICOES = ['Novo', 'Pouco uso', 'Usado'] as const
export const TIPOS_TRANSACAO = ['venda', 'doacao', 'troca'] as const

export type CategoriaConst = typeof CATEGORIAS[number]
export type CondicaoConst = typeof CONDICOES[number]
export type TransacaoConst = typeof TIPOS_TRANSACAO[number]
