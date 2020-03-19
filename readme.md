Eyebeam
================================
Dashboard for prometheus metrics




## Example


### Result

![example](https://github.com/YaroslavGaponov/eyebeam/blob/master/example/eyebeam.gif?raw=true "eyebeam")


### Simple express server with prometheus metrics

```js
const express = require('express');
const { collectDefaultMetrics, register, Counter } = require('prom-client');
const eyebeam = require('../dist');

const PORT = 3000;

collectDefaultMetrics();

const app = express();
const counter = new Counter({ name: "metrics_counter", help: "Total metrics calls" });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/metrics', (req, res) => {
    counter.inc();
    res.setHeader('Content-Type', register.contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(register.metrics());
});

app.get('/eyebeam', eyebeam.handler({ url: `/metrics`, interval: 1500 }));

app.listen(PORT, () => {
    console.log(`Express server http://localhost:${PORT}`);
    console.log(`Prometheus metrics http://localhost:${PORT}/metrics`);
    console.log(`Eyebeam dashboard http://localhost:${PORT}/eyebeam`);
});
```

### Run
```
npm run example
```

