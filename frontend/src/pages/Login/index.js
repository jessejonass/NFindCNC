import React, { useState } from 'react';
import api from '../../services/api';

// import logo from '../../assets/logo.svg';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    // Salvando o usuário logado
    localStorage.setItem('user', _id);

    history.push('/dashboard')
  }

  return (
    <>
      <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}