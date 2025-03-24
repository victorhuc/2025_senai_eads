// ATENÇÃO: Comentário indicando que o código não deve ser alterado. 
 // Mas seria interessante fornecer um contexto maior sobre o porquê disso (evitar modificações inadvertidas sem saber o motivo).
 var usuariosArray = []; // Seria bom explicar o que é esse array e qual é o seu propósito.
 
 // Função de adicionar usuário
 function adicionarusuario() {
     var nome = document.getElementById("nomeUsuario").value; // 'nome' e 'email' não têm validação de formato.
     var email = document.getElementById("emailUsuario").value;
 
     if (nome == "" || email == "") { // Verificação de campos vazios está correta, mas poderia ser mais amigável com o usuário.
         alert("Preencha todos os campos!"); // Evite alertas que interrompem a interação do usuário.
         return; // Interrupção da função com um retorno imediato está correto.
     }
 
     var usuario = { nome: nome, email: email }; // Criação de um objeto de usuário.
     usuariosArray.push(usuario); // Adiciona o usuário ao array.
 
     console.log(usuariosArray); // Console.log não é necessário na produção. Pode ser removido.
 
     var li = document.createElement("li");
     li.innerHTML = nome + " - " + email + " <button onclick='removeuser(\"" + email + "\")'>Remover</button>";
     document.getElementById("listausers").appendChild(li); // Adiciona a lista de usuários, ótimo.
 
     // Limpeza dos campos após o cadastro está correta, mas o método de reset poderia ser mais seguro.
     document.getElementById("nomeUsuario").value = "";
     document.getElementById("emailUsuario").value = "";
 }
 
 // Função para remover um usuário
 function removeuser(email) {
     // Falta de otimização: sempre que um usuário for removido, a lista inteira é recriada. 
     // Isso é ineficiente, especialmente em listas maiores.
     for (var i = 0; i < usuariosArray.length; i++) {
         if (usuariosArray[i].email === email) {
             usuariosArray.splice(i, 1); // Remover o item do array está correto, mas poderia ser otimizado.
             
             console.log("Hehehe, chablau, foi pro espeto!"); // Mensagens de debug não são necessárias em produção.
             break;
         }
     }
 
     // Atualização da lista de usuários após a remoção é uma solução simples, mas ineficiente.
     document.getElementById("listausers").innerHTML = ""; // A lista inteira é apagada e recriada. Isso não é ideal.
     for (var i = 0; i < usuariosArray.length; i++) {
         var li = document.createElement("li");
         li.innerHTML = usuariosArray[i].nome + " - " + usuariosArray[i].email + " <button onclick='removeuser(\"" + usuariosArray[i].email + "\")'>Remover</button>";
         document.getElementById("listausers").appendChild(li); // Adiciona de novo, mas um simples `li.remove()` poderia ser mais eficiente.
     }
 }












 

 