import { PlantItem } from "./components/ui/plant-item";
import { dataPlants } from "./data/plants";

export function App() {
  return (
    <div className="m-10 ">
      <main className="w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-center bg-slate-600">Planter</h1>

        <section className="space-y-2">
          <h3 className="text-3xl m-2">My Plants</h3>
          <hr />

          <div className="m-2">
            <ul>
              {dataPlants.map((plant) => (
                <li key={plant.id}>
                  <PlantItem plant={plant} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
