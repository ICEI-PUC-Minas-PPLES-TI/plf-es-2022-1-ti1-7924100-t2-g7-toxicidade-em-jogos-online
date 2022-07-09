// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "Apelido": "Joaozinnnntc",
            "Jogo": "Valorant",
            "Função": "Duelista",
        },
        {
            "id": 2,
            "Apelido": "Sakurauwu",
            "Jogo": "League of Legends",
            "Função": "Mid Laner",
        },
        {
            "id": 3,
            "Apelido": "PedroLucas333",
            "Jogo": "CSGO",
            "Função": "Suporte",
        },
        {
            "id": 4,
            "Apelido": "Valeriapopstar",
            "Jogo": "League of Legends",
            "Função": "Ad carry",
        },
        {
            "id": 5,
            "Apelido": "InsaneLUCKER",
            "Jogo": "Valorant",
            "Função": "Smoke",
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "Apelido": contato.Apelido,
        "Jogo" : contato.Jogo,
        "Rank": contato.Rank,
        "Função" : contato.Função,        
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].Apelido = contato.Apelido,
    db.data[index].Jogo = contato.Jogo,
    db.data[index].Rank = contato.Rank,
    db.data[index].Função = contato.Função, 

    displayMessage("Salvo!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}   





