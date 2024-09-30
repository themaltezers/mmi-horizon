"use client";
import { useState } from "react";
import Choicer from "@/components/Choicer";
import styles from "@/styles/pages/product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import servicesStore from "@/stores";

const Product = ({ params }) => {
    const { slug } = params;
    const products = servicesStore((state) => state.products);
    const product = products.find((p) => p.slug === `/produits/${slug}`);

    const allowedSlugs = ["horizguard-basic", "horizguard-premium"];

    // if (!allowedSlugs.includes(slug)) {
    //     redirect("/404"); // Ou toute autre page
    // }

    if (!product) {
        notFound(); // Déclenche une page 404
    }

    const [image, setImage] = useState(0);

    return (
        <main className={styles.productPage}>
            <section className={styles.productBanner}>
                <div className={styles.productBannerText}>
                    <h1 className={styles.productTitle}>
                        {product.productTitle}
                    </h1>
                    <p className={styles.productSubtitle}>
                        {product.productSubtitle}
                    </p>
                </div>

                <div className={"btnContainer"}>
                    <Link href={"#"} className="cta ctaCyberInvert">
                        Découvrir
                    </Link>
                    <Link href={"#"} className="cta ctaCyber">
                        Configurer
                    </Link>
                </div>
            </section>
            <section className={styles.product}>
                <div className={styles.productTop}>
                    <Image
                        src={product.productImg[0]}
                        width={450}
                        height={450}
                        alt="Picture of the author"
                    />
                    <div className={styles.productPresText}>
                        <div className={styles.productPresTextTop}>
                            <h2 className={styles.productPresTextTitle}>
                                {product.productTitle}
                            </h2>
                            <p className={styles.productPresTextSubtitle}>
                                {product.productSubtitle2}
                            </p>
                        </div>
                        <p className={styles.productPresDesc}>
                            Le HorizGuard Basic est la solution idéale pour les
                            petites entreprises et les particuliers souhaitant
                            sécuriser leur réseau sans compromis. <br /> Conçu
                            pour être performant et simple à gérer, il offre une
                            protection robuste contre les menaces en ligne, tout
                            en restant abordable et facile à utiliser.
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
                        <div className={"btnContainer"}>
                            <Link className="cta ctaCyber" href={"#"}>
                                Fiche produit{" "}
                            </Link>
                            <Link className="cta ctaCyber" href={"#"}>
                                Configurer{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productMid}>
                    <div className={styles.productMidText}>
                        <h2 className={styles.midTextTitle}>
                            Pourquoi choisir l'HorizGuard Basic ?{" "}
                        </h2>
                        <p className={styles.midTextContent}>
                            Le HorizGuard Basic ne se contente pas de protéger
                            votre réseau, il le transforme en une forteresse
                            numérique, tout en restant accessible et pratique.
                        </p>
                    </div>
                    <ul className={styles.productPros}>
                        <li className={styles.productProsCard}>
                            <p className={styles.productProsCardTitle}>
                                Sécurité Inégalée
                            </p>
                            <p className={styles.productProsCardText}>
                                Protégez vos données sensibles efficacement.{" "}
                                <br></br>
                                Repousse les cybermenaces les plus avancées.
                            </p>
                        </li>
                        <li className={styles.productProsCard}>
                            <p className={styles.productProsCardTitle}>
                                Facilité de Configuration
                            </p>
                            <p className={styles.productProsCardText}>
                                Configurez et gérez facilement. <br></br>
                                Interface intuitive et rapide.
                            </p>
                        </li>
                        <li className={styles.productProsCard}>
                            <p className={styles.productProsCardTitle}>
                                Performances Optimales
                            </p>
                            <p className={styles.productProsCardText}>
                                Performance réseau sans compromis.<br></br>{" "}
                                Efficacité maximale garantie.
                            </p>
                        </li>
                        <li className={styles.productProsCard}>
                            <p className={styles.productProsCardTitle}>
                                Système d'Exploitation pfSense
                            </p>
                            <p className={styles.productProsCardText}>
                                Basé sur pfSense reconnu mondialement.<br></br>{" "}
                                Fiable, flexible et sécurisé.
                            </p>
                        </li>
                    </ul>
                    <div className={styles.productCarac}>
                        <h2 className={styles.productCaracTitle}>
                            Caractéristiques Techniques
                        </h2>
                        <ul className={styles.productCaracList}>
                            {product.productCarac.map((p) => (
                                <li
                                    className={styles.productCaracListItem}
                                    key={p.id}
                                >
                                    <span className={styles.productSpanTitle}>
                                        {p.label}
                                    </span>{" "}
                                    {p.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.productConfig}>
                <div className={styles.productConfigText}>
                    <h2 className={styles.productConfigTitle}>
                        {product.productTitle}
                    </h2>
                    <p>A partir de ...</p>
                </div>
                <div className={styles.productChoicer}>
                    <div className={styles.productChoicerCarousel}>
                        <div className={styles.productCarousel}>
                            <Image
                                src={product.productImg[image]}
                                width={300}
                                height={300}
                                alt="test"
                            />
                        </div>
                        <div className={styles.productChoicerCarouselDot}>
                            <div
                                className="dot"
                                onClick={() =>
                                    image != 0
                                        ? setImage(image - 1)
                                        : setImage(5)
                                }
                            ></div>
                            <div className="dot"></div>
                            <div
                                className="dot"
                                onClick={() =>
                                    image != 5
                                        ? setImage(image + 1)
                                        : setImage(0)
                                }
                            ></div>
                        </div>
                    </div>
                    <Choicer></Choicer>
                </div>
            </section>
        </main>
    );
};

export default Product;
