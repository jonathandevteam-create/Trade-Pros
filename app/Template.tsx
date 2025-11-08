"use client";

import React, { useState, useEffect } from "react";
import { Header, Footer, InputDemo, TextareaDemo, ButtonDemo, FrameQuadrates } from "@/components/index";
import useAlert from "@/hooks/alert/useAlert";
import { useGlobalContext } from "@/context";
import localData from "@/localData";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const { craftmanImage, chiselImage } = localData.images;
const { screwDriverIcon, woodChiselIcon, manStandingIcon, repairManIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ReviewSection />
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
        <FrameQuadrates />
        <div className="hero-wrapper lg:flex lg:justify-between lg:items-center w-full relative z-10">
          <div className="hero-content max-w-[400px] mb-8 lg:mb-0">
            <h1 className="text-6xl text-primary">True Trade Pros</h1>
            <p className="hero-description text-white text-sm font-light mb-8">
              <strong className="font-semibold">True Trade Pros</strong>{" "}
              <span className="text-white/90">
                connects homeowners with independent, detail-oriented professionals who bring craftsmanship back to home
                renovation and remodel projects.
              </span>
            </p>
            <div className="[&>svg]:w-[150px] [&>svg]:h-[150px] [&>svg]:fill-[rgb(117,87,21)] text-primary">
              {/* <img className="max-w-[150px]" src={chiselImage} alt="" /> */}
              {woodChiselIcon}
            </div>
            {/* <Image width="4825" height="3225" src={contstructionHatImage} alt="" className=" mr-10 max-w-[200px] object-cover" /> */}
          </div>
          <div className="col  w-full lg:max-w-[500px]">
            <h2 className="text-white/40 mb-4 text-2xl font-semibold! font-poppins!">Get in touch!</h2>
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

const ServicesSection = () => {
  return (
    <section className="services lg:py-[10rem]!" id="services">
      <div className="container">
        <div className="card-group  flex flex-wrap justify-center gap-[50px]">
          <div className="card services-card sm:w-[calc(100%/2-50px/2)] lg:w-[calc(100%/3-(50px*2)/3)] rounded-[15px]">
            <div className="card-image w-[100px] h-[100px] object-contain border-2 border-primary mx-auto mb-5 [&>svg]:h-15 [&>svg]:fill-current text-primary flex items-center justify-center">
              {repairManIcon}
            </div>
            <h4 className="card-title text-center text-lg text-primary uppercase font-semibold! mb-2">
              Craftsmanship, Connected
            </h4>
            <p className="card-description text-center text-gray-600 text-[0.9rem] font-light leading-[1.6]">
              We connect homeowners with independent trade professionals who take pride in their work. Every pro in our network is
              committed to quality, but each operates independently — we simply help make the match.
            </p>
          </div>

          <div className="card services-card sm:w-[calc(100%/2-50px/2)] lg:w-[calc(100%/3-(50px*2)/3)] rounded-[15px] lg:order-3">
            <div className="card-image w-[100px] h-[100px] object-contain border-2 border-primary mx-auto mb-5 [&>svg]:h-15 [&>svg]:fill-current text-primary flex items-center justify-center">
              {manStandingIcon}
            </div>
            <h4 className="card-title text-center text-lg text-primary uppercase font-semibold! mb-2">
              A Network Built for Artisans
            </h4>
            <p className="card-description text-center text-gray-600 text-[0.9rem] font-light leading-[1.6]">
              We’re a platform for skilled tradespeople and homeowners who care about the details. Whether you're restoring a
              historic home or upgrading a modern space, we help you find a good professionals  who treat every project with care and
              precision.
            </p>
          </div>

          <div className="card services-card sm:w-[calc(100%/2-50px/2)] lg:w-[calc(100%/3-(50px*2)/3)] rounded-[15px] lg:order-2">
            <div className="card-image w-[100px] h-[100px] object-contain border-2 border-primary mx-auto mb-5 [&>svg]:h-15 [&>svg]:fill-current text-primary flex items-center justify-center">
              {screwDriverIcon}
            </div>
            <h4 className="card-title text-center text-lg text-primary uppercase font-semibold! mb-2">
              Crafted Spaces, Artisan Hands
            </h4>
            <p className="card-description text-center text-gray-600 text-[0.9rem] font-light leading-[1.6]">
              Whether you're restoring a historic home or upgrading a modern space, our platform helps connect you with
              independent trade pros who treat every project like a work of art. True Trade Pros was born from a desire to
              reconnect homeowners with craftspeople who value precision, pride, and timeless technique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowWeWorkSection = () => {
  return (
    <section className="how-we-work relative min-h-[100vh] pb-4!" id="process">
      <Image width="4825" height="3225" src={craftmanImage} alt="" className="absolute w-full h-full object-cover top-0 left-0" />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#333]/90"></div>
      <div className="container relative text-white">
        <div className="max-w-[500px] lg:ml-auto  lg:pl-5 lg:border-l border-primary relative mb-18">
          {/* <hr className="w-[2px] h-full bg-gradient-to-b from-primary to-transparent border-0 absolute left-0" /> */}

          <h2 className="about-title text-3xl font-bold mb-3 text-white/90">How We Work</h2>
          <p className="about-description  text-sm font-light max-w-[400px] text-neutral-400">
            True Trade Pros is a referral and coordination platform. We do not supervise, manage, or guarantee work — instead, we
            help facilitate clear communication and smooth project starts.
          </p>

          {/* <hr className="border-t border-primary my-10" /> */}
          <hr className="h-[2px] bg-gradient-to-r from-primary to-transparent border-0 my-10" />

          <h3 className="text-primary mb-4">Here’s how we support our network:</h3>
          <ul className="">
            <li className="text-sm font-light flex items-center gap-3 mb-4 text-white/80">
              <span className="text-primary text-2xl">•</span>
              <p>
                <strong className="font-semibold">Initial Coordination:</strong> We help homeowners and pros connect, clarify
                project needs, and schedule introductions.
              </p>
            </li>
            <li className="text-sm font-light flex items-center gap-3 mb-4 text-white/80">
              <span className="text-primary text-2xl">•</span>
              <p>
                <strong className="font-semibold">Communication Support:</strong> We assist with messaging and updates, but all
                work agreements are made directly between homeowner and pro.
              </p>
            </li>
            <li className="text-sm font-light flex items-center gap-3 mb-4 text-white/80">
              <span className="text-primary text-2xl">•</span>
              <p>
                <strong className="font-semibold">Independent Professionals:</strong>
                All trade pros operate as independent contractors. We do not employ, supervise, or direct their work.
              </p>
            </li>
            <li className="text-sm font-light flex items-center gap-3 mb-4 text-white/80">
              <span className="text-primary text-2xl">•</span>
              <p>
                <strong className="font-semibold">Completion-Based Referral Fee:</strong>
                We receive a referral fee from the trade pro only after a project is completed to mutual satisfaction.
              </p>
            </li>
          </ul>
        </div>
        <p className="italic text-sm font-light text-white/70 max-w-[500px]">
          Note: True Trade Pros is not a licensed contractor and does not perform or oversee renovation work. All professionals
          are independently responsible for their services, insurance, and compliance.
        </p>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section className="review bg-[rgb(51,51,51)] relative lg:pt-[10rem]!">
      <p className="absolute top-0 left-0 text-[10vw] font-baskervville text-black/30 leading-[10vw]">INSPIRATION</p>
      <div className="container">
        <div className="relative review-wrapper border border-primary max-w-[1000px] mx-auto px-[40px] pt-[40px] pb-[50px] lg:pb-[80px]">
          <h2 className="review-title text-3xl text-primary text-center mb-8 font-medium!">Pro Perspective</h2>
          <p className="review-description text-white/75 text-xs leading-[1.7] text-center max-w-[650px] mx-auto">
            “It’s great to be working with True Trade Pros — they’ve connected me with home projects like painting and tile work
            that really let me bring my skills to life. My dad was an Italian decorator, and growing up in Argentina I learned to
            blend old-world artisan handywork ethics with modern materials and methods. This platform respects that kind of
            craftsmanship, and that’s rare.”
          </p>

          <div className="absolute bg-[rgb(51,51,51)] bottom-0 translate-y-[50%] translate-x-[-50%] left-[50%] px-3 text-white text-xs font-medium tracking-wide font-baskervville">
            Dario Di Stefano
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
