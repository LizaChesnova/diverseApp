'use client'
import { useState, useEffect } from "react";
import { AuthForm } from "../components/Profile/AuthForm";
import { LoginFrom } from "../components/Profile/LoginForm";
import { SetList } from "../components/Profile/SetList";
import { endpoints } from "../data/config";
import { getJWT, removeJWT, getMe } from "../data/data-utils";
import { useStore } from "../store/app-store";
import { CloseEvents } from "../components/Profile/closeEvents";
export default function Home() {
  const authContext = useStore();
  const user = authContext.user
  const [isLogin, setIsLogin] = useState(false);
  const handelAuth=()=>{
    authContext.checkAuth()
  }
  const changeFrom = () => {
    setIsLogin(!isLogin)
  }
  const handelLogOut=()=>{
    authContext.logout();
  }
  return (

    <main className="main">
      <h2 className="page_title">
        Профиль
      </h2>
      <div>
        {
          authContext.isAuth ?
            (
              <div>
                <p className="username">{user.name}</p>
                <SetList />
              </div>
            )
            :
            (isLogin ?
              <div>
                <AuthForm close = {handelAuth}/>
                <button onClick={changeFrom} className="login_change_btn" >Регистрация</button>
              </div>
              :
              <div>
                <LoginFrom close = {handelAuth} change={changeFrom}/>
                <button onClick={changeFrom} className="login_change_btn">Вход</button>
              </div>

            )
        }
        <button onClick={handelLogOut} className="logout_btn">Выйти из аккаунта</button>

      </div>
    </main>
  );
}
