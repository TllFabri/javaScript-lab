// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let usuarioLogado = true;
let ehAdministrador = true;

if (usuarioLogado && ehAdministrador) {
    console.log("Acesso concedido: usuário logado com permissão de administrador.");
} else {
    console.log("Acesso negado: é necessário estar logado como administrador.");
}
