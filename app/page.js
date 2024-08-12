import Image from "next/image";
import styles from "@/styles/pages/home.module.scss";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
        </main>
    );
}
