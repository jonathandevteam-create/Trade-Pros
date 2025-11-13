"use client";

import React, { useState, useEffect } from "react";
import { Header, Footer, InputDemo, TextareaDemo, ButtonDemo, FrameQuadrates } from "@/components/index";
import useAlert from "@/hooks/alert/useAlert";
import { useGlobalContext } from "@/context";
import localData from "@/localData";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const { authorImage, van1Image, van2Image, coupeImage, doorImage } = localData.images;
const { screwDriverIcon, woodChiselIcon, manStandingIcon, repairManIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <ShowcaseSection />
      <HomeSolutionsSection />
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
    <section className="hero sm:min-h-[100vh] pt-[100px]! flex bg-[rgb(51,51,51)] relative" id="contact">
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

const ShowcaseSection = () => {
  return (
    <section className="showcase ">
      <div className="container">
        <h2 className="text-2xl sm:text-4xl text-primary mb-4 border-primary  text-center">Kitchen & Bathroom Remodels</h2>
        <p className="text-sm   max-w-[700px] mb-10 text-center mx-auto">
          Redesigning and upgrading spaces with custom layouts, cabinetry, fixtures, and finishes to enhance functionality,
          comfort, and style.
        </p>

        <div className="showcase-wrapper grid gap-x-5 gap-y-5 md:grid-cols-2 mb-[1rem]">
          <div className="col border-1 border-primary/30  py-7 px-5">
            <div className="showcase-image-wrapper relative w-full h-0 pt-[56.25%]">
              <Image fill src={van1Image} alt="van design" />
            </div>
          </div>

          <div className="col border-1 border-primary/30  py-7 px-5">
            <div className="showcase-image-wrapper relative w-full h-0 pt-[56.25%]">
              <Image fill src={van2Image} alt="van design" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeSolutionsSection = () => {
  return (
    <section className="home-solutions bg-primary/3">
      <div className="container">
        <div className="home-solutions-wrapper grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="col">
            <div className="row mb-10">
              <h4 className="text-primary mb-4">Ring Camera Installation</h4>
              <ul>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Indoor and outdoor cameras
                </li>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Proper positioning for maximum security
                </li>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Wi-Fi setup and app configuration
                </li>
              </ul>
            </div>

            <div className="row mb-10">
              <h4 className="text-primary mb-4">Keypad & Smart Lock Installation</h4>
              <ul>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Door keypads and smart locks
                </li>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Secure mounting and programming
                </li>
                <li className="text-sm font-light flex items-center gap-3 mb-0">
                  <span className="text-primary text-2xl">•</span>
                  Integration with your Ring or home automation system
                </li>
              </ul>
            </div>
          </div>

          <div className="col relative sm:pt-[80%] sm:h-0">
            <div className="home-solutions-image relative sm:absolute sm:top-0 sm:w-[60%] sm:right-0 sm:h-0 pt-[100%] sm:pt-[60%] sm:border-2 border-primary mb-[2rem] sm:mb-0">
              <Image src={doorImage} fill={true} className="sm:m-3 object-cover" alt="home solutions" />
            </div>
            <div className="home-solutions-image relative sm:absolute sm:bottom-0 sm:w-[50%] sm:h-0 pt-[70%] sm:pt-[50%] sm:border-2 border-primary">
              <Image src={coupeImage} fill={true} className="sm:m-3 object-cover" alt="home solutions" />
              <p className="text-xs italic mt-10 text-white bg-primary/80 p-3 mx-3 sm:-left-8 max-w-[500px] absolute z-3 bottom-5">
                <strong>Van Conversion & Design: </strong>
                Transforming a standard van into a functional or livable space with custom interiors—adding beds, seating,
                storage, and built-in furniture for work or recreation.
              </p>
            </div>
          </div>
        </div>
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
