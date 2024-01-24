import DBConnection from "../configs/DBConnection.js";
let getUserSettings = (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("user", { user: req.user });
  } else {
    return res.render("login", {});
  }
};

let updateSettings = async (req, res) => {
  try {
    let userItem = {
      name: req.body.updateData.name,
      paterno: req.body.updateData.paterno,
      materno: req.body.updateData.materno,
      email: req.body.updateData.email,
      phone: req.body.updateData.phone,
    };
    const updateUser = await new Promise((resolve, reject) => {
      DBConnection.query(
        "UPDATE users SET name = ?, paterno = ?, materno = ?, email = ?, phone = ? WHERE id = ?",
        [
          userItem.name,
          userItem.paterno,
          userItem.materno,
          userItem.email,
          userItem.phone,
          req.user[0].id,
        ],
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            if (rows.affectedRows > 0) {
              res.send("All good");
            } else {
              res.send("Nothing done");
            }
          }
        }
      );
    });

    if (updateUser.affectedRows > 0) {
      res.send("All Good");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getUserSettings: getUserSettings,
  updateSettings: updateSettings,
};
