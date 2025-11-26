function gerarSenha() {
    const tamanho = parseInt(document.getElementById("tamanho").value);
    if (isNaN(tamanho) || tamanho < 4 || tamanho > 20) {
        alert("Digite um tamanho entre 4 e 20.");
        return;
    }

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    document.getElementById("resultado").textContent = senha;
}