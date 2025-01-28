## Basic Contact app backend implementation

```
Backend/
├── app.js
├── Contact.js
├── Controller.js
├── index.html
├── package.json
└── routes.js
```

### app.js

```js
const express = require("express");
const morgan = require("morgan");
const { mongoose } = require("mongoose");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", router);
// app.get("/", (req, res) => {

// });
mongoose
  .connect(
    `mongodb+srv://{username}:{password}@cluster0.u4ozv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
```

### Contact.js

```js
const { Schema, model } = require("mongoose");
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 9,
    maxlength: 15,
  },
});

const Contact = model("Contact", contactSchema);
module.exports = Contact;
```

### Controller.js

```js
const Contact = require("./Contact");

exports.getAllContacts = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((e) => {
      res.json(e);
    });
};
exports.getSingleContacts = (req, res) => {
  const { id } = req.params;

  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      res.json(e);
    });
};
exports.createContacts = (req, res) => {
  const { name, email, phone } = req.body;
  let contact = new Contact({
    name,
    email,
    phone,
  });
  contact
    .save()
    .then((c) => {
      res.json(c);
    })
    .catch((e) => {
      res.json({
        message: "error occured",
      });
    });
};
exports.updateContacts = (req, res) => {
  let { name, phone, email } = req.body;
  let { id } = req.params;
  Contact.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        name,
        phone,
        email,
      },
    },
    { new: true } //it returns the updated document.without this argument ,data will update in the database but won't return the updates new data
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      res.json({
        message: "error occured",
      });
    });
};
exports.deleteContacts = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      res.json({
        message: "error occured",
      });
    });
};
```

### routes.js

```js
const router = require("express").Router();
const {
  getAllContacts,
  getSingleContacts,
  createContacts,
  deleteContacts,
  updateContacts,
} = require("./Controller");

router.get("/", getAllContacts);
router.get("/:id", getSingleContacts);
router.post("/", createContacts);
router.put("/:id", updateContacts);
router.delete("/:id", deleteContacts);
module.exports = router;
```
