"use client";

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Github } from 'lucide-react';


export default function HeaderRig() {

  return (
    <div className="flex gap-3 items-center py-[9px] px-4">
      <Button variant="outline" size="icon" className="rounded-full" asChild>
        <a href="https://github.com/n1dll" target="_blank">
          <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </a>
      </Button>
      <ModeToggle />
    </div>
  );
}
