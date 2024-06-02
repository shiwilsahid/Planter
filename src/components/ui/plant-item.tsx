import { Plant } from "../../data/plants";

export function PlantItem({ plant }: { plant: Plant }) {
  return (
    <div>
      <p>{plant.text}</p>
    </div>
  );
}
