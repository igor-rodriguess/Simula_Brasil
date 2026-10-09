# Documentação do Simula Brasil

Site da documentação (WAD) feito com [Docusaurus](https://docusaurus.io/), com tema baseado no Guia de Estilos do projeto.

## Rodando localmente

```bash
cd docs
npm install
npm start      # servidor de desenvolvimento em http://localhost:3000/Simula_Brasil/
npm run build  # gera o site estático em docs/build
```

## Onde fica cada coisa

| Caminho | Conteúdo |
|---|---|
| `wad/` | Páginas da documentação, uma por seção do WAD |
| `../assets/` | Imagens do WAD, servidas direto da raiz do repositório (`assets/negocios/x.jpeg` vira `/negocios/x.jpeg`) |
| `src/css/custom.css` | Cores, tipografia e componentes do tema, conforme o Guia de Estilos |
| `src/components/` | `Figura`, `Ancora` e os blocos visuais do guia de estilos |
| `static/img/` | Logotipo (versão colorida e versão branca) |

## Adicionando uma figura

O componente `Figura` pode ser usado em qualquer página sem import e segue o padrão de legenda do WAD:

```mdx
<Figura numero="8" titulo="Diagrama de Arquitetura" src="/arquitetura/diagrama.png" largura="70%" fonte="Autores, 2026." />
```

Sem `src`, ele mostra um espaço reservado de "Figura pendente".
