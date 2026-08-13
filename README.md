# 🧪 JavaScript Testing Lab — Cypress

Projeto desenvolvido a partir de exercícios de lógica em **JavaScript**, posteriormente evoluído para incluir **testes automatizados com Cypress**, integração contínua com **GitHub Actions** e monitoramento das execuções através do **Cypress Cloud**.

O objetivo do projeto é demonstrar a evolução de funções JavaScript simples para uma estrutura testável e integrada a um fluxo de CI.

## 📋 Sobre o projeto

O projeto contém três exercícios de lógica desenvolvidos em JavaScript:

### 🔢 Soma de múltiplos
Calcula a soma dos números que atendem aos critérios de múltiplos definidos pela função.

### 📊 Maior e menor elemento de um array
Percorre um array numérico e identifica os índices correspondentes ao maior e ao menor valor.

### ➗ Máximo Divisor Comum (MDC)
Calcula o máximo divisor comum entre dois números.

As funções foram adaptadas para permitir sua exportação através de `module.exports`, possibilitando sua utilização nos testes automatizados.

## 🧪 Testes automatizados

Os testes foram implementados utilizando **Cypress**.

A suíte contempla diferentes cenários para validar o comportamento das funções, incluindo:

- cenários principais;
- valores alternativos;
- números negativos;
- números primos;
- arrays com apenas um elemento;
- validação dos resultados esperados.

Estrutura dos testes:

cypress/
└── e2e/
    ├── indiceArray.cy.js
    ├── mdc.cy.js
    └── somaMultiplos.cy.js

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- Git
- GitHub
- GitHub Actions
- Cypress Cloud

## 📁 Estrutura do projeto

Exercicio-JS/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── indiceArray.cy.js
│   │   ├── mdc.cy.js
│   │   └── somaMultiplos.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── function.js
├── indice.js
├── mdc.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md

## 🚀 Executando o projeto

### 1. Clone o repositório

git clone https://github.com/LucasBaccin/Exercicio-JS.git

### 2. Entre na pasta

cd Exercicio-JS

### 3. Instale as dependências

npm install

### 4. Abra o Cypress em modo interativo

npx cypress open

### 5. Execute todos os testes em modo headless

npx cypress run


## ☁️ Cypress Cloud

O projeto possui integração com o **Cypress Cloud**, permitindo acompanhar as execuções automatizadas e analisar informações como:

- quantidade de testes executados;
- testes aprovados e reprovados;
- duração das execuções;
- histórico de runs;
- comportamento das specs;
- resultados executados através do pipeline de CI.

As execuções enviadas pelo GitHub Actions ficam centralizadas no dashboard do projeto.

> A Record Key utilizada para autenticação com o Cypress Cloud é armazenada de forma segura utilizando **GitHub Actions Secrets**, evitando sua exposição no repositório.

## ⚙️ Integração Contínua

O projeto utiliza **GitHub Actions** para executar automaticamente os testes.

O pipeline é acionado em alterações enviadas para a branch `main` e realiza:

Push / Pull Request
        ↓
Checkout do repositório
        ↓
Configuração do Node.js
        ↓
Instalação das dependências
        ↓
Execução dos testes Cypress
        ↓
Registro dos resultados no Cypress Cloud

Isso permite validar automaticamente as funções a cada alteração realizada no projeto.

## 🎯 Objetivo de aprendizado

Este projeto foi inicialmente desenvolvido como exercício de lógica de programação em JavaScript e posteriormente expandido como parte dos estudos em **Quality Assurance**.

A evolução do projeto permitiu aplicar conceitos de:

- lógica de programação;
- modularização de funções;
- criação de cenários de teste;
- testes automatizados;
- assertions;
- execução headless;
- integração contínua;
- gerenciamento seguro de secrets;
- monitoramento de execuções no Cypress Cloud.

## 👨‍💻 Autor

**Lucas Baccin**

Projeto desenvolvido durante minha formação em Quality Assurance, com evolução posterior para aplicação prática de automação de testes e integração contínua.