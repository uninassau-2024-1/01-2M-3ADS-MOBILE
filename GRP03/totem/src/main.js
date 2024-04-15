const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'sistema'
});

app.get('/', (req, res) => {
    res.send("Back-end está ON!")
});

app.listen(PORT, () => {
    console.log( `Servidor rodando na porta ${PORT}`)
});

connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    else{
        console.log('Conexão bem-sucedida ao bando de dados!');
    }
});

connection.query('SELECT * FROM senhas', (err, rows) => {
    if (err) {
        console.error('Erro ao executar a consulta:', err);
        return;
    }
    console.log('Registros da tabela senhas:', rows);
});
