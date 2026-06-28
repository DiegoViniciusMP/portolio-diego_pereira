document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const toggleBtn = document.createElement("button");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            if (!nome || !email || !mensagem) {
                e.preventDefault();
                alert("Por favor, preencha todos os campos.");
            } else if (!email.includes("@")) {
                e.preventDefault();
                alert("Digite um email válido.");
            }
        });
    }
});
