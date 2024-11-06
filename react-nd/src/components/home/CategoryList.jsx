import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
