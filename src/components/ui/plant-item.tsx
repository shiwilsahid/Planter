import { Plant } from "../../data/plants";

export function PlantItem({ plant }: { plant: Plant }) {
  return (
    <div className="flex justify-between">
      <p className="text-1xl">{plant.text}</p>

      <div className="flex gap-4 text-sm">
        {plant.watering && <p>Watering</p>}
        {plant.fertilization && <p>fertilization</p>}
        {plant.harvest && <p>harvest</p>}
        <p className="text-sm dark:text-slate-400">{plant.category}</p>
      </div>
    </div>
  );
}
