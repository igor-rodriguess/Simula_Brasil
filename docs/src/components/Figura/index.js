import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * Figura no padrão do WAD: legenda acima, imagem e fonte abaixo.
 * Sem `src`, mostra um espaço reservado para a figura pendente.
 */
export default function Figura({numero, titulo, src, alt, fonte, largura = '100%'}) {
  const url = useBaseUrl(src || '');
  return (
    <figure className={styles.figura}>
      <figcaption className={styles.legenda}>
        Figura {numero} — {titulo}
      </figcaption>
      {src ? (
        <img src={url} alt={alt || titulo} style={{width: largura}} loading="lazy" />
      ) : (
        <div className={styles.pendente} role="img" aria-label={`Figura pendente: ${titulo}`}>
          Figura pendente
        </div>
      )}
      {fonte && <div className={styles.fonte}>Fonte: {fonte}</div>}
    </figure>
  );
}
