import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CardList from "@/components/cardList/CardItems";
import Menu from "@/components/menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";

export default function Home() {
  return <div>
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </div>
  </div>
}
