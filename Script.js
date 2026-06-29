document.addEventListener("DOMContentLoaded", () => {
    // Pegando o botão de tema e verificando se já existe uma escolha salva
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        // Quando clicar no botão, troca o tema e salva a escolha
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // Se existir formulário de contato, faço uma validação bem básica
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
