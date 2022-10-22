import Database from "./DbServices";

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
  let results = await DB_EXEC(
    "insert into lista_produto(id_produto, preco, quantidade) values (?,?,?)",
    [param.id_produto, param.preco, param.quantidade]
  );
  return results.rowsAffected;
};

export const criaListaDeCompra = async (param) => {
  let results = await DB_EXEC(
    "insert into lista_compra(id_produto, valor_total, cpf) values (?,?,?)",
    [param.id_produto, param.valor_total, param.cpf]
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

export const consultaListaDeCompra = async () => {
  let results = await DB_EXEC("select * from lista_compra");
  return results.rows._array;
};
