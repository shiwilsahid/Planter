import { Plant } from "../../data/plants";

export function PlantItem({ plant }: { plant: Plant }) {
  return (
    <div className="flex justify-between">
      <p className="text-1xl">{plant.text}</p>

      <div className="flex gap-4">
        {plant.watering && <p>&#9810;</p>}
        {plant.fertilization && <p>&#9855;</p>}
        {plant.harvest && <p>&#9935;</p>}
        <p className="text-sm dark:text-slate-400">{plant.category}</p>
      </div>
    </div>
  );
}
