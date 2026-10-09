import React from 'react';
import styles from './styles.module.css';

const PRINCIPAL = [
  {nome: 'Azul', papel: 'Cor da marca', hex: '#002B66', rgb: '0 43 102', uso: 'Títulos, logotipo, botões principais, cabeçalho e links.', texto: '#FFFFFF'},
];

const SECUNDARIAS = [
  {nome: 'Verde', papel: 'Apoio e sucesso', hex: '#0A7E65', rgb: '10 126 101', uso: 'Confirmações, destaques positivos, subtítulos.', texto: '#FFFFFF'},
  {nome: 'Dourado', papel: 'Acento', hex: '#E5A913', rgb: '229 169 19', uso: 'Chamadas, selos e ícones sobre fundo escuro. Texto sobre dourado, sempre grafite.', texto: '#2B2B2B'},
  {nome: 'Roxo', papel: 'Acento', hex: '#6A3B73', rgb: '106 59 115', uso: 'Gráficos, categorias e elementos de apoio.', texto: '#FFFFFF'},
];

const NEUTRAS = [
  {nome: 'Branco', papel: 'Fundo base', hex: '#FFFFFF', rgb: '255 255 255', uso: 'Fundo das páginas e cartões.', texto: '#2B2B2B'},
  {nome: 'Cinza Claro', papel: 'Superfícies', hex: '#D9D9D9', rgb: '217 217 217', uso: 'Divisores, campos e blocos de fundo.', texto: '#2B2B2B'},
  {nome: 'Cinza Escuro', papel: 'Texto de apoio', hex: '#737373', rgb: '115 115 115', uso: 'Legendas e textos secundários.', texto: '#FFFFFF'},
  {nome: 'Grafite', papel: 'Texto principal', hex: '#2B2B2B', rgb: '43 43 43', uso: 'Texto corrido e títulos neutros.', texto: '#FFFFFF'},
];

const FEEDBACK = [
  {nome: 'Sucesso', hex: '#0A7E65', rgb: '10 126 101', uso: 'Cadastro concluído, fórum gerado.', texto: '#FFFFFF'},
  {nome: 'Atenção', hex: '#E5A913', rgb: '229 169 19', uso: 'Prazos, revisão pendente.', texto: '#2B2B2B'},
  {nome: 'Erro', hex: '#B3261E', rgb: '179 38 30', uso: 'Falhas e campos inválidos.', texto: '#FFFFFF'},
  {nome: 'Informação', hex: '#002B66', rgb: '0 43 102', uso: 'Avisos e dicas.', texto: '#FFFFFF'},
];

const GRUPOS = {principal: PRINCIPAL, secundarias: SECUNDARIAS, neutras: NEUTRAS, feedback: FEEDBACK};

export function Paleta({grupo}) {
  const cores = GRUPOS[grupo];
  return (
    <div className={styles.paleta}>
      {cores.map((c) => (
        <div key={c.nome} className={styles.cor}>
          <div className={styles.amostra} style={{background: c.hex, color: c.texto}}>
            <strong>{c.nome}</strong>
            {c.papel && <span>{c.papel}</span>}
            <code className={styles.hex}>{c.hex}</code>
            <span className={styles.rgb}>RGB {c.rgb}</span>
          </div>
          <p className={styles.uso}>{c.uso}</p>
        </div>
      ))}
    </div>
  );
}

const CONTRASTE = [
  {fg: '#002B66', bg: '#FFFFFF', par: 'azul / branco', uso: 'Botão principal, cabeçalho', razao: '13.7:1', ok: true},
  {fg: '#2B2B2B', bg: '#FFFFFF', par: 'grafite / branco', uso: 'Texto corrido', razao: '14.2:1', ok: true},
  {fg: '#737373', bg: '#FFFFFF', par: 'cinza / branco', uso: 'Legendas', razao: '4.7:1', ok: true},
  {fg: '#0A7E65', bg: '#FFFFFF', par: 'verde / branco', uso: 'Subtítulos, sucesso', razao: '5.0:1', ok: true},
  {fg: '#6A3B73', bg: '#FFFFFF', par: 'roxo / branco', uso: 'Elementos de apoio', razao: '8.4:1', ok: true},
  {fg: '#2B2B2B', bg: '#E5A913', par: 'grafite / dourado', uso: 'Texto sobre dourado', razao: '6.8:1', ok: true},
  {fg: '#E5A913', bg: '#002B66', par: 'dourado / azul', uso: 'Destaque sobre azul', razao: '6.5:1', ok: true},
  {fg: '#FFFFFF', bg: '#E5A913', par: 'branco / dourado', uso: 'Texto branco sobre dourado', razao: '2.1:1', ok: false},
  {fg: '#E5A913', bg: '#FFFFFF', par: 'dourado / branco', uso: 'Texto dourado sobre branco', razao: '2.1:1', ok: false},
];

export function TabelaContraste() {
  return (
    <table>
      <thead>
        <tr>
          <th>Combinação</th>
          <th>Uso</th>
          <th>Razão</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        {CONTRASTE.map((c) => (
          <tr key={c.par}>
            <td>
              <span className={styles.aa} style={{color: c.fg, background: c.bg}}>Aa</span> {c.par}
            </td>
            <td>{c.uso}</td>
            <td>{c.razao}</td>
            <td className={c.ok ? styles.aprovado : styles.reprovado}>
              {c.ok ? 'Aprovado (AA)' : 'Não usar para texto'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const ESCALA = [
  {rotulo: 'Título H1', spec: '32 px / 40 · Bold · Azul', exemplo: 'Monte seu fórum', estilo: {fontSize: 32, lineHeight: '40px', fontWeight: 700, color: '#002B66'}},
  {rotulo: 'Título H2', spec: '24 px / 32 · Bold · Azul', exemplo: 'Escolha os comitês', estilo: {fontSize: 24, lineHeight: '32px', fontWeight: 700, color: '#002B66'}},
  {rotulo: 'Título H3', spec: '20 px / 28 · Bold · Verde', exemplo: 'Formação para estudantes', estilo: {fontSize: 20, lineHeight: '28px', fontWeight: 700, color: '#0A7E65'}},
  {rotulo: 'Título H4', spec: '16 px / 24 · Bold · Grafite', exemplo: 'Perfil do cliente', estilo: {fontSize: 16, lineHeight: '24px', fontWeight: 700, color: '#2B2B2B'}},
  {rotulo: 'Corpo', spec: '16 px / 24 · Regular · Grafite', exemplo: 'Informe quantos alunos vão participar e a plataforma monta o fórum para você.', estilo: {fontSize: 16, lineHeight: '24px', color: '#2B2B2B'}},
  {rotulo: 'Legenda', spec: '13 px / 20 · Regular · Cinza escuro', exemplo: 'Você pode revisar e ajustar tudo antes do evento.', estilo: {fontSize: 13, lineHeight: '20px', color: '#737373'}},
];

export function EscalaTipografica() {
  return (
    <div className={styles.escala}>
      {ESCALA.map((e) => (
        <div key={e.rotulo} className={styles.nivel}>
          <div className={styles.rotulo}>
            <strong>{e.rotulo}</strong>
            <span>{e.spec}</span>
          </div>
          <div style={e.estilo}>{e.exemplo}</div>
        </div>
      ))}
      <div className={styles.nivel}>
        <div className={styles.rotulo}>
          <strong>Botão</strong>
          <span>16 px · Bold · branco sobre azul</span>
        </div>
        <div>
          <span className="button button--primary">Criar meu fórum</span>
        </div>
      </div>
    </div>
  );
}
