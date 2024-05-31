


import { endpoints } from "../data/config";

import { NewsSection } from "../components/NewsList/NewsSection";
import { use } from "react";
import { getData } from "../data/data-utils";


export default  function Home() {
  const data = use(fetchData());

  async function fetchData() {
    const newData = await getData(endpoints.news);
    return newData
  }
  return (
    <main className="main">
      <h2 className="page_title">Новости</h2>
      <NewsSection data={data} />

    </main>
  )

}