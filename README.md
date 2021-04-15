# Aplicação de Bate-Papo
Implementação front-end de uma aplicação conectada a um socket com mensagens em tempo real para uma sala de bate-papo com múltiplos usuários. Espero que gostem da aplicação igual eu gostei de fazer ela =D

## Rodando a aplicação front-end

Após clonar o projeto, abra o terminal e rode o seguinte comando para instalar as dependências:

```bash
yarn
```

Depois disso faça o build e inicie o servidor front-end:

```bash
yarn build

# após concluir o build podemos iniciar o servidor

yarn start
```

Pronto, agora que a aplicação front-end está iniciada você pode abrir o URL [http://localhost:3000](http://localhost:3000) no seu browser.

## Rodando a aplicação do WebSocket

Para iniciar o serviço de WebSocket, abra um novo terminal e rode o seguinte comando:
```bash
yarn start:server
```

## Bibliotecas utilizadas no projeto

- classnames - Utilizado para auxiliar na adição condicional de uma ou mais classes CSS
- dayjs - Utilizado para formatar datas de forma legível
- framer-motion - UTILIZADO PARA ANIMAÇÕES, MUITAS ANIMAÇÕES. Eu já falei que gosto de animações?
- uuid - Utilizado para criar um identificador único para cada usuário
- react-scrollbars-custom - Utilizado para customizar o scrollbar default do browser

## Por que do uuid

Para a aplicação houve necessidade de identificar os usuários de forma única, como o socket recebe usuários apenas pelo nome, toda vez que um novo usuário é criado, é enviado junto do nome um uuid, e toda vez que a aplicação obtem um usuário, ela separa o nome do usuário do uuid.

Exemplo: 
  - Ao criar o usuário "Fernanda", é enviado "Fernanda__9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
  - Ao obter uma mensagem do usuário "Fernanda__9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", é separado o nome do uuid.

Assim a aplicação tem controle de usuários diferentes com o mesmo nome e da autoria das mensagens que vem do socket.

## Estrutura do projeto

```
projeto
│
└───common - Constantes, funções e tudo que é utilizado de forma compartilhada pelo projeto
│   
└───components - Componentes da aplicação, cada componente tem o seu própio diretório e todos os arquivos referentes a ele dentro do mesmo
│   └───shared - Componentes compartilhados
│
└───interfaces - Types e interfaces
│
└───pages - Páginas da aplicação
│
└───providers - Providers da aplicação
│
└───public - Arquivos públicos como imagens e icones
│
└───server - Server websocket
│
└───styles - Estilos globais da aplicação
```

## Considerações finais

O projeto foi iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), e foi testado utilizando node v14.16.0.
