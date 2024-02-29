"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const HeroSection = () => {
  return (
    <section className="my-20">
      <div className="flex justify-center gap-20">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
            {`Hello, i'm`}
          </h1>
          <h2 className="mb-4 sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            Nikolay Georgiev
          </h2>
          <p className="sm:text-lg mb-6">
            Web Developer
          </p>

          <div className="flex gap-2">
            <Button asChild>
              <Link
                href="/#contact"
              >
                Hire Me
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link
                href="/assets/Resume.pdf"
                target="_blank"
              >
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <Avatar className="bg-[rgb(158,158,158)] h-[300px] w-[300px]">
          <AvatarImage src="/images/hero-image1-remove.jpg" className="object-top mx-5 pointer-events-none" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </section >
  );
};

export default HeroSection;
