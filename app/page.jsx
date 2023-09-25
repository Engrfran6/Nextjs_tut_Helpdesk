'use client';

import Image from 'next/image';
import {useState} from 'react';

export default function Home() {
  const [formValues, setformValues] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <h1>Welcome</h1>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sed rem voluptas.
        Blanditiis quasi dolorem nulla! Eius explicabo nostrum cum!
      </p>

      <form>
        <label>
          Email:
          <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </main>
  );
}
