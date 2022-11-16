# Programação de Funcionalidades



## - *O aplicativo deve permitir ao usuário cadastrar/atualizar sua conta (RF-001)* 
![Cadastrar perfil usuário](img/tela-cadastrar.jpg)  
### - A tela de cadastro será exibida após tela de carregamento, sendo exibido os campos para preenchimento com os dados do usuário.  
### - Após clicar em **Cadastrar**, o usuário terá sua conta salva no banco de dados do Firebase (Firestore) e seus dados poderão ser utilizados na aba **Entrar** para ter acesso ao aplicativo.  
</br>

![Atualizar perfil usuário](img/tela-perfil.jpg)  
### - A tela de perfil é onde o usuário poderá visualizar suas informações e alterar seus dados de cadastro e de acesso.  
### - Ao clicar em **Atualizar** os dados serão atualizados na base de dados do Firebase (Firestore).   
</br>

### ***Requisitos atendidos***  
- RF-001  
</br>

### ***Artefatos criados***
**Views**  
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/views/Login.js"> Login</a></li>
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/views/Profile.js"> Profile</a></li>  
</br>

**Componentes**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/components/LoginInput.js"> LoginInput</a></li>
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/components/SignUpInput.js"> SignUpInput</a></li>
</br>

**Services**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/services/DataService.js"> DataService</a></li>
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/services/DbServices.js"> DbServices</a></li>
</br>

### ***Instruções de acesso Cadastrar***  
1- Acesse a tela inicial do aplicativo  
2- Clique na aba *Cadastrar*  
3- Preencha **nome, cpf, email e senha**  
4- Clique no botão *Cadastrar*  
</br>



### ***Instruções de acesso Atualizar***  
1- Acesse a tela *Profile*  
2- Atualize o **nome, email ou senha (cpf não poderá ser atualizado pois é chave primária)**  
3- Clique no botão *Atualizar*  
4- *Observação: É necessário que o usuário faça logout se forem alterados email e senha, porquê o token de acesso ficará inválido*
</br>

<p align="center">
    <img width="300" height="750" src="img/atualizar.gif">
</p>
</br>

### ***Alertas ao Atualizar***  
1- Por favor, digite um email válido.  
2- A senha deve ter, pelo menos, 6 caracteres.

</br>

### ***Antes e depois atualização no Firebase (Firestore)***

<p>
<img width="900" height="350" src="img/firestore-antes.jpg">
<img width="900" height="350" src="img/firestore-depois.jpg">
</p>
</br>

## - *O aplicativo deve permitir ao usuário logar/deslogar da sua conta. (RF-002)* 

![Login usuário](img/tela-entrar.jpg)  
### - A tela de *Login* será exibida após tela de carregamento, sendo exibido os campos para preenchimento com os dados de acesso.
### - Ao clicar em *Entrar*, o usuário terá sua conta autenticada e salva no banco de dados do Firebase (Authentication) e logo terá acesso ao aplicativo.  
</br>

### ***Requisitos atendidos***  
- RF-002  
</br>

### ***Artefatos criados***
**Views**  
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/views/Login.js"> Login</a></li>
</br>

**Componentes**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/components/LoginInput.js"> LoginInput</a></li>
</br>

**Services**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/services/DataService.js"> DataService</a></li>
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/services/DbServices.js"> DbServices</a></li>
</br>

### ***Instruções de acesso Login***  
1- Acesse a tela inicial do aplicativo  
2- Clique na aba *Entrar*  
3- Preencha **email e senha**  
4- Clique no botão *Entrar*  
</br>

<p align="center">
    <img width="300" height="750" src="img/login.gif">
</p>
</br>

### ***Firebase (Authentication)***
<p>
<img width="900" height="80" src="img/firebase-antes.jpg">
<img width="900" height="80" src="img/firebase-depois.jpg">
</p>
</br>


## - *O aplicativo deve permitir ao usuário cadastrar listas de compras. (RF-003)* 
## - *O aplicativo deve permitir ao usuário cadastrar, visualizar, atualizar e deletar os itens de sua lista de compras. (RF-004)*    
</br>

## - *O aplicativo deve permitir ao usuário cadastrar informações de produtos. (RF-005)*
## - *O aplicativo deve permitir ao usuário cadastrar, visualizar e atualizar o preço dos produtos. (RF-006)*  
![Cadastrar produto](img/tela-produto.jpg)  
### - A tela de cadastro de produto é onde definimos o *tipo* do produto e sua *categoria*. 
### - O *preço* e sua *quantidade* podem ser definidos e o *total* é atualizado conforme cálculo do aplicativo.
</br>

![Cadastrar tipo produto ](img/tela-tipo-produto.jpg)  
### - A partir do modal *tipo*, este pode ser selecionado pelo usuário.  
### - Esses tipos estão contidos em uma base de dados Sqlite.
</br>

![Cadastrar categoria produto ](img/tela-categoria-produto.jpg)  
### - A partir do modal *categoria*, esta pode ser selecionado pelo usuário.  
### - Essas categorias estão contidos em uma base de dados Sqlite.
</br>

### ***Requisitos atendidos***  
- RF-005  
- RF-006  
</br>

### ***Artefatos criados***
**Views**  
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/views/Produto.js"> Produto</a></li>
</br>

**Componentes**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/components/SearchBar.js"> SearchBar</a></li>
</br>

**Services**
<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t3-minha-compra/blob/develop/src/MinhaCompra/src/assets/data/default_data.js"> default_data</a></li>
</br>

### ***Instruções de acesso Cadastrar***  
1- Acesse a aba Produto do aplicativo  
2- Clique na aba *tipo* e selecione um setor  
3- Clique na aba *categoria* e selecione um nome  
4- Preencha o **preço** e a **quantidade** *(ajustável através dos botões '+' e '-')*  
5- Confira o total calculado pelo app  
6- Clique no botão *Adicionar* para o produto fazer parte de sua lista de compras.  
</br>



<p align="center">
    <img width="300" height="700" src="img/produto.gif">
</p>
</br>



## - *O aplicativo deve exibir o último preço cadastrado na base de usuários.  (RF-007)*  
## - *O aplicativo deve exibir um comparativo de preço entre as compras. (RF-008)*    