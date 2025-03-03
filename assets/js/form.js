document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    setTimeout(() => {
        alert("Cadastro realizado com sucesso!");
    }, 1000);
});