"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "@/styles/components/choicer.module.scss";
import formsStore from "@/stores/formStore";

const Choicer = ({ productName }) => {
    const [formData, setFormData] = useState({
        userInfos: {
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            society: "",
            SIRET: "",
            message: "",
        },
        selectedChoices: [],
    });

    const [invalidFields, setInvalidFields] = useState({});
    const formLabels = formsStore((state) => state.formLabels);
    const choiceForm = formsStore((state) => state.choiceForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            userInfos: { ...prevData.userInfos, [name]: value },
        }));
        // Reset invalid fields when the user starts typing
        setInvalidFields((prev) => ({ ...prev, [name]: false }));
    };

    const handleChoiceChange = (cId, choice) => {
        setFormData((prevData) => {
            const isSelected = prevData.selectedChoices.some(
                (selected) =>
                    selected.id === cId && selected.selector === choice.selector
            );

            return {
                ...prevData,
                selectedChoices: isSelected
                    ? prevData.selectedChoices.filter(
                          (selected) =>
                              selected.id !== cId ||
                              selected.selector !== choice.selector
                      )
                    : [
                          ...prevData.selectedChoices,
                          {
                              id: cId,
                              selector: choice.selector,
                              price: choice.price,
                          },
                      ],
            };
        });
    };

    const validateForm = () => {
        const newInvalidFields = {};
        const { firstName, lastName, email } = formData.userInfos;

        // Vérification des champs requis
        if (!firstName) newInvalidFields.firstName = true;
        if (!lastName) newInvalidFields.lastName = true;

        // Vérification du format de l'email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) newInvalidFields.email = true;

        // Retourne les champs invalides
        return newInvalidFields;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const newInvalidFields = validateForm();

        if (Object.keys(newInvalidFields).length > 0) {
            setInvalidFields(newInvalidFields);
            return; // Empêche l'envoi si les champs requis ne sont pas remplis ou invalides
        }

        const choicesMessage = formData.selectedChoices
            .map((choice) => choice.selector)
            .join("\n");

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    ...formData.userInfos,
                    choices: choicesMessage,
                    productName,
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
                        },
                        selectedChoices: [],
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
                                className={
                                    formData.selectedChoices.some(
                                        (selected) =>
                                            selected.id === c.id &&
                                            selected.selector ===
                                                choice.selector
                                    )
                                        ? `${styles.choiceContainer} ${styles.choiceContainerSelected}`
                                        : styles.choiceContainer
                                }
                                onClick={() => handleChoiceChange(c.id, choice)}
                            >
                                <p className={styles.choiceSelector}>
                                    {choice.selector}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className={styles.inputContainer}>
                {formLabels.map((label) => (
                    <div key={label.id} className={styles.inputLab}>
                        <label htmlFor={label.name}>{label.infos}</label>
                        <input
                            id={label.name}
                            type={label.type}
                            name={label.name}
                            placeholder={label.placeholder}
                            className={` ${
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Entrez votre message (200 caractères max)"
                        className={`${styles.input} ${
                            invalidFields.message ? styles.inputError : ""
                        }`}
                        value={formData.userInfos.message}
                        onChange={handleChange}
                        maxLength={200}
                        rows={8}
                        style={{ resize: "none" }}
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
