"use client";
import styles from "@/styles/pages/services.module.scss";
import Image from "next/image";
import formsStore from "@/stores/formStore";
import emailjs from "@emailjs/browser";

import { useState, useRef } from "react";

const nosServices = () => {
    const [formData, setFormData] = useState({
        userInfos: {
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            society: "",
            SIRET: "",
            message: "",
            selectedService: "",
        },
    });
    const [invalidFields, setInvalidFields] = useState({});
    const formLabels = formsStore((state) => state.formLabels);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            userInfos: { ...prevData.userInfos, [name]: value },
        }));
        // Reset invalid fields when the user starts typing
        setInvalidFields((prev) => ({ ...prev, [name]: false }));
    };

    const validateForm = () => {
        const errors = {};
        const { userInfos } = formData;

        // Exemple de validation : Vérifier que chaque champ requis est rempli
        if (!userInfos.firstName) errors.firstName = true;
        if (!userInfos.lastName) errors.lastName = true;
        if (!userInfos.email) errors.email = true;

        return errors;
    };

    const formRef = useRef(null); // Référence pour faire défiler jusqu'au formulaire

    const handleCardClick = (service) => {
        // Met à jour le service sélectionné
        setFormData((prevData) => ({
            ...prevData,
            userInfos: { ...prevData.userInfos, selectedService: service },
        }));
        // Fait défiler jusqu'au formulaire
        formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const newInvalidFields = validateForm();

        if (Object.keys(newInvalidFields).length > 0) {
            setInvalidFields(newInvalidFields);
            return; // Empêche l'envoi si les champs requis ne sont pas remplis ou invalides
        }

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE2_ID,
                {
                    ...formData.userInfos,

                    to_name: "Destinataire", // Remplace par le nom du destinataire
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(
                () => {
                    alert("Email envoyé avec succès !");
                    setFormData({
                        userInfos: {
                            firstName: "",
                            lastName: "",
                            email: "",
                            telephone: "",
                            society: "",
                            SIRET: "",
                            message: "",
                            selectedService: "",
                        },
                    });
                    setInvalidFields({}); // Réinitialiser les erreurs après l'envoi
                },
                (error) => {
                    console.error(error);
                    alert("Erreur lors de l'envoi.");
                }
            );
    };

    return (
        <main>
            <section className={styles.serviceBanner}>
                <h1 className={styles.bannerTitle}>Nos services</h1>
                <p className={styles.bannerText}>
                    Découvrez nos{" "}
                    <strong className="important"> services sur mesure </strong>
                    conçus pour propulser votre entreprise dans l'univers
                    numérique. De la création de
                    <strong className="important">
                        {" "}
                        sites web performantes{" "}
                    </strong>
                    à la
                    <strong className="important">
                        {" "}
                        cybersécurité avancée{" "}
                    </strong>
                    , en passant par une
                    <strong className="important">
                        {" "}
                        stratégie digitale innovante
                    </strong>
                    , nous vous aidons à
                    <strong className="important">
                        {" "}
                        booster votre présence en ligne{" "}
                    </strong>
                    tout en garantissant la
                    <strong className="important">
                        {" "}
                        sécurité de vos systèmes{" "}
                    </strong>
                    . Faites le choix d'une expertise qui vous accompagne à
                    chaque étape de votre croissance.
                </p>
            </section>
            <section id="web" className={styles.service}>
                <h2 className={styles.serviceTitle}>Web</h2>
                <div className={styles.bento}>
                    <div className={styles.bentoTop}>
                        <div className={styles.bentoCard}>
                            <Image
                                src={"/icon/icon-design-web.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
                            <h3
                                className={styles.bentoCardTitle}
                                onClick={() => handleCardClick("Site")}
                            >
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
                            <Image
                                src={"/icon/icon-making.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
                            <h3
                                className={styles.bentoCardTitle}
                                onClick={() => handleCardClick("Design")}
                            >
                                Design & Contenu
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
                            <Image
                                src={"/icon/icon-stonk.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
                            <h3
                                className={styles.bentoCardTitle}
                                onClick={() => handleCardClick("SEO")}
                            >
                                Montez en flèche sur Google
                            </h3>
                            <p className={styles.bentoCardText}>
                                Surclassez vos concurrents avec des stratégies
                                de SEO et SEA pointues, accroissant trafic et
                                conversions.
                            </p>
                        </div>
                        <div className={styles.bentoCard}>
                            <Image
                                src={"/icon/icon-strat-marketing.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
                            <h3
                                className={styles.bentoCardTitle}
                                onClick={() => handleCardClick("Marketing")}
                            >
                                Stratégie digitale globale
                            </h3>
                            <p className={styles.bentoCardText}>
                                Boostez votre présence en ligne avec des
                                campagnes digitales complètes : publicité en
                                ligne, email marketing, gestion des réseaux
                                sociaux et bien plus. Nous maximisons votre
                                impact digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.service}>
                <h2 className={styles.serviceTitle}>Cybersécurité</h2>
                {/* <div className={styles.productContainer}>
                    {products.map((p) => (
                        <div key={p.id} className={styles.productCard}>
                            <h3 className={styles.productTitle}>
                                {p.productTitle}
                            </h3>
                            <p className={styles.productSubtitle}>
                                {p.productSubtitle}
                            </p>
                            <Image
                                src={p.productImg[0]}
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                            <ul className={styles.productCarac}>
                                {p.productCarac.slice(0, 3).map((pCarac) => (
                                    <li
                                        key={pCarac.id}
                                        className={styles.productCaracItem}
                                    >
                                        {" "}
                                        <Image
                                            src={pCarac.icon}
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                        />
                                        <p
                                            className={
                                                styles.productCaracItemText
                                            }
                                        >
                                            {pCarac.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.productBtnContainer}>
                                <Link className={"cta ctaCyber"} href={p.slug}>
                                    Voir plus
                                </Link>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className={`${styles.bento} ${styles.bentoCyber}`}>
                    <div className={styles.bentoLeft}>
                        <div
                            className={styles.bentoCard}
                            onClick={() => handleCardClick("Infogérance")}
                        >
                            <Image
                                src={"/icon/icon-infogerance.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
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
                            <Image
                                src={"/icon/icon-pare-feu.svg"}
                                width={50}
                                height={50}
                                alt="tg"
                            />
                            <h3
                                className={styles.bentoCardTitle}
                                onClick={() => handleCardClick("Pare-feu")}
                            >
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
                                <Image
                                    src={"/icon/icon-audit.svg"}
                                    width={50}
                                    height={50}
                                    alt="tg"
                                />
                                <h3
                                    className={styles.bentoCardTitle}
                                    onClick={() => handleCardClick("Audit")}
                                >
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
                                <Image
                                    src={"/icon/icon-vpn.svg"}
                                    width={50}
                                    height={50}
                                    alt="tg"
                                />
                                <h3
                                    className={styles.bentoCardTitle}
                                    onClick={() => handleCardClick("VPN")}
                                >
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

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className={styles.serviceForm}
            >
                {formLabels.map((label) => (
                    <div key={label.id} className={styles.inputLab}>
                        <label htmlFor={label.name}>{label.infos}</label>
                        <input
                            id={label.name}
                            type={label.type}
                            name={label.name} // Cela doit correspondre aux clés dans userInfos
                            placeholder={label.placeholder}
                            className={`${
                                invalidFields[label.name]
                                    ? styles.inputError
                                    : styles.input
                            }`}
                            value={formData.userInfos[label.name]}
                            onChange={handleChange}
                            required={label.required}
                        />
                    </div>
                ))}

                <div className={styles.inputLab}>
                    <label htmlFor="selectedService">Service</label>
                    <select
                        name="selectedService"
                        id="service-select"
                        value={formData.userInfos.selectedService}
                        onChange={handleChange}
                        className={`${styles.input} ${
                            invalidFields.selectedService
                                ? styles.inputError
                                : ""
                        }`}
                    >
                        <option value="">-- Choisissez un service --</option>
                        <option value="Site">Site web sur mesure</option>
                        <option value="Design">Design & Contenu</option>
                        <option value="SEO">SEO</option>
                        <option value="Marketing">
                            Stratégie digitale globale
                        </option>
                        <option value="Infogérance">Infogérance</option>
                        <option value="Pare-feu">Pare-feu</option>
                        <option value="Audit">Audit</option>
                        <option value="VPN">VPN</option>
                    </select>
                </div>

                <div className={styles.inputLab}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Entrez votre message"
                        className={`${styles.input} ${
                            invalidFields.message ? styles.inputError : ""
                        }`}
                        value={formData.userInfos.message}
                        onChange={handleChange}
                        style={{ resize: "none" }}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Envoyer
                </button>
            </form>
        </main>
    );
};

export default nosServices;
