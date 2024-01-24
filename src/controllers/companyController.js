import DBConnection from "../configs/DBConnection";
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const fs = require("fs");
const path = require("path");

let viewCompanyPage = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("company", { user: req.user });
  } else {
    return res.render("login");
  }
};
let handleFileUpload = async (req, res) => {
  try {
    console.log(req.file); // Log the uploaded file information

    const text = req.body.text;
    const imageBuffer = req.file.buffer;

    const generatedHtml = `
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Minimalist Landing Page</title>
                <style>
                body { margin: 0; padding: 0; font-family: 'Arial', sans-serif;
                background-color: #f4f4f4; } .container { max-width: 800px; margin: 0
                auto; text-align: center; padding: 50px 20px; } h1 { color: #333; } p {
                color: #555; margin-top: 20px; } .cta-button { display: inline-block;
                padding: 10px 20px; font-size: 16px; text-decoration: none; color: #fff;
                background-color: #3498db; border-radius: 5px; transition:
                background-color 0.3s; } .cta-button:hover { background-color: #2980b9; }
                </style>
            </head>
            <body>
                <div class="container">
                <h1>Welcome to our Website</h1>
                <p>${text}</p>
                <div class="content">
                <img src="data:image/png;base64,${imageBuffer.toString(
                  "base64"
                )}" alt="Uploaded Image">
                </div>
                </div>
            </body>
            </html>`;
    const companyId = req.user[0].id_empresa;
    const websiteName = req.user[0].nombre_comercial;
    const folderPath = path.join(__dirname, "../", "websites");
    const filePath = path.join(folderPath, `${websiteName}.html`);

    let flag = "";
    try {
      const result = await checkWebsite(companyId, websiteName);

      if (result.length > 0) {
        await updateWebsite(companyId, websiteName, generatedHtml);
        console.log("Websiter updated");
        flag = "Update";
      } else {
        await createWebsite(companyId, websiteName, generatedHtml);
        console.log("New website created");
        flag = "Create";
      }
      fs.writeFile(filePath, generatedHtml, (writeErr) => {
        if (writeErr) {
          console.log("Error creating html file: ", writeErr);
          return res.status(500).send("Error writing html file");
        }
        //res.send(flag);
        res.send({
          flag,
          url: `http://localhost:8080/websites/${websiteName}.html`,
        });
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  } catch (err) {
    console.log("Error uploading file: ", err);
  }
};
let checkWebsite = async (companyId, websiteName) => {
  try {
    return new Promise((resolve, reject) => {
      DBConnection.query(
        "SELECT * FROM websites WHERE id_empresa = ? AND name = ?",
        [companyId, websiteName],
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  } catch (err) {
    console.log("error check website: ", err);
  }
};
let updateWebsite = (companyId, websiteName, newContent) => {
  return new Promise((resolve, reject) => {
    DBConnection.query(
      "UPDATE websites SET content = ? WHERE id_empresa = ? AND name = ?",
      [newContent, companyId, websiteName],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

let createWebsite = (companyId, websiteName, content) => {
  return new Promise((resolve, reject) => {
    DBConnection.query(
      "INSERT INTO websites (name, content, id_empresa) VALUES (?, ?, ?)",
      [websiteName, content, companyId],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  viewCompanyPage: viewCompanyPage,
  handleFileUpload: handleFileUpload,
};
