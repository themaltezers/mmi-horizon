import styles from "@/styles/components/banner.module.scss";

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
                <button className={styles.btn}>Je découvre</button>
            </div>
        </section>
    );
};

export default Banner;
