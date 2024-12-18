import styles from "../ShopList.module.scss";

export const ShopItems = ({ item }) => {
  return (
    <div className={styles.shopItemCard}>
      <img src={item.imageUrl} alt={item.name} className={styles.image} />
      <p className={styles.name}>{item.name}</p>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.color}>Цвет: {item.color}</p>
      <p className={styles.price}>Цена: {item.price} BYN</p>
      <p className={styles.rating}>Рейтинг: {item.rating}</p>
      <p className={styles.category}>Категория: {item.category}</p>
    </div>
  );
};
