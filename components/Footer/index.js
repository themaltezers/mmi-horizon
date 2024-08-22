import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
                className={styles.contact}
                href={"mailto:p.dupond@example.com"}
            >
                contact@mmihorizon.fr
            </Link>
        </footer>
    );
};

export default Footer;
