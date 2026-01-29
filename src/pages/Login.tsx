import { LoginSection } from '@/components/sections/LoginSection';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/AuthService';

export default function Login() {
  const navigate = useNavigate();

    async function handleLogin(mail:string, password: string) {
      try {
        const data = await login({ mail, password });

        localStorage.setItem('token', data.token);

        navigate("/admin")
      } catch {
        alert("Email or passwors invalid")
      }
    }
  return <LoginSection onSubmit={handleLogin}/>;
}
