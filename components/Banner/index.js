import styles from "@/styles/components/banner.module.scss";
import Image from "next/image";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerText}>
                <h1 className={styles.bannerTitle}>
                    Tracez votre horizon avec <br /> nos innovations
                    technologiques
                </h1>
                <p className={styles.bannerSubtitle}>
                    MMI Horizon : l'expertise jeune pour des solutions
                    professionnelles.
                </p>
            </div>
            <a className={styles.goto}>
                Je découvre
                <Image
                    className="downArrow"
                    src={"/icon/down-arrow.svg"}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                />
            </a>
        </section>
    );
};

export default Banner;
