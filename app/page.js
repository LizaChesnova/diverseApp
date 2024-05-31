
import { AddPlace } from "./components/Buttons/AddPlace";
import { CardsList } from "./components/CardsList/CardsList";
import { endpoints } from "./data/config";
import { getData } from "./data/data-utils";


export default async function Home() {
  const data =  await getData(endpoints.places)
  return (

    <main className="main">
      <h2 className="page_title">
        Загрязненные места
      </h2>
      <CardsList data={data}  />
      <AddPlace />
    </main>
  );
}
