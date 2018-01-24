const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

app.get('', (req, res) =>{
    res.send('Bienvenido a nuestra web');
});


server.listen(PORT, () => console.log(`Server ready in http://localhost:${PORT}`));