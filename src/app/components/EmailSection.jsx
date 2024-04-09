"use client"
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github } from 'lucide-react';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    setEmailValid(emailRegex.test(e.target.value))
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pt-20 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">
          Let&apos;s Connect
        </h5>
        <p className="mb-4 max-w-md">
          {/* {" "} */}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href="https://github.com/n1dll" target="_blank">
              <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </Button>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-lg mt-[5px]">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={`border-2 text-sm rounded-lg block w-full p-2.5 ${!emailValid ? 'border-red-500' : ''}`}
                placeholder="example@mail.com"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="border-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="about..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="let's talk ..."
              />
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={!emailValid}
              >
                Send Message
              </Button>
            </div>

          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
