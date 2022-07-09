// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "Apelido": "TKZLIONS",
            "Gênero": "Masculino",
            "Datadenascimento": "23/12/2001",
            "Email": "Boizinhobomgordin@gmail.com",
            "Biografia": "@Octavio_Camp",
            "Nome": "Octavio Boizao",
        },
        {
            "id": 2,
            "Apelido": "Sakurauwu",
            "Gênero": "Feminino",
            "Datadenascimento": "12/04/2002",
            "Email": "sakurazinaaaa@gmail.com",
            "Biografia": "Something in the way...",
            "Nome": "Leticia Palvoni Belchior"
        },
        {
            "id": 3,
            "Apelido": "PedroLucas333",
            "Gênero": "Masculino",
            "Datadenascimento": "08/04/1992",  
            "Email": "pedrobomdebola@gmail.com",
            "Biografia": ":D",
            "Nome": "Pedro Lucas Nascimento"
        },
        {
            "id": 4,
            "Apelido": "Valeriapopstar",
            "Gênero": "Outros",
            "Datadenascimento": "09/09/2000",  
            "Email": "valerinha2312@gmail.com",
            "Biografia": "QUEEN GAGA",
            "Nome": "João Felipe Lima Batista"
        },
        {
            "id": 5,
            "Apelido": "InsaneLUCKER",
            "Gênero": "Prefiro não dizer",
            "Datadenascimento": "01/01/2001",
            "Email": "ANONYMOUS@gmail.com",
            "Biografia": "XDXDXDXD",
            "Nome": "Marcos Lutero"
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
        "Datadenascimento" : contato.Datadenascimento,
        "Gênero": contato.Gênero,
        "Email": contato.Email,
        "Biografia" : contato.Biografia,        
        "Nome": contato.Nome
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
    db.data[index].Datadenascimento = contato.Datadenascimento,
    db.data[index].Gênero = contato.Gênero,
    db.data[index].Email= contato.Email,
    db.data[index].Biografia = contato.Biografia, 
    db.data[index].Nome = contato.Nome

    

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

//PROFILE PIC

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function(){
    
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

    }
});




