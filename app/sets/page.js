import Link from "next/link";
import { Sets } from "../components/Profile/Sets";



export default function Home() {
  return (

    <main className="main">
      <div className="page_head">
        <Link href="/profile">
          <img src="./images/right_arrow.png" className="arrow" />
        </Link>
        <h2 className="page_title">
          Настройки
        </h2>

      </div>
      <div>
        <Sets/>
      </div>
    </main>
  );
}
