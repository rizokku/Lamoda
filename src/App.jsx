import { useState } from "react";
import { useChance } from "./hooks/useChance";
import { FilterInputs } from "./components/Filters/FilterInputs/FilterInputs";
import { FilterPanel } from "./components/Filters/FilterPanel/FilterPanel";
import { FilterColor } from "./components/Filters/FilterColor/FilterColor";
import styles from "./App.module.scss";
import { ShopList } from "./components/ShopList/ShopList";

const filterByName = (searchTerm) => (item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.description.toLowerCase().includes(searchTerm.toLowerCase());

const filterByPrice = (minPrice, maxPrice) => (item) =>
  item.price >= minPrice && item.price <= maxPrice;

const filterByColor = (selectedColors) => (item) =>
  selectedColors.length === 0 || selectedColors.includes(item.color);

const createFilters = (searchTerm, minPrice, maxPrice, selectedColors) => [
  filterByName(searchTerm),
  filterByPrice(minPrice, maxPrice),
  filterByColor(selectedColors),
];

export const App = () => {
  const randomItems = useChance(8);
  const [items] = useState(randomItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOption, setSortOption] = useState("priceAsc");

  const filters = createFilters(searchTerm, minPrice, maxPrice, selectedColors);

  const filteredItems = items.filter((item) =>
    filters.every((filter) => filter(item))
  );

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "ratingDesc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  };

  const sortedItems = sortItems(filteredItems);
  const uniqueColors = [...new Set(items.map((item) => item.color))];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.topFilters}>
        <FilterInputs setSearchTerm={setSearchTerm} />
        <FilterPanel sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.sidebar}>
          <FilterInputs setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <FilterColor
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            availableColors={uniqueColors}
          />
        </div>
        <div className={styles.shopItemsContainer}>
          {sortedItems.length === 0 ? (
            <p>По вашему запросу ничего не найдено.</p>
          ) : (
            <ShopList items={sortedItems} />
          )}
        </div>
      </div>
    </main>
  );
};
