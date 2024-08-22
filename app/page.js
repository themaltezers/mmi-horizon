import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/home.module.scss";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Banner></Banner>
            <section className={styles.pres}>
                <h2 className={styles.presTitle}>Nous</h2>
                <div className={styles.presDiv}>
                    <p className={styles.presText}>
                        Chez MMI Horizon, nous transformons la technologie en un
                        levier de réussite. Nous sommes une jeune startup
                        dynamique, animée par la passion de l'innovation et la
                        volonté d'offrir des solutions technologiques sur
                        mesure. Que vous soyez une entreprise cherchant à
                        renforcer sa sécurité réseau ou un professionnel du web
                        souhaitant une présence en ligne impactante, MMI Horizon
                        est votre partenaire idéal.
                    </p>
                    <p className={styles.presText}>
                        {" "}
                        Notre expertise couvre un large spectre de services,
                        allant de la cybersécurité à la conception web, en
                        passant par l'optimisation de réseaux et la gestion de
                        données. Avec une équipe dédiée d'experts, nous
                        apportons des solutions complètes et personnalisées,
                        adaptées aux besoins spécifiques de chaque client. Nous
                        croyons en l'importance de la proximité avec nos
                        clients, en combinant agilité, créativité et technologie
                        pour vous offrir un service unique, capable de répondre
                        aux défis technologiques les plus complexes. Ensemble,
                        atteignons de nouveaux horizons avec des innovations qui
                        propulsent votre activité vers l'avant.
                    </p>
                    <p className={styles.presText}>
                        Notre savoir-faire s'étend sur un large éventail de
                        services, de la cybersécurité à la conception web, en
                        passant par l'optimisation des réseaux et la gestion des
                        données. Avec une équipe d'experts dédiée, nous vous
                        offrons des solutions complètes, taillées pour répondre
                        à vos besoins uniques.
                    </p>
                    <p className={styles.presText}>
                        Nous privilégions la proximité avec nos clients. Nous
                        allions agilité, créativité et expertise technologique
                        pour vous fournir un service distinctif, capable de
                        relever les défis les plus complexes. Ensemble,
                        franchissons de nouveaux horizons et faisons de
                        l'innovation un levier pour votre croissance.
                    </p>
                </div>
            </section>
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
                                Design et Contenu qui Captivent
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
                                Montez en Flèche sur Google
                            </h3>
                            <p className={styles.bentoCardText}>
                                Surclassez vos concurrents avec des stratégies
                                de SEO et SEA pointues, accroissant trafic et
                                conversions.
                            </p>
                        </div>
                        <div className={styles.bentoCard}>
                            <h3 className={styles.bentoCardTitle}>
                                Boostez votre Visibilité en Ligne
                            </h3>
                            <p className={styles.bentoCardText}>
                                Attirez et engagez votre audience avec des
                                stratégies digitales percutantes. Du SEO au SEA,
                                on s’occupe de tout pour que vous soyez vu et
                                entendu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.service}>
                <h2 className={styles.serviceTitle}>cybersécurité</h2>
                <div className={styles.productContainer}>
                    <div className={styles.productCard}>
                        <h3 className={styles.productTitle}>
                            HorizGuard Basic
                        </h3>
                        <p className={styles.productSubtitle}>
                            La sécurité essentielle pour votre réseau
                        </p>
                        <Image
                            src="/img/product/HorizGuardBasic/HorizGuard-Basic1.webp"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <ul className={styles.productCarac}>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-cpu.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    Intel Celeron J4125 CPU @ 2.70GHz
                                </p>
                            </li>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-stockage.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    1 x mSata SSD et 1 x 3.5 pouce SATA HDD
                                </p>
                            </li>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-cpu.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    Intel 2.70GHz
                                </p>
                            </li>
                        </ul>
                        <div className={styles.productBtnContainer}>
                            <Link className={"cta ctaCyber"} href={"#"}>
                                En savoir plus
                            </Link>
                            <div className={"cta"}>Devis</div>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <h3 className={styles.productTitle}>
                            HorizGuard Basic
                        </h3>
                        <p className={styles.productSubtitle}>
                            La sécurité essentielle pour votre réseau
                        </p>
                        <Image
                            src="/img/product/HorizGuardBasic/HorizGuard-Basic1.webp"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <ul className={styles.productCarac}>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-cpu.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    Intel Celeron J4125 CPU @ 2.70GHz
                                </p>
                            </li>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-stockage.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    1 x mSata SSD et 1 x 3.5 pouce SATA HDD
                                </p>
                            </li>
                            <li className={styles.productCaracItem}>
                                {" "}
                                <Image
                                    src="/icon/icon-cpu.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <p className={styles.productCaracItemText}>
                                    Intel 2.70GHz
                                </p>
                            </li>
                        </ul>
                        <div className={styles.productBtnContainer}>
                            <Link className={"cta ctaCyber"} href={"#"}>
                                En savoir plus
                            </Link>
                            <div className={"cta"}>Devis</div>
                        </div>
                    </div>
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
            <Footer></Footer>
        </main>
    );
}
