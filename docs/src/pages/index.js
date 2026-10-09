import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const PRINCIPIOS = [
  {cor: 'var(--sb-azul)', titulo: 'Confiável', texto: 'Gestoras precisam de provas, não de promessas. Visual sóbrio, informação clara e sem exageros.'},
  {cor: 'var(--sb-dourado)', titulo: 'Acolhedor', texto: 'Alguns estudantes acham que MUNs não são para eles. Linguagem acessível em português e imagens de gente parecida com eles.'},
  {cor: 'var(--sb-verde)', titulo: 'Simples e sem esforço', texto: 'Professores não têm tempo. Poucos cliques, fluxos “à prova de erros” e destaque para a próxima ação.'},
  {cor: 'var(--sb-roxo)', titulo: 'Inclusivo', texto: 'Usado em escolas periféricas, com conexão e telas variadas. Contraste alto, textos legíveis e boa leitura no celular.'},
];

const CAPITULOS = [
  {n: 1, titulo: 'Introdução', to: '/wad'},
  {n: 2, titulo: 'Visão geral da aplicação', to: '/wad/visao-geral/escopo'},
  {n: 3, titulo: 'Projeto da aplicação', to: '/wad/projeto/requisitos'},
  {n: 4, titulo: 'Desenvolvimento', to: '/wad/desenvolvimento/primeira-versao'},
  {n: 5, titulo: 'Testes', to: '/wad/testes/testes-automatizados'},
  {n: 6, titulo: 'Mercado e marketing', to: '/wad/mercado/resumo-executivo'},
  {n: 7, titulo: 'Conclusões', to: '/wad/conclusoes'},
  {n: 8, titulo: 'Referências', to: '/wad/referencias'},
];

function Wordmark() {
  return (
    <div className={styles.wordmark} aria-label="Simula Brasil">
      <span className={styles.simula}>SIMULA</span>
      <span>
        <span className={styles.bra}>BRA</span>
        <span className={styles.sil}>SIL</span>
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Documentação"
      description="Documentação do Simula Brasil: simulações da ONU ao alcance de toda escola pública.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.marca}>
            <img src={useBaseUrl('/img/logo.png')} alt="" className={styles.simbolo} />
            <Wordmark />
          </div>
          <p className={styles.tagline}>
            Uma aplicação web que monta fóruns de simulação da ONU em minutos e uma plataforma que
            prepara estudantes de baixa renda para participar deles.
          </p>
          <div className={styles.acoes}>
            <Link className="button button--primary button--lg" to="/wad">
              Ler a documentação
            </Link>
            <Link className="button button--secondary button--lg" to="/wad/projeto/guia-de-estilos">
              Ver o guia de estilos
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container margin-vert--xl">
          <h2 className={styles.secaoTitulo}>Princípios da interface</h2>
          <div className={styles.principios}>
            {PRINCIPIOS.map((p) => (
              <div key={p.titulo} className={styles.principio} style={{borderLeftColor: p.cor}}>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container margin-bottom--xl">
          <h2 className={styles.secaoTitulo}>Capítulos do WAD</h2>
          <div className={styles.capitulos}>
            {CAPITULOS.map((c) => (
              <Link key={c.n} to={c.to} className={styles.capitulo}>
                <span className={styles.numero}>{c.n}</span>
                <span>{c.titulo}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
