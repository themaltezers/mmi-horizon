import styles from "@/styles/components/header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
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
                            <Link href={"#web"}>Solutions</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href={"/nos-services"}>Services</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href={"/a-propos"}>A propos</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href={"#"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
