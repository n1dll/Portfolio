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
import { Rubik_Spray_Paint } from 'next/font/google'
import { Star } from 'lucide-react';


const rubik = Rubik_Spray_Paint({
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
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
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
      <motion.div className="font-semibold text-slate-700 uppercase text-5xl md:text-6xl flex items-center gap-2 whitespace-nowrap flex-nowrap;" style={{ x }}>
        {list.map((tech, index) => (
          <React.Fragment key={index}>
            <span className={clsx(`${rubik.className} block`, {
              // 'text-primary-foreground': index % 4,
              // 'text-ring': index % 2,
            },)}>{tech}</span>

            <Star className="text-white" />
          </React.Fragment>
        ))}

      </motion.div>
    </div>
  );
}

export default ParallaxText

