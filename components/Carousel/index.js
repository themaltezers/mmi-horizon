"use client";
import styles from "@/styles/components/carousel.module.scss";
import Link from "next/link";
import carouselStore from "@/stores/carouselStore";
import { useState } from "react";
import Image from "next/image";

const Carousel = ({ isProduct, product }) => {
    const slides = isProduct
        ? product.images
        : carouselStore((state) => state.slides);
    const [slideActive, setSlideActive] = useState(0);

    return (
        <section
            className={isProduct ? styles.carouselProduct : styles.carousel}
        >
            {!isProduct && (
                <Image
                    className={styles.carouselBackground}
                    src="/img/bg/bg-banner-home.webp"
                    alt="test"
                    layout="fill" // Ceci permet de remplir le conteneur
                    objectFit="cover" // Ceci assure que l'image remplit le conteneur sans déformation
                    quality={100} // Optionnel : ajuste la qualité d'image
                />
            )}
            <ul className={isProduct ? styles.slideProduct : styles.slide}>
                {slides
                    .filter((slide) => slide.id == slideActive)
                    .map((slide) =>
                        isProduct ? (
                            <li key={slide.id} className={styles.slideProduct}>
                                <Image
                                    src={slide.src}
                                    width={300}
                                    height={300}
                                    alt={slide.alt}
                                />
                            </li>
                        ) : (
                            <li key={slide.id} className={styles.slideContent}>
                                <h3 className={styles.slideTitle}>
                                    {slide.title}
                                </h3>
                                <p className={styles.slideText}>{slide.text}</p>
                                <Link
                                    className={`cta ${slide.ctaStyle}`}
                                    href={"#"}
                                >
                                    {slide.cta}
                                </Link>
                            </li>
                        )
                    )}
            </ul>

            {isProduct ? (
                <div className={styles.carouselControls}>
                    {console.log(product.images[slideActive])}
                    {product.images.map((image) => (
                        <Image
                            key={image.id}
                            className={`${styles.carouselImageChange} ${
                                image.id === slideActive
                                    ? styles.carouselImageChangeActive
                                    : styles.carouselImageChange
                            }`}
                            src={image.src}
                            width={70}
                            height={70}
                            alt={image.alt}
                            onClick={() => setSlideActive(image.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.carouselControls}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.carouselControlsChange} ${
                                index === slideActive
                                    ? styles.carouselControlsChangeActive
                                    : ""
                            }`}
                            onClick={() => setSlideActive(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Carousel;
