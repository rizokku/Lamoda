import styles from "./FilterPanel.module.scss";

export const FilterPanel = ({ sortOption, setSortOption }) => {
  return (
    <div className={styles.filterPanelContainer}>
      <button
        onClick={() => setSortOption("priceAsc")}
        className={sortOption === "priceAsc" ? styles.active : ""}
      >
        Сначала дешевые
      </button>
      <button
        onClick={() => setSortOption("priceDesc")}
        className={sortOption === "priceDesc" ? styles.active : ""}
      >
        Сначала дорогие
      </button>
      <button
        onClick={() => setSortOption("ratingDesc")}
        className={sortOption === "ratingDesc" ? styles.active : ""}
      >
        Сначала популярные
      </button>
    </div>
  );
};
