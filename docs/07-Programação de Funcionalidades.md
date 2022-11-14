# Programação de Funcionalidades



## - *O aplicativo deve permitir ao usuário cadastrar/atualizar sua conta (RF-001)* 
![Cadastrar perfil usuário](img/tela-cadastrar.jpg)  
### - A tela de cadastro será exibida após tela de carregamento, sendo exibido os campos para preenchimento com os dados do usuário.  
### - Após clicar em **Cadastrar**, o usuário terá sua conta salva no firebase e seus dados poderão ser utilizados na aba **Entrar** para ter acesso ao aplicativo.  

![Atualizar perfil usuário](img/tela-perfil-usuario.png)  
### - A tela de perfil é onde o usuário poderá visualizar suas informações e alterar seus dados de cadastro e de acesso.  
### - Ao clicar em **Atualizar** os dados serão atualizados na base de dados Sqlite.   
</br>

### ***Requisitos atendidos***  
- RF-001  
</br>

### ***Artefatos criados***
**Views**  
<li><a href="src/MinhaCompra/src/views/Login.js"> Login</a></li>
<li><a href="src/MinhaCompra/src/views/Profile.js"> Profile</a></li>  
</br>

**Componentes**
<li><a href="src/MinhaCompra/src/components/LoginInput.js"> LoginInput</a></li>
<li><a href="src/MinhaCompra/src/views/SignUpInput.js"> SignUpInput</a></li>

**Services**
<li><a href="src/MinhaCompra/src/components/DataService.js"> DataService</a></li>
<li><a href="src/MinhaCompra/src/views/DbServices.js"> DbServices</a></li>
</br>

### ***Instruções de acesso Cadastrar***  
1- Acesse a tela inicial do aplicativo  
2- Clique na aba *Cadastrar*  
3- Preencha **nome, cpf, email e senha**  
4- Clique no botão *Cadastrar*  
</br>

### ***Instruções de acesso Atualizar***  
1- Acesse a tela Perfil  
2- Atualize o **nome, email ou senha (cpf não poderá ser atualizado pois é chave primária)**  
3- Clique no botão *Atualizar*  
</br>




## - *O aplicativo deve permitir ao usuário logar/deslogar da sua conta. (RF-002)* 
## - *O aplicativo deve permitir ao usuário cadastrar listas de compras. (RF-003)* 
## - *O aplicativo deve permitir ao usuário cadastrar, visualizar, atualizar e deletar os itens de sua lista de compras. (RF-004)*    
## - *O aplicativo deve permitir ao usuário cadastrar informações de produtos. (RF-005)*    
## - *O aplicativo deve permitir ao usuário cadastrar, visualizar e atualizar o preço dos produtos. (RF-006)*  
## - *O aplicativo deve exibir o último preço cadastrado na base de usuários.  (RF-007)*  
## - *O aplicativo deve exibir um comparativo de preço entre as compras. (RF-008)*    




  












</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)