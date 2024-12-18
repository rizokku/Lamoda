import styles from "./FilterColor.module.scss";

export const FilterColor = ({
  selectedColors,
  setSelectedColors,
  availableColors,
}) => {
  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div className={styles.filterColorContainer}>
      <h3>Выберите цвет</h3>
      {availableColors.map((color) => (
        <label key={color} className={styles.colorOption}>
          <input
            type="checkbox"
            checked={selectedColors.includes(color)}
            onChange={() => toggleColor(color)}
          />
          <span>{color}</span>
        </label>
      ))}
    </div>
  );
};
