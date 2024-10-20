"use client";
import { useState } from "react";
import Choicer from "@/components/Choicer";
import styles from "@/styles/pages/product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import servicesStore from "@/stores";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";

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

    return (
        <main className={styles.productPage}>
            <Banner product={product}></Banner>

            <section className={styles.product}>
                <div className={styles.productTop}>
                    <Image
                        src={product.images[0]}
                        width={450}
                        height={450}
                        alt="Picture of the author"
                    />
                    <div className={styles.productPresText}>
                        <div className={styles.productPresTextTop}>
                            <h2 className={styles.productPresTextTitle}>
                                {product.title}
                            </h2>
                            <p className={styles.productPresTextSubtitle}>
                                {product.subtitle2}
                            </p>
                        </div>
                        <p
                            className={styles.productPresDesc}
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        >
                            {/* {product.description} */}
                        </p>
                        <ul className={styles.productPresList}>
                            {product.listItem.map((list) => (
                                <li
                                    key={list.id}
                                    className={styles.productPresListItem}
                                >
                                    <span className="circle circleCyber"></span>
                                    {list.content}
                                </li>
                            ))}
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
                            Pourquoi choisir l'{product.title} ?{" "}
                        </h2>
                        <p
                            className={styles.midTextContent}
                            dangerouslySetInnerHTML={{
                                __html: product.answer,
                            }}
                        ></p>
                    </div>
                    <ul className={styles.productPros}>
                        {product.cards.map((card) => (
                            <li
                                key={card.id}
                                className={styles.productProsCard}
                            >
                                <Image
                                    className={styles.productProsIcon}
                                    src={card.icon}
                                    width={50}
                                    height={50}
                                    alt="e"
                                />
                                <p className={styles.productProsCardTitle}>
                                    {card.title}
                                </p>
                                <p className={styles.productProsCardText}>
                                    {card.content[0]} <br></br>
                                    {card.content[1]}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.productCarac}>
                        <h2 className={styles.productCaracTitle}>
                            Caractéristiques Techniques
                        </h2>
                        <ul className={styles.productCaracList}>
                            {product.caracs.map((p) => (
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
                        {product.title}
                    </h2>
                    <p>Je fais mon devis</p>
                </div>
                <div className={styles.productChoicer}>
                    {/* <div className={styles.productChoicerCarousel}>
                        <div className={styles.productCarousel}>
                            <Image
                                src={product.images[image]}
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
                    </div> */}
                    <Carousel isProduct={true} product={product}></Carousel>
                    <Choicer productName={product.title}></Choicer>
                </div>
            </section>
        </main>
    );
};

export default Product;
