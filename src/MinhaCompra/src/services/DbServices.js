import * as SQLite from "expo-sqlite";

export const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase("minha_compra.db");

    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists usuario (cpf text primary key not null, nome text not null, email text not null, senha text not null);"
      );
      tx.executeSql(
        "create table if not exists produto_cadastro (id integer primary key not null, nome text not null, categoria text not null);"
      );
      tx.executeSql(
        "create table if not exists categoria (id integer primary key not null, nome text not null);"
      );
      tx.executeSql(
        "create table if not exists lista_produto (id integer primary key not null, id_produto integer not null, preco real not null, quantidade integer not null);"
      );
      tx.executeSql(
        "create table if not exists lista_compra (id integer primary key not null, id_produto integer not null, valor_total real not null, cpf integer not null, nome_lista string);"
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
