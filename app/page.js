"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/home.module.scss";
import Carousel from "@/components/Carousel";
import presCardStore from "@/stores/presCardStore";

export default function Home() {
    const cards = presCardStore((state) => state.cards);
    return (
        <main className={styles.main}>
            <Carousel></Carousel>

            <section className={styles.interlude}>
                <div className={styles.interludeText}>
                    <h2 className={styles.interludeTitle}>
                        Optimisez vos infrastructures avec des solutions
                        personnalisées
                    </h2>
                    <p className={styles.interludeDescription}>
                        <strong className="important">Chez MMI Horizon</strong>,
                        nous combinons{" "}
                        <strong className="important">
                            expertise technique
                        </strong>{" "}
                        et{" "}
                        <strong className="important">
                            conseil stratégique
                        </strong>{" "}
                        pour vous accompagner à chaque étape. Nous proposons des{" "}
                        <strong className="important">
                            solutions sur-mesure
                        </strong>{" "}
                        en{" "}
                        <strong className="importantWeb">
                            {" "}
                            web & marketing digital
                        </strong>
                        ,{" "}
                        <strong className="importantCyber">
                            cybersécurité
                        </strong>{" "}
                        et{" "}
                        <strong className="importantElectronics">
                            électronique
                        </strong>
                        . Nos services renforcent votre sécurité, améliorent
                        votre
                        <strong className="important">
                            {" "}
                            présence en ligne
                        </strong>{" "}
                        et soutiennent la{" "}
                        <strong className="important">
                            croissance de votre entreprise
                        </strong>{" "}
                        grâce à une approche personnalisée.
                    </p>
                    <Link href={"#"} className="cta ctaCyber">
                        Découvrez nos services
                    </Link>
                </div>
                <div className={styles.interludeImage}></div>
            </section>
            <section className={styles.presContainer}>
                <ul className={styles.pres}>
                    {cards.map((card) => (
                        <li key={card.id} className={styles.presCard}>
                            <div className={styles.presCardIcon}>
                                <Image src={card.icon} width={50} height={50} />
                            </div>
                            <h3 className={styles.presCardTitle}>
                                {card.title}
                            </h3>
                            <p
                                className={styles.presCardText}
                                dangerouslySetInnerHTML={{
                                    __html: card.text,
                                }}
                            ></p>
                            <Link
                                href={"#"}
                                className={`cta cta${card.ctaStyle}`}
                            >
                                {card.cta}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
