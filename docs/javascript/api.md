## fetch api

The fetch API provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects .
The `fetch()` method is used to fetch a resource (data).

```js
let promise = fetch(url, [option]);
```

we can use promise chaining to retrive the DataTransfer.But as we learned a better way `async/await` ,we will use that

```js
const URL = "https://emojihub.yurace.pro/api/all";
const getEmoji = async () => {
  let response = await fetch(URL);
  console.log(response);
};
getEmoji();
```

we will get the response like this (image(scrnshot))

The response we are getting is in JSON format.We have to convert it into JS Object.

<u>Understanding terms:</u>

- **AJAX**: Asynchronous JavaScript and XML
- **JSON**: JavaScript Object Notation
- **`json()` method**:
  - Returns a second Promise that resolves with the result of parsing the response body text as JSON.
  - **Input**: JSON
  - **Output**: JavaScript Object

```js
const l = document.querySelector("#emoji");
const URL = "https://emojihub.yurace.pro/api/all";
const getEmoji = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data[6].htmlCode);
  l.innerHTML = data[98].htmlCode[0];
};
getEmoji();
```

we can call the fetch api using the promise chaining also-

```js
const l = document.querySelector("#emoji");
const URL = "https://emojihub.yurace.pro/api/all";
function getEmoji() {
  fetch(URL)
    .then((resonse) => {
      return resonse.json();
    })
    .then((data) => {
      console.log(data[6].htmlCode);
      l.innerHTML = data[98].htmlCode[0];
    });
}
getEmoji();
```

## To understand fetch api call ,here is a mini project

<div style="background-color: #252839;margin-top:20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); overflow: hidden; width: 320px; transition: transform 0.3s ease, box-shadow 0.3s ease;">
  <img src="/resource/currency_convert.jpg" alt="Project Image" style="width: 100%; height: 180px; object-fit: cover;">
  <div style="padding: 15px;">
    <h3 style="font-size: 1.5rem; margin: 0 0 5px;">Currency Converter</h3>
    <p style="font-size: 0.9rem; margin: 0 0 15px; color: #d1d1d1;line-height: 1.3;">
A currency converter for learning Fetch API calls, enabling real-time currency conversion.    
</p>
    <div style="display: flex; gap: 10px;">
      <a href="https://whereisfarukk.github.io/currency-converter/" style="text-decoration: none; color: #4facfe; font-weight: bold; padding: 5px 10px; border-radius: 5px; border: 1px solid #4facfe; transition: background-color 0.3s ease, color 0.3s ease;">Live Demo</a>
      <a href="https://github.com/whereisfarukk/currency-converter" style="text-decoration: none; color: #4facfe; font-weight: bold; padding: 5px 10px; border-radius: 5px; border: 1px solid #4facfe; transition: background-color 0.3s ease, color 0.3s ease;">GitHub Repo</a>
    </div>
  </div>
</div>
