import Link from "next/link";



export default function Home() {
  return (

    <main className="main">
      <div className="page_head">
        <Link href="/profile">
          <img src="./images/right_arrow.png" className="arrow" />
        </Link>
        <h2 className="page_title">
          Друзья
        </h2>
      </div>
      
      <div className="error_message">
        <p className="error_text">
          У Вас пока нет друзей
        </p>
        <img src="./images/NoFriends.png" className="error_img" />
        <button className="error_button"> Найти друзей</button>


      </div>

    </main>
  );
}
