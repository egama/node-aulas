import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ numeroDoPedido: '12776' });
})

app.get('/produtos', (request, response) => {
    const produtos = [
        { id: 100, descricao: "Monitor", grupo: 'eletronicos' },
        { id: 24, descricao: "Fone", grupo: 'eletronicos' },
        { id: 166, descricao: "Notebook", grupo: 'eletronicos' },
        { id: 45, descricao: "Geladeira", grupo: 'eletrodomesticos' }
    ];

    return response.json({ produtos });
})

app.listen(3333, () => {
    console.log("Server iniciado!!!!!")
})