"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <CardContainer className="w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>


        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgUrl}
            height={400}
            width={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full max-h-64 rounded-xl group-hover/card:shadow-xl object-contain object-top"
            alt="thumbnail"
          />

        </CardItem>

        <div className="flex items-center gap-2 mt-10">

          {gitUrl && <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={gitUrl} target="_blank">
              <CodeBracketIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </Button>}


          {previewUrl && <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={previewUrl}
              target="_blank">
              <EyeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </a>
          </Button>}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
