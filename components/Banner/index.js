import styles from "@/styles/components/banner.module.scss";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ content }) => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerText}>
                <h1 className={styles.bannerTitle}>{content.title}</h1>
                <p className={styles.bannerSubtitle}>{content.subtitle}</p>
            </div>
            <div className={"btnContainer btnContainerMid"}>
                <Link href={"#"} className="cta ctaCyberInvert">
                    Découvrir
                </Link>
                <Link href={"#"} className="cta ctaCyber">
                    Configurer
                </Link>
            </div>
        </section>
    );
};

export default Banner;
