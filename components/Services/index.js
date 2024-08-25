"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/services.module.scss";
import servicesStore from "@/stores";

const Services = () => {
    const products = servicesStore((state) => state.products);

    return (
        <section>
            <section className={styles.service}>
                <h2 className={styles.serviceTitle}>Web</h2>
                <div className={styles.bento}>
                    <div className={styles.bentoTop}>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Site web sur mesure
                            </h3>
                            <p className={styles.bentoCardText}>
                                Donnez vie à votre vision avec des sites web qui
                                captivent et convertissent. Conçus pour refléter
                                votre marque et offrir une expérience
                                utilisateur inégalée.
                            </p>
                        </div>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Design & Contenu
                            </h3>
                            <p className={styles.bentoCardText}>
                                Créez une identité visuelle forte avec des
                                logos, chartes graphiques, et contenus qui font
                                vibrer votre audience. Chaque élément est pensé
                                pour marquer les esprits.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bentoBottom}>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Montez en flèche sur Google
                            </h3>
                            <p className={styles.bentoCardText}>
                                Surclassez vos concurrents avec des stratégies
                                de SEO et SEA pointues, accroissant trafic et
                                conversions.
                            </p>
                        </div>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Stratégie digitale globale
                            </h3>
                            <p className={styles.bentoCardText}>
                                Boostez votre présence en ligne avec des
                                campagnes digitales complètes : publicité en
                                ligne, email marketing, gestion des réseaux
                                sociaux et bien plus. Nous maximisons votre
                                impact digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.service}>
                <h2 className={styles.serviceTitle}>Cybersécurité</h2>
                <div className={styles.productContainer}>
                    {products.map((p) => (
                        <div key={p.id} className={styles.productCard}>
                            <h3 className={styles.productTitle}>
                                {p.productTitle}
                            </h3>
                            <p className={styles.productSubtitle}>
                                {p.productSubtitle}
                            </p>
                            <Image
                                src={p.productImg}
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                            <ul className={styles.productCarac}>
                                {p.productCarac.map((pCarac) => (
                                    <li
                                        key={pCarac.id}
                                        className={styles.productCaracItem}
                                    >
                                        {" "}
                                        <Image
                                            src={pCarac.icon}
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                        />
                                        <p
                                            className={
                                                styles.productCaracItemText
                                            }
                                        >
                                            {pCarac.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.productBtnContainer}>
                                <Link className={"cta ctaCyber"} href={"#"}>
                                    En savoir plus
                                </Link>
                                <div className={"cta"}>Devis</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.bento} ${styles.bentoCyber}`}>
                    <div className={styles.bentoLeft}>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Infogérance & Support Continu
                            </h3>
                            <p className={styles.bentoCardText}>
                                Confiez-nous la gestion de vos systèmes
                                informatiques. Nous veillons à ce que votre
                                infrastructure soit toujours performante,
                                sécurisée, et optimisée.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bentoRight}>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Installation de Pare-feu Avancée
                            </h3>
                            <p className={styles.bentoCardText}>
                                Sécurisez votre infrastructure avec
                                l’installation de pare-feu sur mesure. De la
                                configuration initiale à l’intégration complète,
                                nous assurons une protection optimale.
                            </p>
                        </div>
                        <div className={styles.bentoRightBottom}>
                            {" "}
                            <div className={styles.bentoCard}>
                                <h3 className={styles.bentoCardTitle}>
                                    Audits de Sécurité Personnalisés
                                </h3>
                                <p className={styles.bentoCardText}>
                                    Identifiez les failles avant qu’elles ne
                                    soient exploitées. Nos audits vous donnent
                                    une vue claire et actionnable pour renforcer
                                    vos défenses.
                                </p>
                            </div>{" "}
                            <div className={styles.bentoCard}>
                                <h3 className={styles.bentoCardTitle}>
                                    Accès Sécurisés et Connexions VPN
                                </h3>
                                <p className={styles.bentoCardText}>
                                    Protégez vos communications et données
                                    sensibles avec des solutions VPN et une
                                    gestion rigoureuse des accès. Sécurité et
                                    confidentialité garanties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Services;
