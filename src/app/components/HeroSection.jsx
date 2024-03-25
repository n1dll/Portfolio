"use client";
import React from "react";
import Link from "next/link";
import { Link as ReactLink } from "react-scroll";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const HeroSection = () => {
  return (
    <section className="py-20" id="home">
      <div className="flex flex-col md:flex-row justify-center gap-20">
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
              <ReactLink
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer"
              >
                Hire Me
              </ReactLink>
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

        <Avatar className="bg-[rgb(158,158,158)] h-[260px] w-[260px]">
          <AvatarImage src="/images/hero-image.jpg" className="object-top mx-5 pointer-events-none" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </section >
  );
};

export default HeroSection;
