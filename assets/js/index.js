class OrdemDeServico {
    constructor (clinica, dentista, servico, quantidade, preco, paciente, dataEntrega) {
        this.clinica = clinica;
        this.dentista = dentista;
        this.servico = servico;
        this.quantidade = quantidade;
        this.preco = preco;
        this.paciente = paciente;
        this.dataEntrega = dataEntrega;
    }
}

class Cliente {
    constructor (clinica, dentista, tabela) {
        this.clinica = clinica;
        this.dentista = dentista;
        this.tabela = tabela;
    }
}

class Tabela {
    constructor (servico) {
        this.servico = servico;
    }
}

class Servico{
    constructor (descricao, preco){
        this.descricao = descricao;
        this.preco = preco;
    }
}

