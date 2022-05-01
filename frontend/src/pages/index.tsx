import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navbar } from '../components/navbar';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const Router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post('http://127.0.0.1:3333/user', {
        name,
        email,
      })
      .then(() => {
        Router.push('/home');
      });
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <form
        action="post"
        className="flex flex-col flex-1 items-center justify-center gap-2"
        onSubmit={handleLogin}>
        <label htmlFor="email" className="flex flex-col">
          <span className="text-gray-600"> E-mail</span>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            id="nome"
            className="border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 px-3 text-gray-600 placeholder:text-gray-300 py-1.5"
          />
        </label>

        <label htmlFor="nome" className="flex flex-col">
          <span className="text-gray-600"> Nome</span>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="nome"
            name="nome"
            placeholder="Digite seu nome"
            id="nome"
            className="border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 px-3 text-gray-600 placeholder:text-gray-300 py-1.5"
          />
        </label>

        <input
          type="submit"
          value="Criar Conta"
          className="bg-purple-400 hover:bg-purple-500 hover:scale-105 transition duration-200 cursor-pointer text-white px-3.5 py-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default Login;
