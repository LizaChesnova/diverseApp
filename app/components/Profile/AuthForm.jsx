'use client'
import Styles from './AuthForm.module.css';
import { authorize, getMe, isResponseOk, setJWT } from '@/app/data/data-utils';
import { endpoints } from '@/app/data/config';
import { useState } from 'react';
import crypto from 'crypto';

export const AuthForm = (props) => {
  
  const [authData, setAuthData] = useState({ login: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });
  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Numpassword = Number(authData.password);
    const hashedPassword = crypto.createHash('sha256').update(Numpassword).digest('hex');
    const userData = await authorize(endpoints.users, authData.login, hashedPassword);
    if (isResponseOk(userData)) {
      setMessage({ status: "success", text: "Вы авторизовались!" });
      setJWT(userData.jwt)
      props.close()
    }
    else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
      e.target.reset();
    }

  };
 
  return (
    <section className={Styles.form_section}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <p className={Styles.form_title}>Авторизация</p>
        <div className={Styles.form_fields}>
          <label className={Styles.form_field}>
            <input className={Styles.form_fieldinput} onInput={handleInput} type="email" placeholder="Логин" name="login" />
          </label>
          <label className={Styles.form_field}>
            <input className={Styles.form_fieldinput} onInput={handleInput} type="password" placeholder='Пароль' name="password" />
          </label>
        </div>
        <button className={Styles.form__submit} type="submit">Войти</button>
        <p className="message" >{message.text}</p>

      </form>
      <div className={Styles.back_img}></div>

    </section>

  )
}

