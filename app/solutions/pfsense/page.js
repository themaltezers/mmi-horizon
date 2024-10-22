"use client";
import styles from "@/styles/pages/solutions.module.scss";
import Image from "next/image";
import solutionsStore from "@/stores/solutionsStore";
import { useParams } from "next/navigation";
import servicesStore from "@/stores";
import Link from "next/link";

const Solution = () => {
    const infos = solutionsStore((state) => state.infos);
    const slug = useParams();
    const products = servicesStore((state) => state.products);
    return (
        <main>
            <section className={styles.solutionBanner}>
                <h1 className={styles.solutionTitle}>pfSense & HorizGuard</h1>
                <p className={styles.solutionCatchprase}>
                    {" "}
                    Sécurisez votre réseau efficacement
                </p>
            </section>
            <section className={styles.solutionPresentation}>
                <h2 className={styles.solutionPresentationTitle}>
                    pfSense Plus® : la solution open-ource de référence pour
                    sécuriser vos réseaux et cloud
                </h2>
                <p className={styles.solutionPresentationText}>
                    En tant que réponse optimale aux
                    <strong className="important"> besoins en pare-feu</strong>,
                    <strong className="important"> routage</strong> et{" "}
                    <strong className="important"> VPN</strong> des entreprises,{" "}
                    <strong className="important"> pfSense Plus®</strong>{" "}
                    s'affirme comme la solution open source essentielle pour
                    garantir la
                    <strong className="important"> sécurité</strong> de vos{" "}
                    <strong className="important"> réseaux</strong> et de votre{" "}
                    <strong className="important"> infrastructure cloud</strong>
                    . Avec ses fonctionnalités avancées, pfSense Plus® permet
                    non seulement de protéger vos données sensibles, mais aussi
                    d'optimiser la gestion de votre réseau. Adopter cette
                    solution, c’est choisir un{" "}
                    <strong className="important">pare-feu robuste</strong> et
                    un <strong className="important">système de routage</strong>{" "}
                    flexible, adapté aux défis actuels de cybersécurité. Assurez
                    la continuité de vos activités et la fiabilité de votre
                    infrastructure avec pfSense Plus®, la référence en matière
                    de <strong className="important">sécurité réseau</strong>.
                </p>
            </section>
            <section className={styles.function}>
                <h2 className={styles.functionTitle}>
                    <Image
                        src={"/icon/icon-config.svg"}
                        width={30}
                        height={30}
                        alt={"icon configuration"}
                    />
                    Fonctionnalités
                </h2>

                <div className={styles.functionContainer}>
                    {infos[0].list.map((info) => (
                        <ul className={styles.functionList} key={info.id}>
                            <p
                                className={styles.functionItemTitle}
                                dangerouslySetInnerHTML={{
                                    __html: info.title,
                                }}
                            ></p>
                            {info.items.map((item, index) => (
                                <li
                                    key={index}
                                    className={styles.functionItemContent}
                                    dangerouslySetInnerHTML={{
                                        __html: item,
                                    }}
                                ></li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className={styles.productContainer}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.productText}>
                                {" "}
                                <h3 className={styles.productTitle}>
                                    {product.title}
                                </h3>
                                <p className={styles.productSubtitle}>
                                    {product.subtitle}
                                </p>
                            </div>
                            <Image
                                src={product.images[0].src}
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                            <ul className={styles.productCarac}>
                                {product.caracs.slice(0, 3).map((carac) => (
                                    <li
                                        key={carac.id}
                                        className={styles.productCaracItem}
                                    >
                                        {" "}
                                        <Image
                                            src={carac.icon}
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                        />
                                        <p
                                            className={
                                                styles.productCaracItemText
                                            }
                                        >
                                            {carac.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.productBtnContainer}>
                                <Link
                                    className={"cta ctaCyber"}
                                    href={product.slug}
                                >
                                    Voir plus
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Solution;
