const express = require('express');
const server = express();
const dados = require('.data/dados.json');
server.use(express.json());
const fs = require('fs');
const { stringify } = require('querystring');

server.use(express.json());

function salvarDados() {
    fs.writeFileSync(__dirname + '/data/dados.json', JSON.stringify(dados, null, 2));
}

const dados = require('./data/dados.json');

server.listen(3000, () => {
    console.log("Servidor está funcionando!");
});

// Medicamento

server.get('/medicamento', (req, res) => {
    return res.json(dados.Medicamento);
});

server.post('/medicamento', (req, res) => {
    const novoMedicamento = req.body;

    if (!novoMedicamento.id || !novoMedicamento.nome || !novoMedicamento.fabricante || !novoMedicamento.preco) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente." });
    } else {
        dados.Medicamento.push(novoMedicamento);
        salvarDados();
        return res.status(201).json({ mensagem: "Novo Medicamento cadastrado!" });
    }
});

server.put('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);
    const atualizarCliente = req.body;

    const idCliente = dados.Cliente.findIndex((cliente) => cliente.id === clienteId);

    if (idCliente === -1) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    } else {
        dados.Cliente[idCliente].nome = atualizarCliente.nome || dados.Cliente[idCliente].nome;
        dados.Cliente[idCliente].fabricante = atualizarCliente.fabricante || dados.Cliente[idCliente].fabricante;

        salvarDados();

        return res.json({ mensagem: "Cliente atualizado com sucesso!", Cliente: dados.Cliente[idCliente] });
    }
});

server.delete('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);

    dados.Cliente = dados.Cliente.filter((cliente) => cliente.id !== clienteId);

    salvarDados();

    return res.status(200).json({ mensagem: "Medicamento excluído com sucesso!" });
});



server.get('/cliente', (req, res) => {
    return res.json(dados.Cliente);
});

server.post('/cliente', (req, res) => {
    const novoCliente = req.body;

    if (!novoCliente.id || !novoCliente.nome || !novoCliente.endereco || !novoCliente.email || !novoCliente.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente." });
    } else {
        dados.Cliente.push(novoCliente);
        salvarDados();
        return res.status(201).json({ mensagem: "Novo cliente cadastrado!" });
    }
});

server.put('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);
    const atualizarCliente = req.body;

    const idCliente = dados.Cliente.findIndex((cliente) => cliente.id === clienteId);

    if (idCliente === -1) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    } else {
        dados.Cliente[idCliente].nome = atualizarCliente.nome || dados.Cliente[idCliente].nome;
        dados.Cliente[idCliente].id = atualizarCliente.id || dados.Cliente[idCliente].id;

        salvarDados();

        return res.json({ mensagem: "Cliente atualizado com sucesso!", Cliente: dados.Cliente[idCliente] });
    }
});



server.delete('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);

    dados.Cliente = dados.Cliente.filter((cliente) => cliente.id !== clienteId);

    salvarDados();

    return res.status(200).json({ mensagem: "Cliente excluído com sucesso!" });
});


server.put('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);
    const atualizarCliente = req.body;

    const idCliente = dados.Cliente.findIndex((cliente) => cliente.id === clienteId);

    if (idCliente === -1) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    } else {
        dados.Cliente[idCliente].nome = atualizarCliente.nome || dados.Cliente[idCliente].nome;
        dados.Cliente[idCliente].fabricante = atualizarCliente.fabricante || dados.Cliente[idCliente].fabricante;

        salvarDados();

        return res.json({ mensagem: "Cliente atualizado com sucesso!", Cliente: dados.Cliente[idCliente] });
    }
});

server.delete('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);

    dados.Cliente = dados.Cliente.filter((Cliente) => cliente.id !== clienteId);

    salvarDados();

    return res.status(200).json({ mensagem: "Cliente excluído com sucesso!" });
});



server.get('/fornecedor', (req, res) => {
    return res.json(dados.Fornecedor);
});

server.post('/Fornecedor', (req, res) => {
    const novoFornecedor = req.body;

    if (!novoFornecedor.id || !novoFornecedor.nome || !novoFornecedor.endereco ||!novoFornecedor.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente." });
    } else {
        dados.Fornecedor.push(novoFornecedor);
        salvarDados();
        return res.status(201).json({ mensagem: "Novo Fornecedor cadastrado!" });
    }
});

server.put('/fornecedor/:id', (req, res) => {
    const fornecedorId = parseInt(req.params.id);
    const atualizarFornecedor = req.body;

    const idFornecedor = dados.Fornecedor.findIndex((fornecedor) => fornecedor.id === fornecedorId);

    if (idFornecedor === -1) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado" });
    } else {
        dados.Fornecedor[idFornecedor].nome = atualizarFornecedor.nome || dados.Fornecedor[idFornecedor].nome;
        dados.Fornecedor[idFornecedor].id = atualizarFornecedor.id || dados.Fornecedor[idFornecedor].id;

        salvarDados();

        return res.json({ mensagem: "Fornecedor atualizado com sucesso!", Fornecedor: dados.Fornecedor[idFornecedor] });
    }
});



server.delete('/fornecedor/:id', (req, res) => {
    const fornecedorId = parseInt(req.params.id);

    dados.Fornecedor = dados.Fornecedor.filter((fornecedor) => fornecedor.id !== fornecedorId);

    salvarDados();

    return res.status(200).json({ mensagem: "Fornecedor excluído com sucesso!" });
});