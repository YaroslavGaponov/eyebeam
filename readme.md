Eyebeam
================================
Dashboard for prometheus metrics




## Example


### Result

![example](https://github.com/YaroslavGaponov/eyebeam/blob/master/example/eyebeam.gif?raw=true "eyebeam")


### Simple express server with prometheus metrics

```js
const express = require('express');
const { collectDefaultMetrics, register } = require('prom-client');
const eyebeam = require('eyebeam');

const PORT = 3000;

collectDefaultMetrics();

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/metrics', (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.send(register.metrics());
});

app.get('/eyebeam', eyebeam.handler(`http://localhost:${PORT}/metrics`));

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

