export type Plant = {
  id: number;
  text: string;
  category: string;
  watering: boolean;
  fertilization: boolean;
  harvest: boolean;
};

export const dataPlants: Plant[] = [
  {
    id: 1,
    text: "Apple",
    category: "Fruit",
    watering: true,
    fertilization: false,
    harvest: false,
  },

  {
    id: 2,
    text: "Bayam",
    category: "Spinach",
    watering: true,
    fertilization: true,
    harvest: false,
  },
  {
    id: 3,
    text: "Cabbage",
    category: "Spinach",
    watering: true,
    fertilization: true,
    harvest: false,
  },
  {
    id: 4,
    text: "Melon",
    category: "Fruit",
    watering: false,
    fertilization: true,
    harvest: false,
  },
  {
    id: 5,
    text: "Watermelon",
    category: "Fruit",
    watering: false,
    fertilization: false,
    harvest: true,
  },
];
