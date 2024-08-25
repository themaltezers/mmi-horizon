import styles from "@/styles/pages/product.module.scss";
import Image from "next/image";
import Link from "next/link";
const Product = () => {
    return (
        <main className={styles.productPage}>
            <section className={styles.productBanner}>
                <div className={styles.productBannerText}>
                    <h1 className={styles.productTitle}>HorizGuard Basic</h1>
                    <p className={styles.productSubtitle}>
                        Sécurisez votre réseau avec un pare-feu performant,
                        fiable et accessible.
                    </p>
                </div>
                {/* <Image src={"/img/"} width={15} height={15} alt="test" /> */}
                <div className={styles.btnContainer}>
                    <Link href={"#"} className="cta ctaCyberInvert">
                        Découvrir
                    </Link>
                    <Link href={"#"} className="cta ctaCyber">
                        Configurer
                    </Link>
                </div>
            </section>
            <section className={styles.productPres}>
                <Image
                    className={styles.productPresImg}
                    src="/img/product/HorizGuardBasic/HorizGuard-Basic1.webp"
                    width={300}
                    height={300}
                    alt="HorizGuard Basic"
                />

                <div className={styles.rightPart}>
                    <div className={styles.productPresText}>
                        <div className={styles.productPresTextTop}>
                            <h2 className={styles.productPresTextTitle}>
                                HorizGuard Basic
                            </h2>
                            <p className={styles.productPresTextSubtitle}>
                                Un Pare-feu Conçu pour l’Essentiel
                            </p>
                        </div>
                        <p className={styles.productPresDesc}>
                            Le HorizGuard Basic est la solution idéale pour les
                            petites entreprises et les particuliers souhaitant
                            sécuriser leur réseau sans compromis. <br /> <br />{" "}
                            Conçu pour être performant et simple à gérer, il
                            offre une protection robuste contre les menaces en
                            ligne, tout en restant abordable et facile à
                            utiliser.
                        </p>
                        <ul className={styles.productPresList}>
                            <li className={styles.productPresListItem}>
                                <span className="circle circleCyber"></span>
                                Protection 24h/7j contre les menaces en ligne
                            </li>
                            <li className={styles.productPresListItem}>
                                <span className="circle circleCyber"></span>
                                Installation et configuration simplifiées
                            </li>
                            <li className={styles.productPresListItem}>
                                <span className="circle circleCyber"></span>
                                Performances optimisées avec un processeur Intel
                                de dernière génération
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                            <Link className="cta ctaCyber" href={"#"}>
                                Fiche produit{" "}
                            </Link>
                            <Link className="cta ctaCyber" href={"#"}>
                                Configurer{" "}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.productPresText}>
                        <div className={styles.productPresTextTop}>
                            <h2 className={styles.productPresTextTitle}>
                                Pourquoi Choisir le HorizGuard Basic ?
                            </h2>
                            <p className={styles.productPresTextSubtitle}>
                                Le HorizGuard Basic ne se contente pas de
                                protéger votre réseau, il le transforme en une
                                forteresse numérique, tout en restant accessible
                                et pratique.
                            </p>
                        </div>

                        <ul className={styles.productCarrousel}>
                            <li className={styles.productCarrouselItem}>
                                <p className={styles.productCarrouselItemTitle}>
                                    Sécurité inégalée
                                </p>
                                <p className={styles.productCarrouselItemText}>
                                    Protégez vos données sensibles efficacement.{" "}
                                    <br />
                                    Repousse les cybermenaces les plus avancées.
                                </p>
                            </li>
                            <li className={styles.productCarrouselItem}>
                                <p className={styles.productCarrouselItemTitle}>
                                    Sécurité inégalée
                                </p>
                                <p className={styles.productCarrouselItemText}>
                                    Protégez vos données sensibles efficacement.{" "}
                                    <br />
                                    Repousse les cybermenaces les plus avancées.
                                </p>
                            </li>
                            <li className={styles.productCarrouselItem}>
                                <p className={styles.productCarrouselItemTitle}>
                                    Sécurité inégalée
                                </p>
                                <p className={styles.productCarrouselItemText}>
                                    Protégez vos données sensibles efficacement.{" "}
                                    <br />
                                    Repousse les cybermenaces les plus avancées.
                                </p>
                            </li>
                            <li className={styles.productCarrouselItem}>
                                <p className={styles.productCarrouselItemTitle}>
                                    Sécurité inégalée
                                </p>
                                <p className={styles.productCarrouselItemText}>
                                    Protégez vos données sensibles efficacement.{" "}
                                    <br />
                                    Repousse les cybermenaces les plus avancées.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.productPresText}>
                        <div className={styles.productPresTextTop}>
                            <h2 className={styles.productPresTextTitle}>
                                Caractéristiques Techniques
                            </h2>
                            <ul className={styles.productPresList}>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                                <li className={styles.productListItem}>
                                    <span
                                        className={styles.productCaracItemSpan}
                                    >
                                        Processeur :{" "}
                                    </span>
                                    Intel Celeron J4125, 4 cœurs, 2.0 GHz
                                    jusqu'à 2.70 GHz
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
