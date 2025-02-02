Sobre o Front-end

Usei hooks como useState para armazenar os usuários, useEffect para buscar os dados assim que a página carrega e useRef pra pegar os valores dos inputs sem precisar de onChange. Isso deixou o código mais limpo e prático.

O layout é básico, mas funcional. Tem um formulário para cadastrar novos usuários e uma listagem com botões para excluir. Tudo estilizado com CSS, pra deixar mais organizado.

Conexão com o Back-end
Pra conectar com a API, usei Axios, porque facilita muito na hora de fazer as requisições. Configurei uma baseURL apontando pro http://localhost:3000, e pronto, só chamar os endpoints do back-end:

GET (/usuarios) → Busca os usuários cadastrados.
POST (/usuarios) → Adiciona um novo usuário.
DELETE (/usuarios/:id) → Remove um usuário pelo ID.
Assim que a API responde, o estado da aplicação é atualizado e os dados aparecem na tela sem precisar recarregar a página.

Resumo
Foi muito massa conectar React, Express e Prisma e ver tudo funcionando em conjunto. Agora, consigo cadastrar, listar e excluir usuários de forma dinâmica! 🚀
