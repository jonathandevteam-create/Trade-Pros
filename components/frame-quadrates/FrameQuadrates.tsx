"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const FrameQuadrates = () => {
  const [inView1, setIsInView1] = useState(false);
  return (
    <motion.div
      className="box-frames absolute top-[17%] lg:top-[7%] right-0 lg:right-auto lg:left-[25%] w-[50%] h-0 pt-[50%] z-1"
      viewport={{ amount: 0.3 }}
      //   whileInView={() => setIsInView1(true)}
      onViewportEnter={() => setIsInView1(true)}
    >
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 1 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        } box-frame box-frame-top w-[15%] h-[15%] border border-primary/20 absolute top-0 left-[20%]`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 2 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-middle w-[15%] h-[15%] border border-primary/60 absolute top-[20%] left-[20%]`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 3 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-bottom w-[15%] h-[15%] border border-primary/30 absolute top-[40%] left-0`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 4 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-middle w-[15%] h-[15%] border-3 border-primary/50 absolute top-[20%] left-[40%]`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 5 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-middle w-[15%] h-[15%] border border-primary/40 absolute top-[40%] left-[60%]`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 6 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-middle w-[15%] h-[15%] border border-primary/30 absolute top-[40%] left-[80%]`}
      ></div>
      <div
        data-lazy={"fade"}
        style={{ transitionDelay: 7 * 0.1 + "s" }}
        className={`${
          inView1 ? "lazy-animate" : ""
        }  box-frame box-frame-middle w-[15%] h-[15%] border border-primary/20 absolute top-[60%] left-[80%]`}
      ></div>
    </motion.div>
  );
};

export default FrameQuadrates;
