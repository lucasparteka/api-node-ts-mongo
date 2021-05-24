# API Node.js com TypeScript e MongoDB

API node para listar, editar e excluir usuários.


## Instalação

Aplicação desenvolvida usando node `14.0.0` MongoDB `4.4.6`

Criar um arquivo `.env` baseado no modelo `.env-example` contido na raiz do projeto e inserir a string de conexão com a instancia do banco mongodb, bem como a porta em que a aplicação ficará disponível.


Após isso

```bash
npm install
```

## Importar usuários

O projeto possui em sua raiz, um json contendo 500 usuários. Eles podem ser importados para o banco rodando o comando:

```bash
npm run import-users
```


### Subir aplicação

```bash
npm start
```

### Endpoints disponíveis


   - `PUT /users/:userId`: Atualiza um usuário
   - `DELETE /users/:userId`: Remove o user da base
   - `GET /users/:userId`: Obtem dados de um user da base de dados
   - `GET /users`: Lista os 50 ultimos usuários cadasrados
   - `GET /users?keyset=userId`: Lista 50 usuários paginados a partir do id informado



dúvidas? entre em contato comigo pelo email `lucasparteka@gmail.com`