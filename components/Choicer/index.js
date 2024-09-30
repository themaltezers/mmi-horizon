"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Assurez-vous d'avoir installé emailjs
import { choiceForm } from "./db"; // Importez vos choix de db
import styles from "@/styles/components/choicer.module.scss";

const Choicer = () => {
    const [selectedChoices, setSelectedChoices] = useState([]);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    // Fonction pour gérer le changement de choix
    const handleChoiceChange = (cId, choice) => {
        // Vérifier si le choix est déjà sélectionné
        const choiceIndex = selectedChoices.findIndex(
            (selected) => selected.id === cId
        );

        if (choiceIndex > -1) {
            // Si le choix est déjà sélectionné, remplacer par le nouveau choix
            const updatedChoices = [...selectedChoices];
            updatedChoices[choiceIndex] = {
                id: cId,
                selector: choice.selector,
                price: choice.price,
            };
            setSelectedChoices(updatedChoices);
        } else {
            // Sinon, ajouter le nouveau choix
            setSelectedChoices([
                ...selectedChoices,
                { id: cId, selector: choice.selector, price: choice.price },
            ]);
        }
    };

    // Fonction pour envoyer l'email
    const sendEmail = (e) => {
        e.preventDefault();

        // Créer un message à partir des choix sélectionnés
        const choicesMessage = selectedChoices
            .map((choice) => `${choice.selector}`)
            .join("\n");

        // Préparer les paramètres à envoyer
        const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: choicesMessage,
            to_name: "Destinataire", // Remplace par le nom du destinataire
        };

        // Envoi de l'email
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Remplace par ton SERVICE_ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Remplace par ton TEMPLATE_ID
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Remplace par ton USER_ID
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    alert("Email envoyé avec succès !");
                    setSelectedChoices([]); // Réinitialiser les choix après l'envoi
                    setUserName(""); // Réinitialiser le nom
                    setUserEmail(""); // Réinitialiser l'email
                },
                (error) => {
                    console.log(error.text);
                    alert("Erreur lors de l'envoi.");
                }
            );
    };

    return (
        <form onSubmit={sendEmail} className={styles.choicer}>
            {choiceForm.map((c) => (
                <div key={c.id} className={styles.choice}>
                    <div className={styles.quoteContainer}>
                        <p className={styles.quote}>
                            <span className={styles.quoteColored}>
                                {c.name}
                            </span>
                            {c.q}
                        </p>
                    </div>
                    <ul className="choice">
                        {c.choice.map((choice) => (
                            <li
                                key={choice.id}
                                className={styles.choiceContainer}
                                onClick={() => handleChoiceChange(c.id, choice)}
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: selectedChoices.find(
                                        (selected) =>
                                            selected.id === c.id &&
                                            selected.selector ===
                                                choice.selector
                                    )
                                        ? "#0e78f9"
                                        : "#1c1f2e", // Indiquer le choix sélectionné
                                }}
                            >
                                <p className={styles.choiceSelector}>
                                    {choice.selector}
                                </p>
                                {/* <p>{choice.price}</p> */}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* Champs pour le nom et l'email de l'utilisateur */}
            <div className={styles.inputContainer}>
                <div className={styles.inputLab}>
                    {" "}
                    <label>Nom</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputLab}>
                    {" "}
                    <label>Email</label>
                    <input
                        type="email"
                        className={styles.input}
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <button type="submit" className={styles.submitButton}>
                Envoyer mon devis
            </button>
        </form>
    );
};

export default Choicer;
