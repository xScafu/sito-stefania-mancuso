import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MainButton from "../buttons/MainButton";
import { useState } from "react";

export default function Form() {
  const formRef = useRef(null);
  const [message, setMessage] = useState(""); // Stato per i messaggi di successo/errore

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    // Usa EmailJS per inviare i dati
    emailjs
      .sendForm(
        "service_hx7991l",
        "template_tdaenrx",
        formRef.current, // Ref del form
        "vri7e3_B5RDCmyr3_"
      )
      .then(
        () => {
          setMessage(
            "Email inviata con successo! Grazie per avermi contattato!"
          );
          reset();
        },
        (error) => {
          setMessage("Errore nell'invio dell'email. Riprova.");
        }
      );
  };

  const inputEffects =
    "input py-2 pr-10 pl-2 md:w-3/4 md:text-lg dark:bg-darkPurple autofill:bg-darkPurple";

  return (
    <div className="flex flex-col items-center font-serif">
      <form
        ref={formRef}
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
        })}
        action=""
        method="post"
        className="flex flex-col text-bistre w-4/4 lg:w-3/4 items-center"
      >
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          placeholder="Your name here*"
          className={`${inputEffects}`}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert" className="text-bistre dark:text-wine xl:text-2xl">
            First name is required
          </p>
        )}
        <input
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
          type="text"
          placeholder="Your surname here*"
          className={`${inputEffects} mt-5`}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert" className="text-bistre dark:text-wine xl:text-2xl">
            Last name is required
          </p>
        )}
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          type="email"
          placeholder="Your e-mail here*"
          className={`${inputEffects} mt-5`}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="text-bistre dark:text-wine xl:text-2xl">
            Email is required
          </p>
        )}
        <textarea
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
          className="textarea xl:h-48 xl:w-[40rem] p-5 xl:text-xl mt-5 dark:bg-darkPurple dark:text-melon dark:font-medium"
          placeholder="Message*"
        ></textarea>
        {errors.message?.type === "required" && (
          <p role="alert" className="text-bistre dark:text-wine xl:text-2xl">
            A message is required
          </p>
        )}

        {message && (
          <p className="mt-3 text-center text-bistre dark:text-wine xl:text-2xl">
            {message}
          </p>
        )}

        <div className="mt-5">
          <MainButton>
            <input
              type="submit"
              value="Submit"
              className="px-5 py-2 cursor-pointer"
            />
          </MainButton>
        </div>
      </form>
    </div>
  );
}
