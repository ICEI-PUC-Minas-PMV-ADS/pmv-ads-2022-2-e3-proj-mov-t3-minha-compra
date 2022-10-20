import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getData = async () => {
    let results = await DB_EXEC('select * from usuario');
    return results.rows._array
}

export const createProductCad = async (param) => {
    let results = await DB_EXEC('insert into produto_cadastro(nome, categoria) values (?,?,?,?)', [param.nome, param.categoria]);
    return results.rowsAffected
}

export const createCategory = async (param) => {
    let results = await DB_EXEC('insert into categoria(nome) values (?,?,?,?)', [param.nome]);
    return results.rowsAffected
}

export const createProductList = async (param) => {
    let results = await DB_EXEC('insert into lista_produto(id_produto) values (?,?,?,?)', [param.nome, param.categoria]);
    return results.rowsAffected
}

export const createShoppingList = async (param) => {
    let results = await DB_EXEC('insert into categoria(nome) values (?,?,?,?)', [param.nome]);
    return results.rowsAffected
}
