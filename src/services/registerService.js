import DBConnection from "./../configs/DBConnection";
import bcrypt from "bcryptjs";

const createNewUser = async (data, req) => {
  try {
    let isEmailExist = await checkExistEmail(data.email);
    if (isEmailExist) {
      throw new Error(
        `El correo "${data.email}" ya se encuentra registrado. Por favor utilice otro.`
      );
    } else {
      let salt = bcrypt.genSaltSync(10);
      let userItem = {
        name: data.name,
        paterno: data.last_name_pat,
        materno: data.last_name_m,
        email: data.email,
        password: bcrypt.hashSync(data.password, salt),
        phone: data.phone,
      };

      // Create a new account
      const userInsertResult = await new Promise((resolve, reject) => {
        DBConnection.query(
          "insert into users set ? ",
          userItem,
          function (err, rows) {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          }
        );
      });

      if (userInsertResult.affectedRows > 0) {
        console.log("User inserted correctly");

        // Create a new company

        const companyInsertResult = await new Promise((resolve, reject) => {
          DBConnection.query(
            "insert into empresas (id_usuario, nombre_comercial, rfc) values (?,?,?)",
            [userInsertResult.insertId, data.companyName, data.rfcReg],
            function (err, res) {
              if (err) {
                reject(err);
              } else {
                resolve(res);
              }
            }
          );
        });

        const empresaUsuarioInsert = await new Promise((resolve, reject) => {
          DBConnection.query(
            "insert into empresa_usuario (id_empresa, id_usuario) values (?, ?)",
            [companyInsertResult.insertId, userInsertResult.insertId],
            function (err, result) {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        });

        if (empresaUsuarioInsert.affectedRows > 0) {
          console.log("empresa_usuario inserted correctly");
          return "Se ha creado";
        }
      }
    }
    return Promise.resolve("Se ha creado1;");
  } catch (err) {
    return Promise.reject(err);
  }
};

let checkExistEmail = (email) => {
  return new Promise((resolve, reject) => {
    try {
      DBConnection.query(
        "SELECT * from users where email = ?",
        email,
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows.length > 0);
          }
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};
