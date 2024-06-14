"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("Message sent successfully!");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div
      className="text-white flex flex-col gap-6 lg:max-w-[60%] mx-auto"
      id="contact
      "
    >
      <div className="flex flex-col gap-4 items-center lg:max-w-[80%] text-xl mx-auto">
        <h2 className="shadow text-center uppercase text-3xl sm:text-5xl text-white drop-shadow-2xl">
          Contact us
        </h2>
        <h3
          className="text-center"
          style={{
            color: "#C9C9C9",
          }}
        >
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid w-full items-center gap-3 w-full">
          <Label htmlFor="nom" className="text-2xl">
            Nom
          </Label>
          <Input
            type="nom"
            id="nom"
            placeholder="Votre nom."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email" className="text-2xl">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Votre mail."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid w-full gap-3">
          <Label htmlFor="message" className="text-2xl">
            Votre message
          </Label>
          <Textarea
            placeholder="Dites nous tout."
            id="message"
            className="h-52"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="bg-white text-black mx-auto hover:bg-background hover:text-white border-solid border-white border-2"
        >
          Envoyer
        </Button>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1 h-[1px] bg-white" />
          <div>Social medias</div>
          <div className="flex-1 h-[1px] bg-white" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
