'use client'
import Styles from './AuthForm.module.css';
import { checkIfUserExists, getMe, register, setJWT } from '@/app/data/data-utils';
import { endpoints } from '@/app/data/config';
import { useEffect, useState } from 'react';
import crypto from 'crypto';

export const LoginFrom = (props) => {
  const [authData, setAuthData] = useState({ name: "", login: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: authData.name,
      email: authData.login,
    };
    const usertoken = Buffer.from(JSON.stringify(payload)).toString('base64');
    const password = authData.password.trim();
    if (!/^\d+$/.test(password)) {
      setMessage({ status: "error", text: "Пароль должен содержать только цифры" });
      return;
    }
    const Numpassword = Number(authData.password);
    const hashedPassword = crypto.createHash('sha256').update(Numpassword).digest('hex');

    let body = {
      user: {
        name: authData.name,
        email: authData.login,
        password: hashedPassword,
        jwt: usertoken,
      },
    };

    try {
      const userExists = await checkIfUserExists(endpoints.users, authData.login);
      if (userExists) {
        setMessage({ status: "error", text: "Такой пользователь уже есть" });
      } else {
        const response = await register(endpoints.users, body);
        console.log(response);

        if (response.success) {
          setMessage({ status: "success", text: "Вы зарегестрировались!" });
          setJWT(response.jwt);
          props.close();
          e.target.reset();
        } else {
          setMessage({ status: "error", text: response.error || "Произошла ошибка при регистрации" });
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage({ status: "error", text: "Произошла ошибка при регистрации" });
    }
  };

return (
  <section className={Styles.form_section}>
    <form className={Styles.form} onSubmit={handleSubmit}>
      <p className={Styles.form_title}>Регистрация</p>
      <div className={Styles.form_fields}>
        <label className={Styles.form_field}>
          <input className={Styles.form_fieldinput} onInput={handleInput} type="text" placeholder="Имя" name="name" />
        </label>
        <label className={Styles.form_field}>
          <input className={Styles.form_fieldinput} onInput={handleInput} type="email" placeholder="Логин" name="login" />
        </label>
        <label className={Styles.form_field}>
          <input className={Styles.form_fieldinput} onInput={handleInput} type="password" placeholder="Пароль" name="password" />
          <p className={Styles.password_info}> Пароль должен стостоять только из цифр 0-9</p>
        </label>
      </div>
      <button className={Styles.form__submit} type="submit">Зарегестрироваться</button>
      <p className="message">{message.text}</p>
    </form>
    <div className={Styles.back_img}></div>
  </section>
)
}