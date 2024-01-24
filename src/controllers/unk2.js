const getMessages = async (req, res) => {
  try {
    console.log(
      "query: select * from contact_messages where conversation_id = ",
      req.body.conversationId
    );

    const rows = await new Promise((resolve, reject) => {
      DBConnection.query(
        "select * from contact_messages where conversation_id= ?",
        [req.body.conversationId],
        function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    console.log("rows: ", rows);

    // Send the response to the client
    res.status(200).json({ success: true, data: rows });
  } catch (err) {
    console.log("get Messages: ", err);
    // Handle the error and send an appropriate response to the client
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
