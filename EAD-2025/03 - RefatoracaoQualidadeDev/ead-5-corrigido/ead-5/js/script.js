// Array para armazenar os usuários cadastrados
const usuariosArray = [];

// Função para adicionar usuário
function adicionarUsuarios() {
    let nome = document.getElementById("nomeUsuario").value.trim(); // Obtém e limpa o nome do usuário.
    let email = document.getElementById("emailUsuario").value.trim(); // Obtém e limpa o email do usuário.
    let fotoInput = document.getElementById("fotoUsuario"); // Obtém o campo de foto.
    let fotoFile = fotoInput.files[0]; // Obtém o arquivo da foto.

    if (nome === "" || email === "" || !fotoFile) { // Verifica se algum campo está vazio.
        alert("Preencha todos os campos!"); // Exibe um alerta se algum campo estiver vazio.
        return;
    }

    if (!email.includes("@")) { // Verifica se o email contém "@".
        alert("Digite um email válido!"); // Exibe um alerta caso o email não seja válido.
        return;
    }

    // Cria um objeto FileReader para ler o arquivo de imagem
    const reader = new FileReader();
    reader.onloadend = function () {
        const usuario = { nome, email, fotoUrl: reader.result, observacao: "" }; // Cria um objeto para o usuário.
        usuariosArray.push(usuario); // Adiciona o usuário ao array.

        const li = document.createElement("li"); // Cria um novo item de lista.
        li.innerHTML = `${nome} - ${email}
                        <div class="botoes-controle" data-email="${email}">
                            <button class="remove-btn"" data-email="${email}">Remover</button>
                        </div>
                            <button class="about-btn" data-email="${email}">Sobre</button> 
                        `;// Adiciona os botões de remover e sobre no item.

        document.getElementById("listaUsuarios").appendChild(li); // Adiciona o item de lista à lista de usuários.

        document.getElementById("nomeUsuario").value = ""; // Limpa o campo de nome.
        document.getElementById("emailUsuario").value = ""; // Limpa o campo de email.
        fotoInput.value = ""; // Limpa o campo de foto.
    };

    // Lê o arquivo de imagem como uma URL de dados
    reader.readAsDataURL(fotoFile);
}

// Delegação de eventos para remoção e exibição de informações
document.getElementById("listaUsuarios").addEventListener("click", function (event) {
    if (event.target && event.target.matches("button.about-btn")) { // Se o botão "Sobre" for clicado.
        const emailToShow = event.target.getAttribute("data-email"); // Obtém o email do usuário.
        showUserInfo(emailToShow); // Exibe as informações do usuário.
    }

    if (event.target && event.target.matches("button.remove-btn")) { // Se o botão "Remover" for clicado.
        const emailToRemove = event.target.getAttribute("data-email"); // Obtém o email do usuário.
        removeUsuarios(emailToRemove); // Remove o usuário.
    }
});

// Função para exibir as informações do usuário
function showUserInfo(email) {
    const usuario = usuariosArray.find(u => u.email === email); // Encontra o usuário pelo email.
    if (usuario) {
        document.getElementById("profileImage").src = usuario.fotoUrl; // Define a imagem do perfil.
        document.getElementById("observations").value = usuario.observacao; // Exibe a observação do usuário, se houver.
        document.getElementById("userInfoModal").style.display = "flex"; // Exibe o modal.
    }
}

// Função para fechar o modal
function closeUserInfo() {
    document.getElementById("userInfoModal").style.display = "none"; // Fecha o modal.
}

// Função para salvar a observação do usuário
function saveObservation() {
    const observationText = document.getElementById("observations").value.trim(); // Obtém a observação do usuário.
    const email = document.querySelector(".about-btn").getAttribute("data-email"); // Obtém o email do usuário.

    const usuario = usuariosArray.find(u => u.email === email); // Encontra o usuário.
    if (usuario) {
        usuario.observacao = observationText; // Salva a observação no objeto do usuário.
        alert("Observação salva!"); // Exibe um alerta.
        closeUserInfo(); // Fecha o modal.
    }
}

// Função para remover usuário
function removeUsuarios(email) {
    const index = usuariosArray.findIndex(u => u.email === email); // Encontra o índice do usuário.
    if (index !== -1) {
        usuariosArray.splice(index, 1); // Remove o usuário do array.
        document.querySelector(`[data-email='${email}']`).parentElement.remove(); // Remove o item da lista.
    }
}
