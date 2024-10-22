import styles from "@/styles/pages/about.module.scss";
import Image from "next/image";
const About = () => {
    return (
        <main className={styles.about}>
            <div className={styles.aboutLogo}>
                <Image
                    src={"/new-logo.svg"}
                    width={500}
                    height={500}
                    alt="logo mmi"
                />
            </div>
            <div className={styles.aboutText}>
                <p className={styles.presText}>
                    Chez MMI Horizon, nous transformons la technologie en un
                    levier de réussite. Nous sommes une jeune startup dynamique,
                    animée par la passion de l'innovation et la volonté d'offrir
                    des solutions technologiques sur mesure. Que vous soyez une
                    entreprise cherchant à renforcer sa sécurité réseau ou un
                    professionnel du web souhaitant une présence en ligne
                    impactante, MMI Horizon est votre partenaire idéal.
                </p>
                <p className={styles.presText}>
                    {" "}
                    Notre expertise couvre un large spectre de services, allant
                    de la cybersécurité à la conception web, en passant par
                    l'optimisation de réseaux et la gestion de données. Avec une
                    équipe dédiée d'experts, nous apportons des solutions
                    complètes et personnalisées, adaptées aux besoins
                    spécifiques de chaque client. Nous croyons en l'importance
                    de la proximité avec nos clients, en combinant agilité,
                    créativité et technologie pour vous offrir un service
                    unique, capable de répondre aux défis technologiques les
                    plus complexes. Ensemble, atteignons de nouveaux horizons
                    avec des innovations qui propulsent votre activité vers
                    l'avant.
                </p>
                <p className={styles.presText}>
                    Notre savoir-faire s'étend sur un large éventail de
                    services, de la cybersécurité à la conception web, en
                    passant par l'optimisation des réseaux et la gestion des
                    données. Avec une équipe d'experts dédiée, nous vous offrons
                    des solutions complètes, taillées pour répondre à vos
                    besoins uniques.
                </p>
                <p className={styles.presText}>
                    Nous privilégions la proximité avec nos clients. Nous
                    allions agilité, créativité et expertise technologique pour
                    vous fournir un service distinctif, capable de relever les
                    défis les plus complexes. Ensemble, franchissons de nouveaux
                    horizons et faisons de l'innovation un levier pour votre
                    croissance.
                </p>
            </div>
        </main>
    );
};

export default About;
