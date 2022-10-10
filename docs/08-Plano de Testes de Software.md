# Plano de Testes de Software

> **Os requisitos para realização dos teste de software são:** 
>
> - O software precisa estar com o frontend funcional;
> - O software precisa cadastrar, atualizar, pesquisar e deletar informações referentes às listas e usuários;
> - O software precisa cadastrar novos produtos e novas categorias;

Os testes funcionais a serem realizados na aplicação são descritos a seguir:

|  Caso de teste | CT-01- Cadastramento de usuário  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-001 O sistema deve ser capaz de cadastrar os dados do usuário |
| **Objetivo do teste**  |  Verificar se ao inputar os dados na página de cadastro, os dados são armazenados no banco de dados |
|  **Critérios de Êxito** |O banco de dados deve conter todos os dados de cadastro preenchidos conforme a página de cadastro |

|  Caso de teste | CT-02- Consulta de dados  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-002 O sistema deve ser capaz de listar todos os dados do usuário, sendo eles os dados pessoais e listas de compras anteriormente cadastradas pelo usuário |
| **Objetivo do teste**  |  Verificar se o login será realizado com sucesso dando acesso a todos os dados previstos na página principal da aplicação |
|  **Critérios de Êxito** | O login deve ser realizado com sucesso dando acesso a todos os dados previstos na página principal da aplicação |

|  Caso de teste | CT-03- Funcionalidade da criação de nova lista |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-003 O sistema deve abrir um modal contendo as opções de cadastro de nova lista, bem como requisições para o cadastro de novos itens e seus respectivos dados como nome do item, tipo e valor |
| **Objetivo do teste**  | Verificar se a lista será salva corretamente em banco de dados dando acesso aos itens à ela associados |
|  **Critérios de Êxito** | O botão de adicionar nova lista levará a um modal onde um novo item será adicionado e seus respectivos dados como nome, tipo e valor |

|  Caso de teste | CT-04- Funcionalidade da acessar uma lista já existente  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-004 O sistema deve exibir na página principal as listas de compras já cadastradas |
| **Objetivo do teste**  |  Verificar se as listas cadastradas em banco de dados estão sendo exibidas na tela principal, bem como seus respectivos itens adicionados à ela, onde cada item possui nome tipo e valor como cadastrado em banco de dados |
|  **Critérios de Êxito** | Aparecerão no menu principal as listas já cadastradas. Ao acessar uma lista serão apresentados os itens a ela já cadastrados |

|  Caso de teste | CT-05- Funcionalidade da alterar uma lista já existente |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-005 O sistema deve permitir que o usuário altere os itens de uma lista, seja adicionar novos itens ou excluílos, dando a opção de também alterar os dados dos itens. Também deve permitir a exclusão desta lista a partir do menu principal |
| **Objetivo do teste**  | Verificar se será possivel excluir uma lista, editar seus itens bem como verificar se estas alterações estão sendo feitas no banco de dados |
|  **Critérios de Êxito** | Ao clicar em excluir a lista ela deixará de existir permanentemente. Ao clicar em uma lista um modal será apresentado e seus respectivos itens contidos na lista, ao clicar em adicionar novo item, um novo modal será apresentado, os dados são adicionados e ao clicar no botão salvar voltará para o modal da lista. Ao clicar em editar uma lista, o modal contendo os dados do item serão apresentados, ao editar um dado e salvar, voltará para o modal da lista. Ao clicar em excluir item, a confirmação da exclusão será solicitada e a confirmação excluirá o item |

|  Caso de teste | CT-06- Alterar dados do usuário |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-006 O sistema deve exibir na página principal um botão dando acesso aos dados do usuários, permitindo altera-los. Também na página de edição de dados será possivel excluir a conta do usuário |
| **Objetivo do teste**  | Verificar o botão de acessar usuário levara para um novo modal exibindo os dados do usuário sendo possivel alterar e salvar através do botão salvar. Ao clicar em excluir conta, verificar se os dados serão excluidos do banco de dados bem como modificados quando ocorrer a alteração dos dados pelo usuário |
|  **Critérios de Êxito** | Ao clicar no botão do usuário, um modal será exibido, ao editar os dados e clicar em salvar, os dados serão salvos e voltará para o menu principal. Ao clicar em excluir conta, a confirmação será solicitada e ao confirmar a conta será excluida, levando para a tela de login |