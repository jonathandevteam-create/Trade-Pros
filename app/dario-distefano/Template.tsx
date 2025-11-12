"use client";

import React, { useState, useEffect } from "react";
import { Header, Footer, InputDemo, TextareaDemo, ButtonDemo, FrameQuadrates } from "@/components/index";
import useAlert from "@/hooks/alert/useAlert";
import { useGlobalContext } from "@/context";
import localData from "@/localData";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const { authorImage } = localData.images;
const { screwDriverIcon, woodChiselIcon, manStandingIcon, repairManIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="home-page">
      <HeroSection />
      {/* <ReviewSection /> */}
    </main>
  );
};

const HeroSection = () => {
  const [state, setState] = useState({
    name: "",
    submitted_email: "",
    phone: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { sendEmail } = useGlobalContext();

  return (
    <section className="hero sm:min-h-[100vh] pt-[100px]! flex bg-[rgb(51,51,51)] relative" id="hero">
      <div className="container  flex-1 flex items-center justify-center relative">
        <div className="hero-wrapper flex flex-col lg:flex-row lg:justify-between lg:items-start   w-full relative z-10 border-y-2 border-primary py-8 gap-x-10 gap-y-15">
          <div className="hero-content max-w-[550px] mb-8 lg:mb-0">
            <h1 className="text-6xl text-primary border-b-2 inline-block pb-10 mb-10! border-primary">Dario Di Stefano</h1>
            <p className="hero-description text-white/90 leading-[1.6] text-sm font-light mb-8 tracking-wide">
              Dario brings a unique artistic vision to the Asheville area, blending generations of handyman craftsmanship with
              contemporary design. The son of an Italian decorator, Dario grew up in Argentina immersed in the traditions of
              old-world artisan techniques. From an early age, he learned the value of meticulous workmanship and attention to
              detail, skills he now combines with modern materials and methods to create exceptional tile and painting projects.
              His distinctive approach has quickly earned him glowing reviews, marking him as a rising talent in the local design
              and renovation scene.
            </p>
            <div className="max-w-[300px]">
              <div className="hero-image-wrapper relative w-full h-0 pt-[100%] border-2 border-primary">
                <Image src={authorImage} fill={true} className="" alt="Dario Di Stefano" />
              </div>
            </div>
          </div>

          <div className="col lg:border-l-2 lg:border-primary lg:pl-10  w-full lg:max-w-[500px]">
            <h2 className="text-white/40 mb-4 text-2xl font-semibold! font-poppins!">Connect with Dario!</h2>
            <form
              className=" text-left"
              id="contact-form-2 "
              action="#/"
              method="POST"
              onSubmit={(e) => {
                // EXTRA start
                const form = e.target as any;

                const name = form.name?.value?.trim();
                const submittedEmail = form.submitted_email?.value?.trim();
                const phone = form.phone?.value?.trim();
                const description = form.description?.value?.trim();
                const image = form.image?.defaultValue;

                const CONTENT =
                  (name ? `<p><strong>Name</strong>: ${name}</p>` : "") +
                  (submittedEmail ? `<p><strong>Email</strong>: ${submittedEmail}</p>` : "") +
                  (phone ? `<p><strong>Phone</strong>: ${phone}</p>` : "") +
                  (description ? `<p><strong>Description</strong>: ${description}</p>` : "") +
                  (image ? `<img src="${image}" width='90' height='90' />` : "");
                form.CONTENT.value = CONTENT;
                // EXTRA end

                sendEmail({
                  event: e,
                  service: "service_m0znoir",
                  template: "template_u1lzg8d",
                  form: e.target,
                  public_key: "XROQkLsbKgfMPUjh6",
                  setIsLoading: setIsLoading,
                });
              }}
            >
              <InputDemo
                placeholder="Jane"
                className="mb-5 [&>label]:text-white"
                inputClassName="py-[1.2rem] rounded-[0] text-white/60 text-[1rem]! py-6 bg-[#222] border-none ring ring-1 ring-black/40 focus:ring-2! focus:ring-primary!"
                name="name"
                type="text"
                // label={
                //   <div className="flex gap-[1px]">
                //     Your Name<div className="text-black font-lora leading-1">*</div>
                //   </div>
                // }
                required={true}
                value={state.name}
                callback={(e) => handleOnChange(e)}
              />
              <InputDemo
                placeholder="jane@company.com"
                className="mb-5 [&>label]:text-white"
                inputClassName="py-[1.2rem] rounded-[0] text-white/60 text-[1rem]! py-6 bg-[#222] border-none ring ring-1 ring-black/40 focus:ring-2! focus:ring-primary!"
                name="submitted_email"
                type="text"
                // label={
                //   <div className="flex gap-[1px]">
                //     Your Email<div className="text-black font-lora leading-1">*</div>
                //   </div>
                // }
                required={true}
                value={state.submitted_email}
                callback={(e) => handleOnChange(e)}
              />
              <InputDemo
                placeholder="‪(999) 999-9999"
                className="mb-5 [&>label]:text-white"
                inputClassName="py-[1.2rem] rounded-[0] text-white/60 text-[1rem]! py-6 bg-[#222] border-none ring ring-1 ring-black/40 focus:ring-2! focus:ring-primary!"
                name="phone"
                type="tel"
                // label="Your Phone"
                value={state.phone}
                callback={(e) => handleOnChange(e)}
              />

              <TextareaDemo
                // label="Describe your project"
                placeholder="Describe your project"
                className="mb-5 [&>label]:text-white"
                textareaClassName="rounded-none py-[0.5rem] min-h-[100px] text-white/60 text-[1rem]! py-2 bg-[#222] border-none ring ring-1 ring-black/40 focus:ring-2! focus:ring-primary!"
                name="description"
                type="text"
                // required={true}
                value={state.description}
                callback={(e) => handleOnChange(e)}
              />

              <input type="text" name="image" defaultValue={`${siteUrl}/assets/images/logo.webp`} className="hidden" />
              <input type="text" name="CONTENT" className="hidden" />
              <input type="text" name="to_email" defaultValue="wjonpost@gmail.com" className="hidden" />
              <ButtonDemo
                disabled={isLoading}
                text="SUBMIT"
                className="text-white/60 tracking-wider text-lg py-6 w-full bg-[#222] hover:bg-black/30 rounded-none border-none ring-1 ring-black/40 focus:ring-2! focus:ring-primary!"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section className="review bg-[rgb(51,51,51)] relative lg:pt-[10rem]!">
      <div className="container">
        <h2 className="review-title text-3xl text-primary text-center mb-8 font-medium!">Pro Perspective</h2>
      </div>
    </section>
  );
};

// const AboutSection = () => {
//   return (
//     <section className="about">
//       <div className="container">
//         <h2 className="about-title text-3xl font-bold mb-3">About Section</h2>
//         <p className="about-description ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, explicabo!</p>
//       </div>
//     </section>
//   );
// };

export default Template;
