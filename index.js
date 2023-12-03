const express = require("express");
// const knex = require("knex");
const knex = require("./db/db");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8080;

//ホーム
app.get("/", (req, res) => {
  res.send("Hello there!");
});

//ユーザー全体を取得
app.get("/users", (req, res) => {
  knex
    .select()
    .from("user")
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

//ユーザー追加
app.post("/users", (req, res) => {
  knex("user")
    .insert(req.body)
    .then(() => {
      knex
        .select()
        .from("user")
        .then((users) => {
          res.send(users);
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

//ユーザー１人を取得
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  knex
    .select()
    .from("user")
    .where("id", userId)
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

//ユーザー更新
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;

  knex("user")
    .where("id", userId)
    .update(req.body)
    .then(() => {
      knex
        .select()
        .from("user")
        .then((users) => {
          res.send(users);
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

//ユーザー削除
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  knex("user")
    .where("id", userId)
    .del()
    .then(() => {
      knex
        .select()
        .from("user")
        .then((users) => {
          res.send(users);
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(PORT, () => {
  console.log("Server started at port 8080");
});
