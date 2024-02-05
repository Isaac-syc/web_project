import DBConnection from "../configs/DBConnection";

const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

let showContactPage = (req, res) => {
  res.render("contact");
};
const postContactReq = async (req, res) => {
  try {
    const { date, time, name, last_name, email, telephone } = req.body;
    const datetime = new Date(date + " " + time);

    const message = await saveContactReq(datetime, name, last_name, email, telephone);
    res.json({ status: "success", message: message });
  } catch (err) {
    console.log("Error: ", err);
  }
};

const saveContactReq = async (datetime, name, last_name, email, telephone) => {
  return new Promise((resolve, reject) => {
    DBConnection.query(
      "INSERT INTO contact_requests (id, name, last_name, email, telephone, date_request) VALUES (null, ?, ?, ?, ?, ?)",
      [name, last_name, email, telephone, datetime],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
         resolve("request successfully");
        }
      }
    );
  });
};

const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cuentasfirebase@gmail.com",
        //pass: "cf113207",
        pass: "kxsc limk rxcq sjlp",
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "cesarogdai01@gmail.com",
      subject: "New Contact Form Submission",
      text: `Nombre: ${name}\n Correo: ${email}\nMensaje: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    if (info && info.response.includes("250 2.0.0 OK")) {
      res.json({ status: "success", message: "Email sent successfully" });
    } else {
      res.json({ status: "error", message: "Email not sent" });
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

const firstMessage = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      res.status(401).json({ message: "no auth" });
      return;
    }
    const message = req.body.message;
    const sender = req.user[0].id;
    const contact_message = await sendFirstMessage(sender, message);
    res.status(200).json({ contact_message: contact_message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const otherMessages = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      res.status(401).json({ message: "no auth" });
      return;
    }

    const conversationId = req.body.conversation_id;
    const conversation = await findContactMessageByConversationId(
      conversationId
    );
    if (!conversation) {
      return res.status(400).json({ error: "First message not send" });
    }
    const message = req.body.message;
    const sender = req.user[0].id;
    const contact_message = await sendOtherMessage(
      message,
      conversationId,
      sender
    );
    res.status(200).json({ contact_message: contact_message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Other messages error" });
  }
};

const findContactMessageByConversationId = async (conversationId) => {
  return new Promise((resolve, reject) => {
    DBConnection.query(
      "SELECT * FROM contact_messages WHERE conversation_id = ?",
      [conversationId],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          const insertedItem = result[0];
          resolve(insertedItem);
        }
      }
    );
  });
};

const sendFirstMessage = async (sender, message) => {
  return new Promise((resolve, reject) => {
    const nuevoUuid = uuidv4();

    DBConnection.query(
      "INSERT INTO contact_messages (id, date_sent, message, sender, conversation_id) VALUES (null, NOW(), ?, ?, ?)",
      [message, sender, nuevoUuid],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          // Obtener el ID del elemento recién insertado
          const insertedId = result.insertId;

          // Consultar el elemento recién insertado utilizando el ID
          DBConnection.query(
            "SELECT * FROM contact_messages WHERE id = ?",
            [insertedId],
            function (err, result) {
              if (err) {
                reject(err);
              } else {
                const insertedItem = result[0];
                resolve(insertedItem);
              }
            }
          );
        }
      }
    );
  });
};

const sendOtherMessage = async (message, conversationId, sender) => {
  return new Promise((resolve, reject) => {
    DBConnection.query(
      "insert into contact_messages (date_sent, message, conversation_id, sender) values (now(), ?, ?, ?)",
      [message, conversationId, sender],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          // Obtener el ID del elemento recién insertado
          const insertedId = result.insertId;

          // Consultar el elemento recién insertado utilizando el ID
          DBConnection.query(
            "SELECT * FROM contact_messages WHERE id = ?",
            [insertedId],
            function (err, result) {
              if (err) {
                reject(err);
              } else {
                const insertedItem = result[0];
                resolve(insertedItem);
              }
            }
          );
        }
      }
    );
  });
};
const getMessages = async (req, res) => {
  try {
    const rows = await new Promise((resolve, reject) => {
      DBConnection.query(
        "select * from contact_messages where conversation_id= ?",
        [req.body.conversation_id],
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
    res.status(200).json({ success: true, data: rows });
  } catch (err) {
    console.log("get Messages: ", err);
    // Handle the error and send an appropriate response to the client
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  showContactPage: showContactPage,
  postContactReq: postContactReq,
  sendEmail: sendEmail,
  firstMessage: firstMessage,
  otherMessages: otherMessages,
  getMessages: getMessages,
};
