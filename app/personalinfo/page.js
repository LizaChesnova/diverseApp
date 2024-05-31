'use client'
import Link from "next/link";
import { useStore } from "../store/app-store";
import Styles from "./persinfro.module.css"
import { EditProfile } from "../components/Buttons/EditProfile";


export default function Home() {
  const authContext = useStore();
  if (authContext.user){
    return (

      <main className="main">
        <div className="page_head">
          <Link href="/profile">
            <img src="./images/right_arrow.png" className="arrow" />
          </Link>
          <h2 className="page_title">
            Личные данные
          </h2>
  
        </div>
        <div className={Styles.info_block}>
          <p className={Styles.info_text} >Имя: {authContext.user.name}</p>
          <p className={Styles.info_text}>Email: {authContext.user.email}</p>
        </div>
        <EditProfile/>
      </main>
    );

  }
  
}
