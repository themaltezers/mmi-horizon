import styles from "@/styles/components/header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src={"/logo-mmi-w.svg"}
                    width={30}
                    height={30}
                    alt="logo MMI Horizon"
                />
                <p className={styles.logoTitle}>MMI</p>
            </div>
            <nav className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href={"#"}>Web</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href={"#"}>Cybersécurité</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href={"#"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
