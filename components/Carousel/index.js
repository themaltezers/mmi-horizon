"use client";
import styles from "@/styles/components/carousel.module.scss";
import Link from "next/link";
import carouselStore from "@/stores/carouselStore";
import { useState } from "react";
import Image from "next/image";

const Carousel = ({ isProduct, product }) => {
    const [image, setImage] = useState(0);
    const slides = carouselStore((state) => state.slides);
    const [slideActive, setSlideActive] = useState(0);
    return (
        <section
            className={isProduct ? styles.carouselProduct : styles.carousel}
        >
            <ul className={isProduct ? styles.slideProduct : styles.slide}>
                {slides
                    .filter((slide) => slide.id == slideActive)
                    .map((slide) =>
                        isProduct ? (
                            <li key={slide.id} className={styles.slideProduct}>
                                <Image
                                    src={product.images[slideActive]}
                                    width={300}
                                    height={300}
                                    alt="test"
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
                                    {" "}
                                    {slide.cta}
                                </Link>
                            </li>
                        )
                    )}
            </ul>
            {/* <div className={styles.carouselControls}>
                <Image
                    className="prev"
                    src={"/icon/icon-prev-btn.svg"}
                    width={40}
                    height={40}
                    alt="test"
                    onClick={() =>
                        slideActive != 0
                            ? setSlideActive(slideActive - 1)
                            : setSlideActive(3)
                    }
                />

                <div className="slideActive"></div>
                <Image
                    className="next"
                    src={"/icon/icon-next-btn.svg"}
                    width={40}
                    height={40}
                    alt="test"
                    onClick={() =>
                        slideActive != 3
                            ? setSlideActive(slideActive + 1)
                            : setSlideActive(0)
                    }
                />
            </div> */}

            {isProduct ? (
                <div className={styles.carouselControls}>
                    {product.images.map((image, index) => (
                        <Image
                            key={index}
                            className={`${styles.carouselImageChange} ${
                                index === slideActive
                                    ? styles.carouselImageChangeActive
                                    : styles.carouselImageChange
                            }`}
                            src={image}
                            width={70}
                            height={70}
                            alt="tt"
                            onClick={() => setSlideActive(index)}
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
