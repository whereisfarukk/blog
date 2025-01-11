# VS Code-Like Explorer

<div class="vscode-container">
  <!-- Sidebar -->
  <div class="sidebar">
    <h3>Explorer</h3>
    <ul class="folder-tree">
      <li>
        <span class="folder" @click="toggleFolder('projects')">
          {{ folders.projects ? '▾' : '▸' }} Projects
        </span>
        <ul v-show="folders.projects" class="nested">
          <li>
            <span class="folder" @click="toggleFolder('webDev')">
              {{ folders.webDev ? '▾' : '▸' }} Web Development
            </span>
            <ul v-show="folders.webDev" class="nested">
              <li><span class="file" @click="openFile('index.html')">index.html</span></li>
              <li><span class="file" @click="openFile('style.css')">style.css</span></li>
            </ul>
          </li>
          <li>
            <span class="folder" @click="toggleFolder('ml')">
              {{ folders.ml ? '▾' : '▸' }} Machine Learning
            </span>
            <ul v-show="folders.ml" class="nested">
              <li><span class="file" @click="openFile('model.py')">model.py</span></li>
              <li><span class="file" @click="openFile('data.csv')">data.csv</span></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- Main Editor -->
  <div class="editor">
    <h3>Editor</h3>
    <div id="editor-content" class="editor-content">
      <p v-html="editorContent"></p>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue';

const folders = ref({
  projects: false,
  webDev: false,
  ml: false,
});

const editorContent = ref('Select a file to view its content.');

const toggleFolder = (folder) => {
  folders.value[folder] = !folders.value[folder];
};

const openFile = (fileName) => {
  editorContent.value = `<h3>File: ${fileName}</h3><p>Content of ${fileName} goes here...</p>`;
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
}

.vscode-container {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 300px;
  background-color: #252526;
  color: #fff;
  padding: 10px;
}

.sidebar h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #444;
  padding-bottom: 5px;
}

.folder-tree {
  list-style: none;
  padding-left: 10px;
}

.folder-tree .nested {
  margin-left: 20px;
  list-style: none;
  padding-left: 10px;
}

.folder-tree .folder {
  cursor: pointer;
  color: #fff;
}

.folder-tree .file {
  cursor: pointer;
  color: #9cdcfe;
  padding-left: 20px;
}

.folder-tree .folder:hover,
.folder-tree .file:hover {
  text-decoration: underline;
}

.editor {
  flex-grow: 1;
  padding: 10px;
  background-color: #1e1e1e;
  color: #d4d4d4;
}

.editor h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #444;
  padding-bottom: 5px;
}

.editor-content {
  margin-top: 10px;
  padding: 10px;
  background: #252526;
  height: calc(100% - 40px);
  overflow-y: auto;
}
</style>

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

### pakage.json

```json
{
  "name": "databasetest",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.2",
    "mongodb": "^6.12.0",
    "mongoose": "^8.9.2",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.9"
  }
}
```
