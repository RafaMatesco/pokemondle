import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  var background_url = "/background4X.jpg";

  return (
    <div className={styles.main}>
      <Image src={background_url} fill={true} alt="Background image" />

      <input type="text" className={styles.pokemon_input}/>
    </div>
  );
}
