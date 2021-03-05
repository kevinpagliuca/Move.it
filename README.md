<p align="center">
  <img src="https://user-images.githubusercontent.com/51030560/108794224-24d43b00-7564-11eb-805a-4fb4dd34b9be.png" alt="MoveIt" />
</p>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kevinpagliuca/move.it">                                       
  <img alt="GitHub" src="https://img.shields.io/github/license/kevinpagliuca/move.it?color=brightgreen">
</p>

#

<p align="center">
  <a href="#-Tecnologias">Tecnologhies</a> •
  <a href="#-Começando-com-o-projeto">Getting Started</a> • 
  <a href="#-project">Project</a> • 
  <a href="#-license">License</a>
</p>

## 💻 O Projeto

<p align="justify">
O aplicativo foi desenvolvido com base na Técnica de pomodoro, que consiste na utilização de um cronômetro para dividr o tempo de trabalho em períodos de 25 minutos e realizar uma pausa, fazendo com essas pausas aumente a agilidade mental.
No projeto, temos o nosso cronômetro de 25 minutos que quando atingir o valor de 0, irá disponibilizar ao usuário um desafio para ser realizado nesse tempo de pausa, como por exemplo, esticar os braços, descansar os olhos ou se levantar da cadeira e andar um pouco,e caso o desafio seja concluído, você irá ganhar experiência que influenciará no seu nível e conforme mais níveis, mais dificil vai ficando para ir para o próximo nível, e caso você falhe no desafio, acabará não recebendo experiência.
  
<br/>

### Preview da aplicação.

   - Página de login
  <img  height="500" src="https://github.com/KevinPagliuca/Move.it/blob/master/github/login-moveit.png" >
  
   - Home após login
  <img  height="500" src="https://github.com/KevinPagliuca/Move.it/blob/master/github/homepage-moveit.png" >
  
   - Desafios na tela.
  <img  height="500" src="https://github.com/KevinPagliuca/Move.it/blob/master/github/challengebox-moveit.png" >
  
   - Ranking
  <img  height="500" src="https://github.com/KevinPagliuca/Move.it/blob/master/github/ranking-moveit.png" >


Esse projeto foi desenvolvido durante a Next_Level_Week#4, disponibilizado pela [@Rocketseat](https://github.com/Rocketseat) durante os dias 22 até 28/02, de 2021.
</p>

## 🛠 Tecnologias

Esse projeto foi desenvolvido utilizando as tecnologias abaixo:

* [Next.js](https://nextjs.org/) 🔥
* [Reactjs](https://reactjs.org)
* [TypeScript](https://www.typescriptlang.org/)

## 🚀 Começando com o projeto

### Requisitos

- [Yarn](https://yarnpkg.com/getting-started/install)
- [Nodejs](https://nodejs.org/en/)
- [MongoDB Atlas](https://cloud.mongodb.com)
- [Github OAuth app](https://github.com/settings/applications/new)
- [Google OAuth app](https://console.developers.google.com/apis/credentials/oauthclient?previousPage=%2Fapis%2Fcredentials%3Fproject%3Dsmooth-ace-273519&project=smooth-ace-273519)
- [Facebook OAuth app](https://developers.facebook.com/apps/)

Faça um clone desse repositório e acesse a pasta do projeto para continuar:

```bash
$ git clone https://github.com/kevinpagliuca/move.it && cd move.it
```

Após clonar o repositório, siga os passos abaixo.

```bash
# Para instalar as dependências do projeto:
$ yarn

# Para iniciar o projeto:
$ yarn dev
```

Os requisitos informados acima são necessários para que a configuração do aplicativo esteja 100% funcional.

Após ter configurado todos os OAuths apps, preencha o arquvio <b> ``.env.example`` </b> com os respectivos ID e secrets que os OAuth's geraram e o renomeie para <b>``.env.local``</b>

#### Feito todos os passos acima, sua aplicação estará 100% funcional, pronta para ser utilizada!

#

## Recursos

##### O aplicativo contem as seguintes funcionalidades:

- Autenticação com Facebook
- Autenticação com Github
- Autenticação com Google
- Logout
- Sistema de Ranking

## Criando desafios

Na pasta do projeto, temos um arquivo <b>``challenges.json``</b> que pode ser incrementado com novos desafios conforme você queira...

## Contribua!

Faça um fork desse repositório e contribua com novas funcionalidades! ❤️ 


## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
