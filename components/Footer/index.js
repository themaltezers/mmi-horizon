import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.prefooter}>
                {" "}
                <Link
                    className={styles.contact}
                    href={"mailto:contact@mmihorizin.fr"}
                >
                    contact@mmihorizon.fr
                </Link>
                <div className={styles.sublink}>
                    <div
                        className={`${styles.sublinkCard} ${styles.sublinkCardCyber}`}
                    >
                        <h3 className={styles.sublinkTitle}>
                            Responsable Cybersécurité
                        </h3>
                        <p className={styles.sublinkName}>Mouktar MATURAF</p>
                        <ul className={styles.sublinkList}>
                            <li>06 64 71 41 63</li>
                            <li>mouktar.maturaf@mmihorizon.fr</li>
                        </ul>
                    </div>
                    <div
                        className={`${styles.sublinkCard} ${styles.sublinkCardElectronics}`}
                    >
                        <h3 className={styles.sublinkTitle}>
                            Directeur des opérations commercial
                        </h3>
                        <p className={styles.sublinkName}>Mohamed JOUINI</p>
                        <ul>
                            <li>06 56 73 11 42</li>
                            <li>mohamed.jouini@mmihorizon.fr</li>
                        </ul>
                    </div>
                    <div
                        className={`${styles.sublinkCard} ${styles.sublinkCardWeb}`}
                    >
                        <h3 className={styles.sublinkTitle}>
                            Chef de projet numériques
                        </h3>
                        <p className={styles.sublinkName}>Ibrahima BARRY</p>
                        <ul className={styles.sublinkList}>
                            <li>06 64 71 41 63</li>
                            <li>ibrahima.barry@mmihorizon.fr</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerLinks"></div>
        </footer>
    );
};

export default Footer;
