import api from "@/axios/api";

/**
 * Remove o token de autenticação e redireciona para a página de login
 */
export async function logout() {
  try {
    // Chama o backend para remover o cookie HttpOnly
    await api.post("/users/logout");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  } finally {
    // Redireciona para a página de login independentemente do resultado
    window.location.href = "/";
  }
}
