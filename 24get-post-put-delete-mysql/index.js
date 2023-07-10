const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO users SET?", data, (error, results, fields) => {
    if (error) throw error;
    resp.send(results);
  });
});

app.put("/:rollno", (req, resp) => {
  const data = [req.body.name, req.body.address, req.params.rollno];
  con.query(
    "UPDATE users SET name = ?, address = ? WHERE rollno = ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});

app.delete("/:rollno", (req, resp) => {
  const data = [req.body.name, req.body.address, req.params.rollno];
  con.query(
    "DELETE FROM users WHERE rollno =" + req.params.rollno,
    (error, results) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});

app.listen("3000");
