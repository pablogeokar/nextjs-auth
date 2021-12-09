import { useAuth } from "../context/AuthProvider/useAuth"

export default function Profile() {
  const auth = useAuth()
  return (
    <>
      <h2>Olá, esta é a área logada</h2>
      <button onClick={auth.logout}>Sair</button>
    </>

  )
}