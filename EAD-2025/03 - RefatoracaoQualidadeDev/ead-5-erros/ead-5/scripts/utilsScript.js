function enviaProBack() {
    console.log("Enviado para o back, o resto os dev fazem!");
 }
 
 // Falta de um evento mais descritivo ou nome de variável mais claro.
 // Nome da constante `form` está ok, mas o evento poderia ser descrito de maneira mais clara.
 const form = document.getElementById("myForm");
 
 form.addEventListener("submit", function(event) {
     event.preventDefault(); // Correto, mas a explicação de por que este código é necessário não está clara.
     
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     console.log("Nome: " + name); // Console.log aqui pode ser útil para depuração, mas não é recomendado para produção.
     console.log("Email: " + email); // Idem.
     alert("Formulário interceptado! Não quero enviar pro back."); // Alertas podem interromper a experiência do usuário. Evite usá-los em produção.
 });