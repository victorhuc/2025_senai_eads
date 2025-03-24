 // Código duplicado sem necessidade de criar essa função se ela não for chamada em nenhum lugar.
 // Poderia ser removida ou utilizada, caso realmente necessária.
 function exibirUsuarios() {
    for (var i = 0; i < usuariosArray.length; i++) {
        console.log("Usuário: " + usuariosArray[i].nome + " - Email: " + usuariosArray[i].email); // Console.log não necessário em produção
    }
}

