"use client";

import Image from "next/image";

import TicketSVG from "../../../public/images/pattern-ticket.svg";
import LogoSVG from "../../../public/images/logo-mark.svg";
import GithubSVG from "../../../public/images/icon-github.svg";
import { useTicketStore } from "@/hooks/ticket";
import { useEffect } from "react";

export default function Ticket() {
  const data = useTicketStore((s) => s.ticket);

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="w-full px-2 flex justify-center items-center">
      <div
        className="flex flex-col 
      justify-center items-center max-w-[500px] px-2"
      >
        <h1
          className="text-center font-bold text-c-neutral-0 mt-13 mb-7
          text-lg mobile-sm:text-xl mobile:text-2xl tablet:text-3xl
          "
        >
          Congrats,{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent
          from-c-orange-500  to-c-neutral-0"
          >
            {data?.fullName}!
          </span>{" "}
          Your ticket is ready.
        </h1>

        <p
          className="text-center text-c-neutral-300 
        text-sm mobile-sm:text-base mobile:text-lg tablet:text-xl"
        >
          We&apos;ve emailed your ticket to{" "}
          <span
            className="
          text-c-orange-500"
          >
            {data?.email}
          </span>{" "}
          and will send update in the run up to the event.
        </p>

        <div className="mt-20 w-full h-fit aspect-[600/280] relative">
          <TicketSVG className="w-full h-auto absolute inset-0" />

          <div className="flex w-full h-full py-3 pl-3">
            <div className="flex flex-col w-[83%] justify-between h-full">
              <div className="flex justify-start gap-2">
                <LogoSVG
                  className="pt-2 
                
                w-6 h-6 mobile-sm:w-8 mobile-sm:h-8 mobile:w-11 mobile:h-11 
                tablet:w-14 tablet:h-14"
                />
                <div className="flex flex-col justify-start ">
                  <h1
                    className="text-c-neutral-0 
                    
                    text-sm mobile-sm:text-lg mobile:text-xl tablet:text-2xl"
                  >
                    Coding Conf
                  </h1>
                  <p
                    className="text-c-neutral-300/80 
                    
                    text-[0.50rem] mobile-sm:text-xs mobile:text-sm tablet:text-base"
                  >
                    Jan 31, 2025 / Austin, TX
                  </p>
                </div>
              </div>

              <div className="flex justify-start gap-2">
                <Image
                  src={
                    data !== null ? data.image : "/images/anonymous_user.png"
                  }
                  alt="preview"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg
                  
                  w-7 h-7 mobile-sm:w-9 mobile-sm:h-9 mobile:w-12 mobile:h-12
                  tablet:w-15 tablet:h-15"
                />

                <div className="flex flex-col justify-start items-start ">
                  <h1
                    className="text-c-neutral-0 
                  
                  text-xs mobile-sm:text-sm mobile:text-base tablet:text-lg"
                  >
                    {data?.fullName}
                  </h1>
                  <p
                    className="text-c-neutral-300/80 flex 
                  justify-center gap-1 
                  
                  text-xs mobile-sm:text-sm mobile:text-base"
                  >
                    <GithubSVG
                      className="w-4 h-4 mobile-sm:w-5 
                    mobile-sm:h-5 mobile:w-7 mobile:h-7"
                    />
                    {data?.github}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[17%] flex items-center justify-center">
              <p
                className="text-c-neutral-300/60 rotate-90
              text-lg mobile-sm:text-xl mobile:text-2xl tablet:text-3xl"
              >
                #{data?.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
