document.getElementById('menuBtn').addEventListener('click', function () {
    document.body.classList.toggle('menu-aberto');
});

let currentForm = 1;
function nextForm(formNumber) {
    document.getElementById('form' + currentForm).style.display = 'none';
    currentForm = formNumber;
    document.getElementById('form' + currentForm).style.display = 'block';

    const progress = (currentForm - 1) * 100 / 7;
    document.getElementById('progressBar').style.width = progress + '%';

    for (let i = 1; i <= 7; i++) {
        if (i <= currentForm) {
            document.getElementById('card' + i).style.backgroundColor = 'rgb(0, 80, 155)';
            document.getElementById('card' + i).style.color = 'rgb(255, 255, 255)';
        } else {
            document.getElementById('card' + i).style.backgroundColor = 'rgb(255, 255, 255)';
            document.getElementById('card' + i).style.color = 'rgb(0, 0, 0)';
        }
    }
}

nextForm(1);

function limparFormularios() {
    for (let i = 1; i <= 7; i++) {
        let form = document.querySelector(`#form${i}`);
        if (form) {
            let inputs = form.querySelectorAll("input, select, textarea");

            inputs.forEach(input => {
                if (input.type === "checkbox" || input.type === "radio") {
                    input.checked = false;
                } else if (input.type === "file") {
                    input.value = ""; // Para resetar input de arquivo
                } else {
                    input.value = "";
                }
            });
        }
    }

    alert("Todos os formulários foram limpos.");
}

