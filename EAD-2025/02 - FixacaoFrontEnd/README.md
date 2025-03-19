# 📌 Sistema de Cadastro de Usuários

Este projeto é um **sistema web** para **cadastro de usuários**, desenvolvido utilizando **HTML, CSS, JavaScript e Bootstrap**. O sistema permite o registro de usuários em **múltiplas etapas**, garantindo uma experiência amigável e organizada.

## 🚀 Tecnologias Utilizadas
- **HTML5** → Estruturação da página  
- **CSS3** → Estilização e responsividade  
- **Bootstrap 5** → Layout moderno e responsivo  
- **JavaScript** → Interatividade e controle do formulário  

---

## 📌 Estrutura do Site

O sistema conta com as seguintes seções:

### **1️⃣ Header (Cabeçalho)**
- Fixo no topo da página.
- Contém um **botão de menu lateral (offcanvas)**.
- Exibe um **título e logotipo**.

### **2️⃣ Menu Lateral (Offcanvas)**
- Contém links de navegação:
  - 📄 **Formulários**
  - 📞 **Contato**
  - ℹ️ **Sobre**
  - ⚙️ **Configurações**
- Se esconde automaticamente ao clicar em um item.

### **3️⃣ Formulário Multi-Etapas**
O formulário de cadastro está dividido em várias etapas, proporcionando uma experiência mais intuitiva para o usuário.

| Etapa | Descrição |
|-------|-----------|
| 1️⃣ | **Dados Pessoais** (Nome, CPF, RG, Foto, Assinatura Digital) |
| 2️⃣ | **Contato** (E-mail, Telefone, Endereço) |
| 3️⃣ | **Credenciais de Acesso** (Usuário, Senha, Pergunta Secreta) |
| 4️⃣ | **Informações Profissionais** (Cargo, Empresa, Salário) |
| 5️⃣ | **Preferências e Redes Sociais** (Gênero Musical, Hobbies, Facebook, Instagram, LinkedIn) |
| 6️⃣ | **Pagamentos e Dados Bancários** (Cartão de Crédito, Conta Bancária) |
| 7️⃣ | **Outros Recursos** (Upload de Documentos, Horário de Contato, Dependentes, Cor Favorita) |

### **4️⃣ Funcionalidades**
✔️ **Barra de progresso** indicando o avanço no preenchimento.  
✔️ **Navegação dinâmica** entre etapas com botões "Anterior" e "Próximo".  
✔️ **Botões "Enviar" e "Limpar"** para finalizar ou resetar o formulário.  
✔️ **Campos de preenchimento obrigatório com validação** em tempo real.  

### **5️⃣ Rodapé (Footer)**
- Fixo na parte inferior da página.
- Exibe direitos autorais e informações do sistema.

---

## 📌 Estilização (CSS)
A identidade visual do sistema segue um **tema azul** (**#0357ac**), garantindo uma aparência moderna e agradável.

### 🎨 **Principais estilos aplicados:**
✅ **Responsividade total** (ajusta-se a diferentes dispositivos).  
✅ **Bordas arredondadas** nos campos do formulário.  
✅ **Modais personalizados** com fundo escuro e transição suave.  
✅ **Botões interativos** com efeitos de hover.  

---

## 📜 Código Principal

### **1️⃣ Estrutura HTML** (exemplo do formulário)
```html
<div class="container mt-4">
    <div class="card">
        <div class="card-header bg-primary text-white">Cadastro de Usuário</div>
        <div class="card-body">
            <form id="formCadastro">
                <!-- Etapa 1: Dados Pessoais -->
                <div class="form-step">
                    <label for="nome">Nome Completo:</label>
                    <input type="text" class="form-control" id="nome" required>
                    
                    <label for="cpf">CPF:</label>
                    <input type="text" class="form-control" id="cpf" required>
                </div>

                <!-- Botões de navegação -->
                <div class="d-flex justify-content-between mt-3">
                    <button type="button" class="btn btn-secondary prev-step">Anterior</button>
                    <button type="button" class="btn btn-primary next-step">Próximo</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

### **2️⃣ JavaScript (Controle do Formulário)**
```javascript
document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 0;
    const steps = document.querySelectorAll(".form-step");
    const nextButtons = document.querySelectorAll(".next-step");
    const prevButtons = document.querySelectorAll(".prev-step");

    function showStep(step) {
        steps.forEach((el, index) => {
            el.style.display = index === step ? "block" : "none";
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);
});
```

---

## 🛠️ Como Executar o Projeto

1️⃣ Faça o download do código-fonte.  
2️⃣ Abra o arquivo **index.html** em um navegador.  
3️⃣ Navegue pelo formulário e preencha os campos.  

---

## 🏗️ Possíveis Melhorias Futuras
🚀 Integração com um **banco de dados** para armazenar cadastros.  
📧 Envio de **e-mail de confirmação** após o cadastro.  
🔐 Implementação de **autenticação e login**.  
📱 Mais **animações** e **melhoria na acessibilidade**.  

---

## 📢 Contribuição
Caso tenha sugestões, sinta-se à vontade para contribuir ou abrir uma issue! 😃  

✉️ **Contato:** [victor.anydev@gmail.com]  

---

© 2025 - **Cadastro de Usuários**  
