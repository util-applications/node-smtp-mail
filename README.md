# :email: node-smtp-mail
API simples utilizada para **serviço de e-mail via SMTP** sobre a plataforma **NodeJs**.

## Conteúdo

* [Sobre](#about)
* [Requisitos](#requirements)
* [Instalação](#installation)
* [Tecnologias](#technologies)

<div id='about'/> &nbsp;

## :pushpin: Sobre

A ideia deste projeto é ser um recurso rápido a ser utilizado em pequenos projetos. <br>

> Este projeto simplifica uma camada muito comum em diversos projetos: **a camada de envio de e-mail**.

Com isso, torna-se muito mais simples enviar um e-mail a um usuário do seu aplicativo, ou um cliente do seu sistema web, ou para os assinantes do seu serviço de *newsletter*, e até mesmo para enviar documentos de maneira formal, simples e automatizada.

E as vantagens de abstrair esta camada de envio de e-mail são diversas, como:

- [x] Rápido e simples de utilizar
- [x] Desacoplamento de serviços
- [x] Mantém a regra / lógica de negócio limpa de grandes implementações
- [x] Lógica especilizada na construção de templates
- [x] Facilmente substituível e escalável

> Além de ser ótimo para estudos e simulações em ambiente de desenvolvimento

<div id='requirements'/> &nbsp;

## :pushpin: Requisitos

- [x] [NodeJs](https://nodejs.org/en/) instalado (LTS version) - necessário para o gerenciamento de pacotes da aplicação, com `npm` (*Node Package Manager*)
- [x] IDE / Editor de texto - recomendado: [Visual Studio Code](https://code.visualstudio.com/)

### Requisitos específicos para Windows

Caso seu sistema operacional seja Windows, talvez alguns recursos adicionais sejam necessários:

> Chocolatey ou qualquer outro gerenciador de pacotes para Windows - **não é necessário**, utilize apenas o `npm`

<div id='installation'/> &nbsp;

## :pushpin: Instalação

>*Observe atentamente os [requisitos](#requirements) necessários para poder executar a aplicação no seu computador*

* Faça um `fork` deste projeto para sua conta

* Defina as variáveis de ambiente do projeto de acordo com o exemplo
  - Exemplo em `src/env/environment.example.js`
  - Este arquivo deve ser duplicado e nomeado como `environment.js`

* Dentro do repositório do projeto, da sua conta, abra um terminal/cmd e siga as seguintes instruções:

:one: Instale as dependências do projeto
```bash
npm install
```
:two: Inicie a execução local do projeto
```bash
npm start
```

<div id='technologies'/> &nbsp;

## :pushpin: Tecnologias

Este serviço é desenvolvido sobre as seguintes tecnologias:

![nodejs](assets/nodejs.jpg)

- [x] NodeJS
- [x] Express - Framework para NodeJS
- [x] EJS e Handlebars - Renders para templates dinâmicos (em desenvolvimento)
- [x] Nodemailer - Biblioteca/camada de abstração da interface de comunicação via SMTP
