import styles from "@/styles/components/header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.logo}>
                <Image
                    src={"/new-logo.svg"}
                    width={50}
                    height={50}
                    alt="logo MMI Horizon"
                />
                <p className={styles.logoTitle}>MMI</p>
            </Link>
            <nav className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href={"#web"}>Web</Link>
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
