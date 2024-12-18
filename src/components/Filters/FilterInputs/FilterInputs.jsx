import useDebouncedFunction from "../../../hooks/useDebouncedFunction";
import styles from "./FilterInputs.module.scss";

export const FilterInputs = ({ setSearchTerm, setMinPrice, setMaxPrice }) => {
  const changeInp = useDebouncedFunction(newValue => setSearchTerm(newValue), 500);
  const changeMinPrice = useDebouncedFunction(newValue => setMinPrice(newValue), 500);
  const changeMaxPrice = useDebouncedFunction(newValue => setMaxPrice(newValue), 500);
  return (
    <div className={styles.filterInputsContainer}>
      {setSearchTerm && (
        <input
          type="text"
          placeholder="Поиск"
          onChange={(e) => changeInp(e.target.value)}
        />
      )}
      {setMinPrice && setMaxPrice && (
        <div className={styles.priceInputs}>
          <h3>Цена</h3>
          <input
            type="number"
            placeholder="От"
            onChange={(e) => changeMinPrice(+e.target.value)}
          />
          <input
            type="number"
            placeholder="До"
            onChange={(e) => changeMaxPrice(+e.target.value || 9999)}
          />
        </div>
      )}
    </div>
  );
};
