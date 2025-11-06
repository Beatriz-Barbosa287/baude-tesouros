import { clamp } from '../../utilitarios/formatadores'

type Props = {
  pagina: number
  totalPaginas: number
  onMudar: (pagina: number) => void
  maximoVisivel?: number // quantidade de botões de página visíveis (opcional)
}

/**
 * Paginador acessível e simples, compatível com:
 * <Paginacao pagina={pagina} totalPaginas={totalPaginas} onMudar={setPagina} />
 */
export default function Paginacao({
  pagina,
  totalPaginas,
  onMudar,
  maximoVisivel = 5,
}: Props) {
  if (totalPaginas <= 1) return null

  const pg = clamp(pagina, 1, totalPaginas)

  // Cálculo de janela de páginas (ex.: mostra 5 páginas por vez)
  const metade = Math.floor(maximoVisivel / 2)
  let ini = pg - metade
  let fim = pg + metade

  if (ini < 1) {
    fim += 1 - ini
    ini = 1
  }
  if (fim > totalPaginas) {
    ini -= fim - totalPaginas
    fim = totalPaginas
    if (ini < 1) ini = 1
  }

  const paginas = []
  for (let p = ini; p <= fim; p++) paginas.push(p)

  function irPara(p: number) {
    const alvo = clamp(p, 1, totalPaginas)
    if (alvo !== pg) onMudar(alvo)
  }

  return (
    <nav
      aria-label="Paginação"
      style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        flexWrap: 'wrap',
      }}
    >
      <button
        type="button"
        onClick={() => irPara(1)}
        disabled={pg === 1}
        aria-label="Primeira página"
        style={estiloBotao(pg === 1)}
      >
        «
      </button>

      <button
        type="button"
        onClick={() => irPara(pg - 1)}
        disabled={pg === 1}
        aria-label="Página anterior"
        style={estiloBotao(pg === 1)}
      >
        ‹
      </button>

      {ini > 1 && <span style={reticencias}>…</span>}

      {paginas.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => irPara(p)}
          aria-current={p === pg ? 'page' : undefined}
          style={{
            ...estiloBotao(false),
            ...(p === pg ? estiloSelecionado : null),
          }}
        >
          {p}
        </button>
      ))}

      {fim < totalPaginas && <span style={reticencias}>…</span>}

      <button
        type="button"
        onClick={() => irPara(pg + 1)}
        disabled={pg === totalPaginas}
        aria-label="Próxima página"
        style={estiloBotao(pg === totalPaginas)}
      >
        ›
      </button>

      <button
        type="button"
        onClick={() => irPara(totalPaginas)}
        disabled={pg === totalPaginas}
        aria-label="Última página"
        style={estiloBotao(pg === totalPaginas)}
      >
        »
      </button>
    </nav>
  )
}

function estiloBotao(disabled: boolean): React.CSSProperties {
  return {
    border: '1px solid var(--borda)',
    background: disabled ? 'var(--cor-superficie)' : 'var(--cor-fundo)',
    borderRadius: 10,
    padding: '6px 10px',
    minWidth: 36,
    lineHeight: 1,
    fontSize: 'var(--fs-14)',
    cursor: disabled ? 'not-allowed' : 'pointer',
  }
}

const estiloSelecionado: React.CSSProperties = {
  borderColor: 'var(--cor-primaria)',
  background: 'var(--cor-superficie)',
  fontWeight: 700,
}

const reticencias: React.CSSProperties = {
  paddingInline: 4,
  color: 'var(--cor-texto-suave)',
}
