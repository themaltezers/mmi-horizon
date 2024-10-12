"use client";
import styles from "@/styles/components/carousel.module.scss";
import Link from "next/link";
import carouselStore from "@/stores/carouselStore";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
    const slides = carouselStore((state) => state.slides);
    const [slideActive, setSlideActive] = useState(0);

    return (
        <section className={styles.carousel}>
            <ul className={styles.slide}>
                {slides
                    .filter((slide) => slide.id == slideActive)
                    .map((slide) => (
                        <li key={slide.id} className={styles.slideContent}>
                            <h3 className={styles.slideTitle}>{slide.title}</h3>
                            <p className={styles.slideText}>{slide.text}</p>
                            <Link href={"#"}> {slide.cta}</Link>
                        </li>
                    ))}
            </ul>
            <div className={styles.carouselControls}>
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
            </div>
        </section>
    );
};

export default Carousel;
