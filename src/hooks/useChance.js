import { Chance } from "chance";

export const useChance = (count) => {
  const chance = new Chance();

  const shoeNames = [
    "Кроссовки",
    "Ботинки",
    "Сандалии",
    "Туфли",
    "Ботильоны",
    "Сапоги",
    "Сникеры",
    "Кеды",
    "Лоферы",
    "Сандалии на платформе",
  ];

  const shoeDescriptions = [
    "Удобная обувь для повседневной носки.",
    "Легкие и дышащие кроссовки для тренировок.",
    "Стильные туфли для особых случаев.",
    "Элегантные ботинки для деловых встреч.",
    "Классические лоферы для комфортного ношения.",
  ];

  const colors = ["красный", "синий", "зеленый", "желтый", "фиолетовый"];
  const categories = [
    "Спортивная обувь",
    "Офисная обувь",
    "Летняя обувь",
    "Зимняя обувь",
    "Классическая обувь",
    "Модная обувь",
    "Обувь для отдыха",
    "Туристическая обувь",
    "Детская обувь",
    "Обувь для танцев",
  ];

  const images = [
    "images/shoe1.jpg",
    "images/shoe2.jpg",
    "images/shoe3.jpg",
    "images/shoe4.jpg",
    "images/shoe5.jpg",
    "images/shoe6.jpg",
    "images/shoe7.jpg",
    "images/shoe8.jpg",
    "images/shoe9.jpg",
    "images/shoe10.jpg",
  ];

  const items = Array.from({ length: count }, () => ({
    id: chance.guid(),
    name: chance.pickone(shoeNames),
    description: chance.pickone(shoeDescriptions),
    color: chance.pickone(colors),
    category: chance.pickone(categories),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ fixed: 1, min: 0, max: 5 }),
    imageUrl: chance.pickone(images),
  }));

  return items;
};
