import { ShopItems } from "./ShopItems/ShopItems";
import styles from "./ShopList.module.scss";

export const ShopList = ({ items }) => {
  return (
    <section className={`${styles.container} ${styles.shopItemsContainer}`}>
      {items.map((item, index) => (
        <ShopItems key={index} item={item} />
      ))}
    </section>
  );
};
