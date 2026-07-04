# WAD - Web Application Document

## Simula Brasil

**Autores:**
[Ademir Antônio dos Santos Júnior](https://www.linkedin.com/in/ademir-junior-9ba005357/)
[Igor da Silva Rodrigues](https://www.linkedin.com/in/igor-dasilva-rodrigues/)
[Julia Jesus Bezerra](https://www.linkedin.com/in/julia-jesus-bezerra-a872b5321/)

## Sumário

[1. Introdução](#c1)

[2. Visão Geral da Aplicação Web](#c2)

[3. Projeto Técnico da Aplicação Web](#c3)

[4. Desenvolvimento da Aplicação Web](#c4)

[5. Testes da Aplicação Web](#c5)

[6. Estudo de Mercado e Plano de Marketing](#c6)

[7. Conclusões e trabalhos futuros](#c7)

[8. Referências](#c8)

<br>


# <a name="c1"></a>1. Introdução

No Brasil, garantir que estudantes de escolas públicas desenvolvam soft skills e hard skills importantes, como trabalhar em grupo, pensar criticamente, falar em público e defender opiniões, ainda é um grande desafio. As simulações da ONU (MUN) estão entre as experiências mais eficazes para desenvolver essas competências, pesquisa da UNILA (2025) aponta que a participação em MUNs aprimora oratória, negociação e pensamento crítico, além de aprofundar a compreensão das relações internacionais.¹

O problema é que esse tipo de oportunidade não chega à maior parte dos estudantes brasileiros. As simulações seguem concentradas em colégios particulares e faculdades, com inscrições que podem custar de R$100 a mais de R$1.000 por participante, o que inviabiliza a participação de alunos de baixa renda, muitos dos quais nem sabem que esse universo existe.² A barreira fica ainda mais evidente diante da escala da rede pública, segundo o Censo Escolar 2024 (INEP), 83,1% das matrículas do ensino médio estão na rede estadual pública.³ São justamente esses estudantes que as simulações hoje praticamente não alcançam. E, para quem organiza, há um segundo obstáculo: estruturar um fórum exige de semanas a meses de planejamento intensivo, inviabilizando o evento mesmo onde há vontade institucional.

Nesse contexto, propomos o Simula Brasil, projeto que tem como objetivo fomentar o desenvolvimento de alunos periféricos por meio das simulações da ONU. A solução reúne diferentes sites e funcionalidades em torno de um mesmo propósito: democratizar o acesso ao universo MUN.
A primeira frente é uma aplicação web que automatiza toda a estrutura organizacional de uma simulação, reduzindo um processo de semanas ou meses para poucas horas ou minutos com montagem automática do fórum, distribuição inteligente de países e comitês, geração de temáticas e cenários de crise por agentes de IA, formação de diretorias. O diferencial está no uso de agentes de inteligência artificial, que executam em minutos o que hoje demanda equipes inteiras.
A segunda frente é uma plataforma voltada à formação e ao acesso de estudantes de baixa renda, reunindo conteúdo educacional, agenda de eventos, um fundo de financiamento para alunos em vulnerabilidade e a inscrição institucional em eventos parceiros.

Além de reduzir drasticamente o tempo e o esforço de organização, a solução torna viável que qualquer escola, pública ou privada, com ou sem experiência prévia em MUN, realize seu próprio fórum, ao mesmo tempo em que oferece a estudantes de baixa renda o preparo e o acesso necessários para participar. Dessa forma, o Simula Brasil busca romper a barreira que hoje restringe as simulações da ONU à elite, ampliando o alcance de uma formação que desenvolve pensamento crítico, oratória e cidadania justamente entre os jovens que mais têm a ganhar com ela.

# <a name="c2"></a>

## 2. Visão Geral da Aplicação Web

## 2.1. Escopo do Projeto

### 2.1.1. Modelo de 5 Forças de Porter

As Cinco Forças de Porter são utilizadas para analisar a competitividade de um mercado através de cinco dimensões estratégicas (PORTER, 1980). Nesta seção, essa metodologia foi aplicada para compreender o contexto de [INSTITUIÇÃO/PARCEIRO] e alinhar o desenvolvimento da solução ao seu ambiente competitivo.

<div align="center">
  <sub>Figura 1 — Modelo de 5 Forças de Porter</sub><br>
  <img src="../assets/[IMAGEM].png" width="100%" alt="Modelo de 5 Forças de Porter"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

**1. Análise da rivalidade entre concorrentes existentes**

> _[Preencher: análise + classificação (baixa/moderada/alta).]_

**2. Poder de barganha dos fornecedores**

> _[Preencher.]_

**3. Poder de barganha dos clientes**

> _[Preencher.]_

**4. Ameaça de novos entrantes**

> _[Preencher.]_

**5. Ameaça de produtos substitutos**

> _[Preencher.]_

### 2.1.2. Análise SWOT da Instituição Parceira

<div align="center">
  <sub>Figura 2 — Análise SWOT de [INSTITUIÇÃO]</sub><br>
  <img src="../assets/[IMAGEM].png" width="600" alt="Análise SWOT"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: leitura das Forças, Fraquezas, Oportunidades e Ameaças e como a solução atua sobre elas.]_

### 2.1.3. Solução

**1 - Problema a ser resolvido:**
As simulações da ONU (MUN) são reconhecidas como uma das metodologias mais eficazes para o desenvolvimento de competências socioemocionais e técnicas em estudantes, mas permanecem estruturalmente restritas a instituições privadas e universidades. Essa restrição decorre de dois fatores combinados: o alto custo de participação, que exclui estudantes de baixa renda, e a elevada complexidade operacional de organizar um fórum, que demanda de semanas a meses de trabalho e equipes numerosas. O resultado é a exclusão da rede pública, responsável pela maior parte das matrículas do ensino médio no país, de uma formação com comprovado impacto no desenvolvimento de pensamento crítico, oratória e cidadania.

**2 - Dados disponíveis** (mencionar fonte e conteúdo; se não houver, indicar "não se aplica"):

O projeto não dispõe de uma base de dados primária estruturada. A fundamentação apoia-se em: dados educacionais oficiais do Censo Escolar 2024 (INEP), que dimensionam a rede pública e evidenciam o público potencial da solução; artigos científicos já publicados sobre o impacto pedagógico das simulações da ONU e sua relevância no mercado educacional; e um artigo científico próprio, em desenvolvimento, voltado a consolidar evidências sobre a importância e o potencial de escala das simulações no contexto brasileiro.

**3 - Solução proposta:**

A solução consiste em uma aplicação web que automatiza a estrutura organizacional de uma simulação da ONU e a integra a uma plataforma de formação e acesso para estudantes de baixa renda. A aplicação será desenvolvida com React no front-end, Node.js no back-end e PostgreSQL como banco de dados relacional, garantindo escalabilidade e integridade das informações; a camada de inteligência artificial será construída em Python com o framework LangGraph, responsável por orquestrar os múltiplos agentes do sistema. O sistema conta com: geração automática da estrutura do fórum a partir dos dados de inscrição; distribuição inteligente de países e comitês; agentes de inteligência artificial responsáveis por gerar temáticas e cenários de crise; formação automatizada das diretorias; e uma plataforma complementar de formação, com conteúdo educacional, agenda de eventos, fundo de financiamento e inscrição institucional em eventos parceiros.

**4 - Forma de utilização da solução:**

O organizador, escola, coletivo ou instituição, acessa a aplicação e informa os dados básicos do evento (número de participantes, escolas envolvidas e nível de experiência dos delegados). A partir dessas informações, os agentes de IA geram automaticamente a estrutura completa do fórum, cabendo ao organizador revisar e ajustar o resultado antes da realização. Paralelamente, os estudantes utilizam a plataforma de formação para se preparar, acompanhar a agenda de eventos e, quando elegíveis, acessar o fundo de financiamento e a inscrição institucional.

**5 - Benefícios esperados:**

Espera-se reduzir drasticamente o tempo e o esforço necessários para organizar uma simulação, tornando viável a realização de fóruns em escolas sem estrutura ou experiência prévia em MUN. Do lado dos estudantes, espera-se ampliar o acesso da rede pública a uma formação de alto impacto, contribuindo para o desenvolvimento de competências valorizadas acadêmica e profissionalmente e para a redução da desigualdade de oportunidades nesse campo.

**6 - Critério de sucesso e como será avaliado:**

O sucesso será medido pela implementação real da solução em pelo menos uma escola pública, viabilizando um fórum que antes seria inviável. Os critérios incluem: geração completa e automatizada da estrutura de um fórum, sem intervenção manual na etapa de montagem; realização de ao menos uma simulação com alunos da rede pública utilizando a plataforma; e, como indicador de impacto de médio prazo, a premiação de pelo menos um aluno participante em uma simulação externa reconhecida, como o FAAP MUN ou o SPMUN. A avaliação ocorrerá de forma contínua, por meio de testes das funcionalidades a cada sprint e do acompanhamento dos alunos nos eventos externos.

### 2.1.4. Value Proposition Canvas:

<div align="center">
  <sub>Figura 3 — Canvas de Proposta de Valor</sub><br>
  <img src="../assets/[IMAGEM].png" width="600" alt="Canvas de Proposta de Valor"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

#### A. Perfil do Cliente

Público-alvo principal: [descrever]. Público secundário: [descrever].

a) Tarefas do cliente

> _[Preencher.]_

b) Dores

> _[Preencher.]_

c) Ganhos

> _[Preencher.]_

#### B. Mapa de Valor

a) Produtos e Serviços

> _[Preencher.]_

b) Aliviadores de Dores

> _[Preencher.]_

c) Criadores de Ganho

> _[Preencher.]_

### 2.1.5. Matriz de Riscos do Projeto

A Matriz de Riscos é uma ferramenta visual utilizada para priorizar os riscos de um projeto com base em duas dimensões: probabilidade, que mede a chance de um risco ocorrer, e impacto, que representa suas consequências caso se concretize (PROJECT MANAGEMENT INSTITUTE, 2017). A combinação dessas dimensões gera uma classificação geral — alta, média ou baixa — representada por cores, facilitando o foco nos riscos mais críticos e orientando a construção de planos de ação preventivos.

<div align="center">
  <sub>Figura 4 — Matriz de Riscos — Ameaças</sub><br>
  <img src="../assets/[IMAGEM].png" width="600" alt="Matriz de Riscos — Ameaças"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: para cada ameaça — natureza, probabilidade, impacto, classificação geral e plano de ação.]_

<div align="center">
  <sub>Figura 5 — Matriz de Riscos — Oportunidades</sub><br>
  <img src="../assets/[IMAGEM].png" width="600" alt="Matriz de Riscos — Oportunidades"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: para cada oportunidade — natureza, probabilidade, impacto, classificação geral e plano de ação.]_

## 2.2. Personas

Durante essa seção, nossa equipe utilizou o conceito de proto-personas para identificar os perfis de usuários que a plataforma irá atender. Proto-personas são representações hipotéticas construídas com base no conhecimento prévio da equipe e nos dados disponíveis sobre o contexto do projeto, sem necessariamente passar por pesquisas formais com usuários reais (GOTHELF; SEIDEN, 2013).

### 2.2.1 Persona - [PERFIL]

> _[Preencher: descrição da persona, contexto, responsabilidades e dores.]_

<div align="center">
  <sub>Figura [N] — Persona [PERFIL]</sub><br>
  <img src="../assets/[IMAGEM].png" width="70%" alt="Persona [PERFIL]"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Repetir o bloco acima para cada persona do projeto.]_

## 2.3. User Stories

> _[Preencher uma tabela por User Story, seguindo o modelo abaixo.]_

Identificação | US[NN]
--- | ---
Persona | [Nome da persona]
User Story | "Eu, como [perfil], quero [ação/objetivo] para [benefício]."
Critério de aceite 1 | CR1: Dado que [contexto], quando [ação], então [resultado esperado].
Critério de aceite 2 | CR2: Dado que [contexto], quando [ação], então [resultado esperado].
Critérios INVEST | <ul><li>I (Independente): [justificar]</li><li>N (Negociável): [justificar]</li><li>V (Valiosa): [justificar]</li><li>E (Estimável): [justificar]</li><li>S (Small/Pequena): [justificar]</li><li>T (Testável): [justificar]</li></ul>

# <a name="c3"></a>3. Projeto da Aplicação Web

## 3.1. Requisitos do Sistema

### 3.1.1. Requisitos Funcionais

| ID    | Descrição | Prioridade | Status |
|-------|-----------|------------|--------|
| RF001 | [Descrição] | [Alto/Média/Baixo] | [Planejado/Implementado/...] |
| RF002 | [Descrição] | | |
| ...   | | | |

### 3.1.2. Regras de Negócio

| ID    | Descrição | RF associado |
|-------|-----------|--------------|
| RN001 | [Descrição] | [RFxxx] |
| RN002 | [Descrição] | |
| ...   | | |

### 3.1.3. Requisitos Não Funcionais — baseados em ISO/IEC 25010 e FURPS+

| Eixo                     | Requisito | Métrica / Critério | Como atendido |
|--------------------------|-----------|--------------------|---------------|
| USAB — Usabilidade       | | | |
| CONF — Confiabilidade    | | | |
| DES — Desempenho         | | | |
| SUP — Suportabilidade    | | | |
| SEG — Segurança          | | | |
| CAP — Capacidade         | | | |
| REST — Restrições Design | | | |
| ORG — Organizacionais    | | | |

### 3.1.4. Matriz RF → RN → Endpoint

| RF | RN associadas | Endpoint | Método | Status |
|----|---------------|----------|--------|--------|
| [RFxxx] | [RNxxx] | `[/endpoint]` | [GET/POST/...] | [status] |

## 3.2. Arquitetura

### 3.2.1. Diagrama de Arquitetura

> _[Preencher: descrição do padrão arquitetural adotado e responsabilidade de cada camada.]_

<div align="center">
  <sub>Figura [N] — Diagrama de Arquitetura</sub><br>
  <img src="../assets/[IMAGEM].png" width="70%" alt="Diagrama de Arquitetura"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 3.2.2. Diagrama de Casos de Uso

<div align="center">
  <sub>Figura [N] — Diagrama de Caso de Uso</sub><br>
  <img src="../assets/[IMAGEM].png" width="70%" alt="Diagrama de Caso de Uso"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 3.2.3. Diagrama de Classes do Domínio

O diagrama de classes do domínio representa a estrutura estática do sistema, modelando as entidades centrais da plataforma, seus atributos e os relacionamentos entre elas. Segundo Booch, Rumbaugh e Jacobson (2007), o diagrama de classes descreve o vocabulário do sistema e serve de base tanto para o projeto do banco de dados quanto para a implementação do código.

A notação de multiplicidade utilizada segue o padrão (mínimo, máximo), onde:
- 1 indica participação obrigatória e única na relação
- 0..1 indica participação opcional e limitada a um único registro
- 0..* indica participação opcional e múltipla (equivalente a 0,N)
- 1..* indica participação obrigatória e múltipla (equivalente a 1,N)

<div align="center">
  <sub>Figura [N] — Diagrama de Classes do Domínio</sub><br>
  <img src="../assets/[IMAGEM].png" width="100%" alt="Diagrama de Classes do Domínio"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

| Tipo de linha | Símbolo visual | Significado | Exemplo no projeto |
|---|---|---|---|
| **Associação simples** | Linha sólida sem pontas especiais | Duas entidades se relacionam, mas existem de forma independente | [Exemplo] |
| **Associação direcional** | Linha sólida com seta aberta em uma ponta | Relacionamento de sentido único | [Exemplo] |
| **Agregação** | Linha sólida com losango vazio na ponta | Uma entidade é "parte de" outra, mas pode existir independentemente | [Exemplo] |
| **Composição** | Linha sólida com losango preenchido na ponta | Uma entidade depende completamente da outra para existir | [Exemplo] |

### 3.2.3.1. Diagrama de Classes Arquitetural

Um diagrama de classes arquitetural representa a estrutura estática do sistema com foco na distribuição de responsabilidades entre as camadas (controllers, services, repositories e models).

> _[Opcional: criar um diagrama por perfil de usuário caso a estrutura completa fique extensa.]_

<div align="center">
  <sub>Figura [N] — Diagrama de Classes Arquitetural [PERFIL]</sub><br>
  <img src="../assets/[IMAGEM].png" width="100%" alt="Diagrama de Classes Arquitetural"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: descrição dos controllers, services, repositories e models envolvidos.]_

### 3.2.4. Diagrama de Sequência UML

> _[Preencher: um subtópico por fluxo relevante, com descrição da interação entre componentes.]_

### 3.2.4.1 - Diagrama de Sequência - [FLUXO]

> _[Preencher.]_

<div align="center">
  <sub>Figura [N] — Diagrama de Sequência — [FLUXO]</sub><br>
  <img src="../assets/[IMAGEM].png" width="70%" alt="Diagrama de Sequência"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 3.2.5. Diagrama de Atividades ou Estados

> _[Preencher ou indicar "Não se aplica".]_

### 3.2.6. Diagrama de Implantação

> _[Preencher ou indicar "Não se aplica".]_

### 3.2.7. Padrões de Projeto Aplicados

> _[Preencher a tabela abaixo com os padrões utilizados no projeto.]_

| Padrão | Onde se aplica no projeto | Necessidade real atendida | Princípios SOLID relacionados |
|---|---|---|---|
| [Padrão] | [Onde] | [Por quê] | [SRP/OCP/LSP/ISP/DIP] |

#### Princípios SOLID aplicados

| Princípio | Aplicação no projeto | Justificativa |
|---|---|---|
| **S — Single Responsibility Principle** | | |
| **O — Open/Closed Principle** | | |
| **L — Liskov Substitution Principle** | | |
| **I — Interface Segregation Principle** | | |
| **D — Dependency Inversion Principle** | | |

## 3.3. Wireframes

Wireframes são representações visuais simplificadas de uma interface, utilizados para mapear e planejar o layout e a organização dos elementos ainda na fase inicial de desenvolvimento (AELA, 2022). Wireflows são diagramas que representam o fluxo de navegação entre as telas.

### 3.3.1 - [PERFIL] - [Desktop/Mobile]

> _[Preencher: descrição do fluxo/wireflow e de cada tela.]_

<div align="center">
  <sub>Figura [N] — [Wireflow/Wireframe] [PERFIL/TELA]</sub><br>
  <img src="../assets/[IMAGEM].png" alt="[descrição]" width="600"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Repetir os blocos de figura + descrição para cada tela/perfil.]_

## 3.4. Guia de estilos

Guia de estilos é o documento com as regras do que pode e não pode ser feito pela marca (CANVA, 2024), reunindo paleta de cores, tipografia, iconografia e imagens que orientam o desenvolvimento e a manutenção da interface.

### 3.4.1 Cores

<div align="center">
  <sub>Figura [N] — Paleta de cores</sub><br>
  <img src="../assets/[IMAGEM].png" alt="Paleta de cores" width="600"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: cores principais, secundárias, neutras e de feedback, com HEX, nome e onde/como cada uma é aplicada.]_

### 3.4.2 Tipografia

<div align="center">
  <sub>Figura [N] — Tipografia da plataforma</sub><br>
  <img src="../assets/[IMAGEM].png" alt="Tipografia" width="1200"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: família(s) tipográfica(s), pesos e hierarquia.]_

### 3.4.3 Iconografia e imagens

<div align="center">
  <sub>Figura [N] — Iconografia da plataforma</sub><br>
  <img src="../assets/[IMAGEM].png" alt="Iconografia" width="1100"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: biblioteca de ícones adotada e critérios de uso de imagens.]_

## 3.5 Protótipo de alta fidelidade

> _[Preencher: ferramenta utilizada, objetivo e link público do protótipo.]_
> Link do protótipo: [URL]

### 3.5.1 Protótipo do [PERFIL]

> _[Preencher: introdução do conjunto de telas do perfil.]_

### 3.5.1.1 [Nome da Tela]

<div align="center">
  <sub>Figura [N] — Protótipo [PERFIL] - [Tela]</sub><br>
  <img src="../assets/[IMAGEM].png" alt="[descrição]" width="900"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

> _[Preencher: descrição da tela e US/RF relacionados. Repetir para cada tela e cada perfil.]_

## 3.6. Modelagem do banco de dados

> _[Preencher: introdução ao processo de modelagem (ER, DER, físico), entidades identificadas e cardinalidades.]_

<a name="multiplicidades"></a>

<table>
  <thead>
    <tr style="background-color: #4a7c9e; color: white;">
      <th>Entidade A</th>
      <th>Cardinalidade A</th>
      <th>Cardinalidade B</th>
      <th>Entidade B</th>
      <th>Explicação simples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Entidade]</td><td>[x,y]</td><td>[x,y]</td><td>[Entidade]</td>
      <td>[Explicação]</td>
    </tr>
  </tbody>
</table>

### 3.6.1. Modelo Entidade-Relacionamento (ER)

> _[Preencher: descrição do modelo conceitual (DEVMEDIA, [s. d.]).]_

<div align="center">
  <sub>Figura [N] — Modelo de Entidade-Relacionamento (ER)</sub><br>
  <img src="../assets/[IMAGEM].png" width="90%" alt="Modelo ER"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 3.6.2. Diagrama Entidade-Relacionamento (DER)

> _[Preencher: descrição do modelo lógico (atributos, PKs, FKs, cardinalidades, normalização).]_

<div align="center">
  <sub>Figura [N] — Diagrama de Entidades-Relacionais (DER) lógico</sub><br>
  <img src="../assets/[IMAGEM].png" width="80%" alt="DER lógico"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 3.6.3. Modelo Relacional e Modelo Físico

> _[Preencher: descrição do modelo físico e inserir o script DDL abaixo.]_

```sql
-- [Inserir aqui o script de criação de tabelas, constraints e índices]
```

### 3.6.4. Consultas SQL e lógica proposicional

As consultas SQL são comandos usados para se comunicar com um banco de dados. Para construir essas consultas, utilizamos operadores lógicos:
- **AND (E):** exige que todas as condições sejam verdadeiras.
- **OR (OU):** basta que uma das condições seja verdadeira.
- **NOT (NÃO):** inverte a condição, excluindo determinados registros.

> _[Preencher uma tabela por consulta, seguindo o modelo abaixo.]_

| [N] | [Título/tipo da consulta] |
| --- | --- |
| **Expressão SQL** | [SQL] |
| **Proposições lógicas** | $A$: [...] <br> $B$: [...] |
| **Expressão lógica proposicional** | [expressão] |
| **Tabela Verdade** | [tabela verdade] |

## 3.7 WebAPI e endpoints

A Web API é um conjunto de regras e protocolos que permite a comunicação entre sistemas por meio da web (FIELDING, 2000). A API segue o padrão REST, utilizando JSON para troca de dados. Os endpoints são os pontos de acesso disponibilizados pela API (RICHARDSON; RUBY, 2007).

> Link da documentação WebAPI: [URL]

> _[Preencher um bloco por requisito funcional/endpoint, seguindo o modelo abaixo.]_

### RF[NNN] - [Nome do requisito]

> **RF[NNN]:** [Descrição do requisito.]

### `[MÉTODO] /[endpoint]`

**Descrição:** [descrição da operação.]

**Headers:**
```
Content-Type: application/json
Authorization: Bearer <token>
```

**Path Params:**

| Param | Tipo | Descrição |
|---|---|---|
| `[param]` | [tipo] | [descrição] |

**Request Body:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `[campo]` | [tipo] | [Sim/Não] | [descrição] |

**Responses:**

`200 OK` / `201 Created`
```json
{ }
```

`400 Bad Request` / `404 Not Found` / `409 Conflict` / `422 Unprocessable Entity` / `500 Internal Server Error`
```json
{ "error": "[mensagem]" }
```

### Resumo dos endpoints

| RF | Endpoint | Método | Descrição resumida |
|---|---|---|---|
| [RFxxx] | `[/endpoint]` | [método] | [descrição] |

## 3.8. Autenticação, Autorização e Resiliência

### 3.8.1. Autenticação

> _[Preencher: mecanismo de login, hashing de senha e dados retornados.]_

### 3.8.2. Controle de sessão

> _[Preencher: tipo de token, atributos do cookie, validade e segredo de assinatura.]_

### 3.8.3. Autorização

> _[Preencher: middleware de autorização por perfil e regras de acesso.]_

### 3.8.4. Estratégias de Resiliência

> _[Preencher ou indicar "Não se aplica".]_

## 3.9. Matriz de Rastreabilidade (RTM)

| Persona | RF | RN | Método | Endpoint | Tela | US | Teste | Status | Evidência |
|---|---|---|---|---|---|---|---|---|---|
| [Persona] | [RFxxx] | [RNxxx] | [método] | `[/endpoint]` | [Tela] | [USxx] | [CT-xxx] | [status] | [evidência] |

# <a name="c4"></a>4. Desenvolvimento da Aplicação Web

## 4.1. Primeira versão da aplicação web

> _[Preencher: resumo da sprint e da entrega.]_

### (a) O que foi implementado

> _[Preencher: configuração do servidor, camada de persistência, endpoints, validações e testes, com figuras de evidência.]_

<div align="center">
  <sub>Figura [N] — [descrição]</sub><br>
  <img src="../assets/[IMAGEM].png" width="80%" alt="[descrição]"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### (b) O que não foi concluído

> _[Preencher.]_

### (c) Dificuldades técnicas enfrentadas e próximos passos

> _[Preencher.]_

## 4.2. Segunda versão da aplicação web

> _[Preencher: evolução em relação à versão anterior.]_

### (a) O que foi implementado

> _[Preencher, com figuras de evidência.]_

### (b) O que não foi concluído

> _[Preencher.]_

### (c) Dificuldades técnicas enfrentadas

> _[Preencher.]_

### (d) Próximos passos

> _[Preencher.]_

## 4.3. Versão final da aplicação web

> _[Preencher: resumo da entrega final.]_

### (a) O que foi refinado/adicionado desde a versão anterior

> _[Preencher, com figuras de evidência.]_

### (b) O que não foi concluído

> _[Preencher.]_

### (c) Dificuldades técnicas enfrentadas

> _[Preencher.]_

# <a name="c5"></a>5. Testes

## 5.1. Relatório de testes de integração de endpoints automatizados

### 5.1.1. Estratégia de Testes

> _[Preencher: abordagem por camada (white-box/black-box), padrão AAA (Arrange → Act → Assert) e critérios de determinismo.]_

### 5.1.2. Testes Unitários de Service (White-box)

> _[Preencher: casos de teste prioritários no formato AAA e tabela de mapeamento CT → RN → RF.]_

| CT | RN | RF | Cenário | Status esperado |
|---|---|---|---|---|
| [CT-Sxx] | [RNxxx] | [RFxxx] | [cenário] | [status] |

### 5.1.3. Testes de Integração de Endpoints (Black-box)

> _[Preencher: para cada RF/endpoint, cobrir os cenários-chave (sucesso, validação, regra de negócio e recurso não encontrado).]_

| CT | Endpoint | Método | Cenário | Status | RN/RF |
|---|---|---|---|---|---|
| [CT-xxx] | `[/endpoint]` | [método] | [cenário] | [status] | [RN/RF] |

### 5.1.4. Evidências de Execução

> _[Preencher: output de `npm run test`, relatório de cobertura e mapeamento CT → RN → RF, com figuras.]_

<div align="center">
  <sub>Figura [N] — [descrição da evidência de teste]</sub><br>
  <img src="../assets/[IMAGEM].png" width="80%" alt="[descrição]"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

## 5.2. Testes de usabilidade

### 5.2.1. Relatório de testes de guerrilha

Os testes de usabilidade avaliam as interações e comportamentos do usuário ao executar tarefas na plataforma. Segundo Nielsen (2000), testes com cinco usuários são suficientes para revelar a maioria dos problemas críticos de uma interface. As categorias de resposta são: S (Sucesso), P (Parcial) e N (Não concluiu).

> _[Preencher: data, participantes, método, limitações e link para a planilha de testes.]_

#### 5.2.1.1. Relatório de testes por perfil

> _[Preencher: por perfil e por tarefa — resultado, observações e proposta de melhoria.]_

#### 5.2.1.2. Erros críticos por perfil e visão de transformação

> _[Preencher.]_

#### 5.2.1.3. Classificação dos problemas identificados

| Perfil | Erro crítico consolidado | Impacto | Prioridade |
|---|---|---|---|
| [Perfil] | [erro] | [impacto] | [0-4] |

### 5.2.2. Relatório de testes SUS (System Usability Scale)

O System Usability Scale (SUS) é um questionário de dez afirmações proposto por Brooke (1996) que resume a usabilidade percebida em uma pontuação de 0 a 100. Como referência, Sauro e Lewis (2016) apontam 68 como a média histórica.

> _[Preencher: data, participantes, tabela de pontuação individual/média e análise por afirmação.]_

| Participante | SUS (0–100) | Classificação |
|--------------|:-----------:|---------------|
| [Nome] | [nota] | [classificação] |
| **Média geral** | **[média]** | **[classificação]** |

<div align="center">
  <sub>Figura [N] — Pontuação SUS por participante</sub><br>
  <img src="../assets/[IMAGEM].png" width="100%" alt="Gráfico SUS"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 5.2.3. Priorização das melhorias detectadas

> _[Preencher: consolidar problemas por severidade (0-4).]_

| Severidade | Ponto de melhoria | Onde foi observado | Ação proposta |
|:---:|---|---|---|
| [0-4] | [ponto] | [origem] | [ação] |

# <a name="c6"></a>6. Estudo de Mercado e Plano de Marketing

## 6.1 Resumo Executivo

> _[Preencher.]_

## 6.2 Análise de Mercado

*a) Visão Geral do Setor (até 250 palavras)*

> _[Preencher.]_

*b) Tamanho e Crescimento do Mercado (até 250 palavras)*

> _[Preencher.]_

*c) Tendências de Mercado (até 300 palavras)*

> _[Preencher.]_

## 6.3 Público-Alvo

*a) Segmentação de Mercado (até 250 palavras)*

> _[Preencher.]_

*b) Perfil do Público-Alvo (até 250 palavras)*

> _[Preencher.]_

## 6.4 Posicionamento

*a) Proposta de Valor Única (até 250 palavras)*

> _[Preencher.]_

*b) Posicionamento e Diferenciação (até 250 palavras)*

> _[Preencher.]_

## 6.5 Estratégia de Marketing

*a) Produto/Serviço (até 200 palavras)*

> _[Preencher.]_

*b) Preço (até 200 palavras)*

> _[Preencher.]_

*c) Praça (Distribuição) (até 200 palavras)*

> _[Preencher.]_

*d) Promoção (até 200 palavras)*

> _[Preencher.]_

## 6.6 Business Model Canvas

O Business Model Canvas, proposto por Osterwalder e Pigneur (2011), é uma ferramenta estratégica que representa a lógica de criação, entrega e captura de valor de um negócio por meio de nove blocos fundamentais.

<div align="center">
  <sub>Figura [N] — Business Model Canvas</sub><br>
  <img src="../assets/[IMAGEM].png" width="600" alt="Business Model Canvas"><br>
  <sup>Fonte: Autores, [ANO].</sup>
</div>

### 6.6.1 Segmentos de Clientes

> _[Preencher.]_

### 6.6.2 Proposta de Valor

> _[Preencher.]_

### 6.6.3. Canais

> _[Preencher.]_

### 6.6.4. Relacionamento com Clientes

> _[Preencher.]_

### 6.6.5. Fontes de Receita

> _[Preencher.]_

### 6.6.6. Recursos Principais

> _[Preencher.]_

### 6.6.7. Atividades Principais

> _[Preencher.]_

### 6.6.8. Parcerias Principais

> _[Preencher.]_

### 6.6.9. Estrutura de Custos

> _[Preencher.]_

# <a name="c7"></a>

## 7. Conclusões e trabalhos futuros

> _[Preencher: balanço da entrega frente aos objetivos e critérios de sucesso da seção 2; pontos fortes; limitações e planos de ação; e oportunidades de evolução futura.]_

# <a name="c8"></a>8. Referências

> _[Preencher: referências no padrão ABNT, em ordem alfabética.]_

[SOBRENOME, Nome. Título. Local: Editora, ano. Disponível em: <URL>. Acesso em: [data].]