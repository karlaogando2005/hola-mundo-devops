const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo desde DevOps CI/CD!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log('App escuchando en http://localhost:' + port);
  });
}

module.exports = app;
