function fecharMenuLateral() {
    let menu = document.getElementById('menuLateral');
    let conteudo = document.getElementById('conteudo');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        conteudo.style.marginLeft = '0';
    }
}


function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; 
    fecharMenuLateral();
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = "none"; 
    fecharMenuLateral();
}

window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
            fecharMenuLateral();
        }
    }
};

document.getElementById('menuBtn').addEventListener('click', function() {
    let menu = document.getElementById('menuLateral');
    let conteudo = document.getElementById('conteudo');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        conteudo.style.marginLeft = '0';
    } else {
        menu.classList.add('show');
        if (window.innerWidth > 768) {
            conteudo.style.marginLeft = '250px';
        }
    }
});

let currentStep = 1;
const totalSteps = 7;

function enviarFormulario(){
    // Em desenvolvimento
    alert("Dados Enviados!");
}

function changeStep(direction) {
    const currentForm = document.getElementById(`step${currentStep}`);
    currentStep += direction;

    if (currentStep < 1) currentStep = 1;
    if (currentStep > totalSteps) currentStep = totalSteps;

    for (let i = 1; i <= totalSteps; i++) {
        const formStep = document.getElementById(`step${i}`);
        if (i === currentStep) {
            formStep.classList.add('active');
        } else {
            formStep.classList.remove('active');
        }
    }

    const progress = (currentStep - 1) / (totalSteps - 1) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';

    document.getElementById('prevBtn').disabled = currentStep === 1;
    document.getElementById('nextBtn').disabled = currentStep === totalSteps;
}

changeStep(0);
