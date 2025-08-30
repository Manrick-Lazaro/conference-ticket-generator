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
          className="text-center font-bold text-c-neutral-0 text-3xl
            mt-13 mb-7"
        >
          Congrats, <span>{data?.fullName}!</span> Your ticket is ready.
        </h1>

        <p className="text-center text-xl text-c-neutral-300">
          We&apos;ve emailed your ticket to <span>{data?.email}</span> and will
          send update in the run up to the event.
        </p>

        <div className="mt-20 w-full h-fit aspect-[600/280] relative">
          <TicketSVG className="w-full h-auto absolute inset-0" />

          <div className="flex w-full h-full py-3 pl-3">
            <div className="flex flex-col w-[83%] justify-between h-full">
              <div className="flex justify-start gap-2">
                <LogoSVG className="w-8 h-8 pt-2" />
                <div className="flex flex-col justify-start ">
                  <h1 className="text-c-neutral-0 text-2xl">Coding Conf</h1>
                  <p className="text-c-neutral-300/80 text-sm">
                    Jan 31, 2025 / Austin, TX
                  </p>
                </div>
              </div>

              <div className="flex justify-start gap-2">
                {/* <LogoSVG className="w-9 h-12 pt-2" /> */}
                <div className="bg-c-neutral-700/60 px-0.5 py-0.5 rounded-xl">
                  <Image
                    src={
                      data !== null ? data.image : "/images/anonymous_user.png"
                    }
                    alt="preview"
                    width={400}
                    height={400}
                    className="rounded-xl w-12 h-12 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start ">
                  <h1 className="text-c-neutral-0 text-lg">{data?.fullName}</h1>
                  <p
                    className="text-c-neutral-300/80 text-xs flex 
                  justify-center gap-1"
                  >
                    <GithubSVG className="w-5 h-5" />
                    {data?.github}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[17%] flex items-center justify-center">
              <p className="text-c-neutral-300/60 rotate-90">#{data?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
