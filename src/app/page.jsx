import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next App Installer By Akanda.Dev</h1>
      <p>
        Edit the page (src\app\page.jsx) file to get started.
      </p>
      <hr/>
      <h2>
        Replace Files
      </h2>
      <p>
        Replace the favicon.ico file with your project favicon (src\app\favicon.ico) using same file name and extension, do the same for opengraph-image.png.
      </p>
      <hr/>
      <h2>
        Setup Open Graph
      </h2>
      <p>
        Set up your OG tag in the layout file (src\app\layout.jsx).
      </p>
    </main>
  );
}
