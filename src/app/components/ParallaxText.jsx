"use client"

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import clsx from 'clsx';
import { wrap } from "@motionone/utils";
import { Plaster } from 'next/font/google'
import { Star } from 'lucide-react';


const plaster = Plaster({
  subsets: ['latin'],
  weight: '400',
})


function ParallaxText({ list, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden tracking-[-2px] whitespace-nowrap flex flex-nowrap m-0;">
      <motion.div className="font-semibold uppercase text-4xl items-center gap-2 md:text-5xl whitespace-nowrap flex flex-nowrap" style={{ x }}>
        {list.map((tech, index) => (
          <React.Fragment key={index}>
            <span className={clsx(`${plaster.className} block`, {
              'text-green-500': index % 2,
              // 'dark:text-red-500': index % 2,
            },)}>{tech}</span>

            <Star />
          </React.Fragment>
        ))}

      </motion.div>
    </div>
  );
}

export default ParallaxText

