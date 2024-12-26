lets say we have a database which retrun data after 2s.

```js
function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}
getData(45);
```

## Callback

Now lets say we have to write a code where data1 will return first then data2 and goes on ...

so if we write the code like this

```js
function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}
getData(1); //data 1
getData(2); //data 2
getData(3); //data 3
```

it will show the output at the same Time. But we want each data serially after a certian interval .for that we can write the code like this

```js
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
```

This is called call back.we can call for the second data after calling the first data.

This code has a problem.Its not easy to understand Syntax.If we have to call many times ,it will create `call back hell`
to solve this problem we have a concept name promises.

## Promises

promise is for "eventual" completion of task .It is an object in JS.It is a solution to callback hell .

```js
let promise = new Promise((resolve,reject)=>{
...
})
```

If we make a function which return a promise

```js
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

const result = getData(23);
```

A promise has two condition ,`fulfil(resolve)` or ``reject`.IF the promsie is resolve we use

```js
promise.then((res)=>{...})
```

if the promise is reject , then we use

```js
promise.catch((err)=>{...});
```

## promise chaining

lets say we have a function named `asyncFunc()`.It will return a promise

```js
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data");
      resolve("success");
    }, 4000);
  });
}

let p = asyncFunc();
p.then((res) => {
  console.log(res);
});
```

Now say we have two function `asyncFunc1` and `asyncFunc2`.and we have a have the data after 4 sec.

```js
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
});
let p2 = asyncFunc2();
p2.then((res) => {
  console.log(res);
});
```

Here in the code the problem is ,we are getting the result at the same time.But if we want to get first data1 then after a interval data2

```js
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});
```

we can simplify the promise Syntax

```js
asyncFunc1().then((res) => {
  console.log(res);
  asyncFunc2().then((res) => {
    console.log(res);
  });
});
```

now if we convert the callback hell code into promise chaining

```js
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}
let p1 = getData(1);
p1.then((res) => {
  console.log(res);
});
```

we can simplyfy the promise chain by-

```js
getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
  });
});
```

we can make it more simple and actual promise style-

```js
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });
```

## Async / Await

we have another better syntax is async / await

async await we use in a function

when we add async word in front of a function ,it returns a promise automatically

```js
async function hello() {
  console.log("hello");
}
```

await pauses the execution of its surroundings async function until the promise is settled

```js
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData() {
  await api();
}
getWeatherData();
```

if we want to call api second time then we can write

```js
async function getWeatherData() {
  await api();
  await api();
}
```

now if we want to use async/await on our get data function

```js
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}
getAllData();
```

for calling the async function we have to create another function which is unnesessary.To escape this
javascript has a method called `IIEF (Immediare Invoke Function Expression)`
IIEF has three method

```js
// method-1
(function () {
  //..
})();

// method-2
(() => {
  //.
})();
s(
  // method-3
  async () => {
    //.
  }
)();
```

To simplify the function call we can write -

```js
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
```

It will automatically call the functions
