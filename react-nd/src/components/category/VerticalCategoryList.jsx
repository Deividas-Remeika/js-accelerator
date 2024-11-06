import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";
import styles from "./VerticalCategoryList.module.scss";

const CategoryListVertical = () => {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryListVertical;
