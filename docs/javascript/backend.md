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
