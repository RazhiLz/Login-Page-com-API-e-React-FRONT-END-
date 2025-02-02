# Sobre o Front-End

No desenvolvimento do Front-End, utilizei alguns dos **principais hooks** do React para garantir uma experiência de desenvolvimento mais limpa, eficiente e organizada. A seguir, explico como usei cada um deles:

- **`useState`**: Essa é uma das funcionalidades mais importantes do React. Eu a usei para armazenar os dados dos usuários dentro do componente. Com isso, qualquer alteração nos dados atualiza automaticamente a interface.
- **`useEffect`**: Esse hook foi essencial para carregar os dados dos usuários assim que a página for carregada. Através dele, conseguimos fazer requisições à API logo que o componente for montado, sem a necessidade de recarregar a página.
- **`useRef`**: Para pegar os valores dos inputs de forma mais direta e sem a necessidade de controlar o estado dos campos com o `onChange`, o que tornou o código mais limpo e simples. Isso foi útil, principalmente, para pegar valores sem precisar fazer renderizações desnecessárias.

Esses hooks tornaram o código não só mais organizado, mas também mais performático e fácil de manter.

## Layout

O layout do aplicativo foi pensado para ser simples, mas extremamente funcional. Ele conta com os seguintes elementos principais:

- **Formulário para Cadastro de Usuários**: Um campo de entrada onde é possível adicionar um novo usuário. A validação é feita diretamente na tela para garantir que os dados estejam corretos antes de enviar para o back-end.
- **Listagem de Usuários**: A lista mostra todos os usuários cadastrados, com a opção de excluir cada um deles. Ao clicar no botão de excluir, o item é removido da interface de maneira dinâmica, sem a necessidade de recarregar a página.

A interface foi completamente estilizada com **CSS**, garantindo que o layout fosse organizado e agradável ao usuário. O foco foi garantir que fosse intuitivo e simples de usar, enquanto ainda oferecia uma boa experiência visual.

## Conexão com o Back-End

A comunicação com o **Back-End** foi feita de forma direta e simples usando **Axios**, uma biblioteca que facilita as requisições HTTP e torna o processo mais robusto e compreensível.

Para garantir que as requisições fossem feitas de forma eficaz, configurei uma **baseURL** para apontar para `http://localhost:3000`, onde o servidor Express está rodando. Com isso, foi possível definir as seguintes rotas para interagir com os dados:

- **`GET /usuarios`**: Endpoint que busca todos os usuários cadastrados. Quando a página é carregada, ela automaticamente faz essa requisição para exibir os dados.
- **`POST /usuarios`**: Endpoint utilizado para adicionar um novo usuário. Quando o formulário é enviado, os dados são passados para o servidor e o usuário é adicionado à lista.
- **`DELETE /usuarios/:id`**: Endpoint que permite excluir um usuário da lista, passando o ID do usuário a ser removido.

Após a execução de cada uma dessas requisições, a interface do usuário é atualizada de forma automática para refletir as mudanças sem a necessidade de recarregar a página, oferecendo uma experiência mais dinâmica e interativa.

## Resumo

Integrar **React**, **Express** e **Prisma** foi uma experiência incrivelmente satisfatória. Ver a interação entre o front-end e o back-end funcionando de maneira tão fluida me mostrou o potencial dessas tecnologias para criar aplicações rápidas e dinâmicas.

Neste projeto, consegui implementar um fluxo completo de cadastro, listagem e exclusão de usuários, sem a necessidade de recarregar a página. Isso foi possível graças ao uso de **hooks** do React para gerenciar o estado e aos endpoints da API para garantir que as informações fossem atualizadas de maneira eficiente. A cada atualização no sistema, a interface reflete imediatamente as mudanças, mantendo a aplicação ágil e responsiva.

Esse projeto me ajudou a melhorar minhas habilidades em integração de front-end com back-end, além de me dar uma visão mais clara de como construir sistemas completos, escaláveis e dinâmicos. 🚀

## Tecnologias Utilizadas

- **React**: Utilizado para a criação da interface interativa.
- **Axios**: Facilitou as requisições HTTP para o back-end.
- **Express**: Framework utilizado para criar a API que gerencia os usuários.
- **Prisma**: ORM que simplifica o gerenciamento do banco de dados.
- **CSS**: Estilização da interface para garantir uma boa experiência de usuário.

Esse projeto é um ótimo exemplo de como conectar diferentes tecnologias de forma prática e funcional, criando uma aplicação com uma estrutura sólida e com uma boa usabilidade. Espero que, ao olhar para este repositório, você tenha uma ideia clara de como aplicar essas ferramentas em seus próprios projetos!
