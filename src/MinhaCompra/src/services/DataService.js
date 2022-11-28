import Database from "./DbServices";
import { defaultData } from "../assets/data/default_data";

const DB_EXEC = Database.getConnection();

export const criaProdutoCadastro = async (param) => {
  let results = await DB_EXEC(
    "insert into produto_cadastro(nome, categoria) values (?,?)",
    [param.nome, param.categoria]
  );
  return results.rowsAffected;
};

export const criaCategoria = async (param) => {
  let results = await DB_EXEC("insert into categoria(nome) values (?)", [
    param.nome,
  ]);
  return results.rowsAffected;
};

export const criaListaDeProduto = async (param) => {
  console.log("params: ", param);
  let results = await DB_EXEC(
    "insert into lista_produto(categoria, nome , preco, quantidade) values (?,?,?,?)",
    [param.categoria, param.nome, param.preco, param.quantidade]
  );
  return results.rowsAffected;
};

export const criaListaDeCompra = async (param) => {
  let results = await DB_EXEC(
    "insert into lista_compra(id_produto, valor_total, cpf, nome_lista) values (?,?,?,?)",
    [param.id_produto, param.valor_total, param.cpf, param.nome_lista]
  );
  return results.rows._array;
};

export const criaLista = async (param) => {
  let results = await DB_EXEC(
    "insert into lista(nome, produtos, total) values (?,?,?)",
    [param.nome, param.produtos, param.total]
  );
  return results.rowsAffected;
};

export const consultaLista = async () => {
  let results = await DB_EXEC("select * from lista");
  return results.rows._array;
};

export const atualizaLista = async (param) => {
  let results = await DB_EXEC(
    "update lista set nome=?, produtos=?, total=? where id=?",
    [param.nome, param.produtos, param.total, param.id]
  );
  return results.rowsAffected;
};

export const excluiTodasAsListas = async () => {
  let results = await DB_EXEC(" DELETE from lista");
  return results.rows._array;
};

export const inserirUsuario = async (param) => {
  let results = await DB_EXEC(
    "insert into usuario(cpf, nome , email, senha) values (?,?,?,?)",
    [param.cpf, param.nome, param.email, param.senha]
  );
  return results.rowsAffected;
};
export const excluiTodosOsUsuarios = async () => {
  let results = await DB_EXEC(" DELETE from usuario");
  return results.rows._array;
};

export const consultaUsuario = async () => {
  let results = await DB_EXEC("select * from usuario");
  return results.rows._array;
};

export const atualizarUsuario = async (param) => {
  // console.log("param >>>>>>>>>>>>>>> ", param);
  let results = await DB_EXEC(
    "update usuario set nome=?,email=?,senha=? where cpf=?",
    [param.nome, param.email, param.senha, param.cpf]
  );
  return results.rowsAffected;
};

export const consultaProdutoCadastro = async () => {
  let results = await DB_EXEC("select * from produto_cadastro");
  return results.rows._array;
};

export const consultaCategoria = async () => {
  let results = await DB_EXEC("select * from categoria");
  return results.rows._array;
};

export const consultaListaDeProduto = async () => {
  let results = await DB_EXEC("select * from lista_produto");
  return results.rows._array;
};

export const deletaTodosProdutos = async () => {
  let results = await DB_EXEC("drop table lista_produto");
  return results.rows._array;
};

export const deletaProduto = async (id) => {
  console.log("exclindo....");
  let results = await DB_EXEC("delete from lista_produto where id =?", [id]);
  return results.rows._array;
};

export const consultaListaDeCompra = async () => {
  let results = await DB_EXEC("select * from lista_compra");
  return results.rows._array;
};

export const deletaCategoria = async (id) => {
  console.log("exclindo....");
  let results = await DB_EXEC("delete from categoria where id =?", [id]);
  return results.rows._array;
};

export const geraCategoria = () => {
  const categorias = defaultData.map((categoria) => categoria.tipo);
  return categorias;
};

export const geraProdutos = (categoria) => {
  const produtos = defaultData.find((it) => it.tipo === categoria);
  return produtos.itens;
};
