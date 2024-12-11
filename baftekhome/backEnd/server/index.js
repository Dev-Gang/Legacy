const express = require("express");
const cors=require('cors');
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;
const Home = require("../database/homes.js");
const guests = require("../database/guests.js");
const Host = require("../database/hosts.js");
const Image = require("../database/images.js");

app.use(cors());


mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://hbib:hbib@cluster0.m3m3t.mongodb.net/BaftekHome?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/newguest", (req, res) => {
  console.log("in guest");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const saltRounds = 10;
  var obj = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      obj.password = hash;
      console.log(obj);
      guests.create(obj, (err, result) => {
        err ? console.log("err", err) : console.log("result", result);
      });
      res.end();
    });
  });
});

app.post("/api/guests", (req, res) => {
  guests.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, docs[0].password, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        const token = jwt.sign(
          { email: req.body.email, password: req.body.password },
          "dT8tO3hL1mA7tN1gL5r"
        );
        res.send({ docs: docs, token: token });
        res.end();
      }
    });
  });
});

app.post("/host/createhost", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log("body", req.body);
  const saltRounds = 10;
  var obj = req.body;
  console.log("here");
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw err;
    }

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      obj.passwordHost = hash;
      Host.create(obj);
      res.end();
    });
  });
});


// var hosts = mongoose.model("hosts", hostSchema);
// module.exports = hosts;
app.post("/api/hosts", (req, res) => {
  Host.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, docs[0].password, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        const token = jwt.sign(
          { email: req.body.email, password: req.body.password },
          "dT8tO3hL1mA7tN1gL5r"
        );
        res.send({ docs: docs, token: token });
        res.end();
      }
    });
  });
});
app.post("/checkToken", (req, res) => {
  jwt.verify(req.body.token, "dT8tO3hL1mA7tN1gL5r", (err, guest) => {
    if (guest) {
      guests.find({ email: guest.email }, function (err, docs) {
        if (err) {
          console.log(err);
        }
        bcrypt.compare(
          guest.password,
          docs[0].password,
          function (err, result) {
            if (err) {
              console.log(err);
            } else if (result) {
              res.send(docs);
            }
          }
        );
      });
    }
  });
});

app.put("/updateHome/:id", (req, res) => {
  Home.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
    if (err) console.log(err);
    res.send(docs);
  });
});

app.put("/updateImg/:id", (req, res) => {
  Image.findOneAndUpdate({ homeID: req.params.id }, req.body, (err, docs) => {
    if (err) console.log(err);
    res.send(docs);
  });
});

app.get("/api/images/:_id", (req, res) => {
  Image.find({ homeID: req.params._id }, (err, docs) => {
    res.send(docs);
    res.end();
  });
});

app.post("/api/images", (req, res) => {
  Image.create(req.body);
  res.end();
});

app.get("/api/homes/:_id", (req, res) => {
  Home.find({ _id: req.params._id }, (err, docs) => {
    if (err) res.send(err);
    res.send(docs);
    res.end();
  });
});

app.get("/api/homes", (req, res) => {
  Home.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/api/homes", (req, res) => {
  Home.create(req.body)
    .then((result) => {
      res.send(result);
      res.end();
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/api/userHomes/:firstName", (req, res) => {
  Home.find({ firstName: req.params.firstName }, function (err, docs) {
    res.send(docs);
    res.end();
  });
});

app.delete("/api/homes/:_id", (req, res) => {
  Home.deleteOne({ _id: req.params._id }, (err, docs) => {
    res.send(docs);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
