"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const isValidEmail = emailInput.includes("@") && emailInput.length > 0;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const [successMail, setSuccessMail] = useState(null);
  const form = useRef();

  function handleChangeName(e) {
    setInputNameValue(e.target.value);
    setSuccessMail(null);
  }
  function handleEmailChange(e) {
    setEmailInput(e.target.value);
    setSuccessMail(null);
  }
  function handleMessageChange(e) {
    setMessageInput(e.target.value);
    setSuccessMail(null);
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (response) => {
        console.log("success!", response);
        setMessageInput("");
        setEmailInput("");
        setInputNameValue("");
        setSuccessMail(true);
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setSuccessMail(false);
      }
    );
  }
  return (
    <div className="h-full flex flex-col justify-between items-center gap-10">
      {/* TITLE */}
      <div>
        <h1
          className="text-white font-bold text-4xl"
          style={{
            textShadow: "0 0 10px #FFFFFF",
          }}
        >
          Contatti
        </h1>
        <h3 className="text-white font-semibold text-2xl">
          Puoi lasciare un messaggio, verrai presto ricontattato
        </h3>
      </div>
      {/* FORM */}
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="shadow-neonSky40 min-h-[500px] md:min-h-[700px] w-4/5 md:w-3/5 bg-sky-700 bg-opacity-75 rounded-lg flex flex-col justify-evenly items-center gap-4"
      >
        {/* NAME */}
        <div className="flex flex-col w-4/5 items-start">
          <label className="font-semibold uppercase text-white" htmlFor="nome">
            Nome
          </label>
          <input
            placeholder="Scrivi il tuo nome"
            className={`ring-1 rounded-md w-full p-1 ml-3 ${
              inputNameValue && "border-2 border-green-500"
            }`}
            type="text"
            id="nome"
            name="nome"
            onChange={handleChangeName}
            required
          />
        </div>
        {/* EMAIL */}
        <div className="flex flex-col w-4/5 items-start">
          <label className="font-semibold uppercase text-white" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Scrivi la tua mail"
            className={`ring-1 rounded-md w-full p-1 ml-3 ${
              isValidEmail && "border-2 border-green-500"
            }`}
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
        </div>
        {/* MESSAGE */}
        <div className="flex flex-col w-4/5 items-start">
          <label
            className="font-semibold uppercase text-white"
            htmlFor="message"
          >
            Messaggio
          </label>
          <textarea
            placeholder="Scrivi il tuo messaggio"
            className="ring-1 rounded-md w-full p-1 ml-3"
            name="message"
            id="message"
            rows="7"
            onChange={handleMessageChange}
          ></textarea>
        </div>
        {/* CONFIRM MESSAGE */}
        <div className="">
          {successMail == true && (
            <div className="text-green-600">
              Messaggio inviato correttamente!
            </div>
          )}
          {successMail == false && (
            <div className="text-red-600">Messaggio non inviato!</div>
          )}
        </div>
        {/* SUBMIT BUTTON */}
        <div>
          <button
            className="p-3 bg-midnight md:hover:bg-white md:hover:ring-1 md:hover:ring-white active:bg-white active:text-midnight text-white md:hover:text-midnight font-semibold rounded-md md:hover:shadow-neonWhite20"
            type="submit"
          >
            Invia Messaggio
          </button>
        </div>
      </form>
    </div>
  );
}
