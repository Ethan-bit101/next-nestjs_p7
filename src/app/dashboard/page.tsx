"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Separator } from "@/components/ui/separator"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu"

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <>
      <main className="mt-15">

        <fieldset>
          <div className="inline-block pl-10 sticky top-12 bg-white rounded-lg ">
            <Button variant="secondary" className="top-5">All</Button>
            <Button variant="outline" className="top-5">Programming</Button>
            <Button variant="outline" className="top-5">Web-Development</Button>
            <Button variant="outline" className="top-5">Game Dev</Button>
            <Button variant="outline" className="top-5">David Goggins</Button>
            <Button variant="outline" className="top-5">Motivation</Button>
            <Button variant="outline" className="top-5">90's music</Button>
            <Button variant="outline" className="top-5">20's music</Button>
            <Button variant="outline" className="top-5">Five Night's At Freddy's</Button>
            <Button variant="outline" className="top-5">Japan pop rock</Button>
            <Button variant="outline" className="top-5">David Goggins</Button>
            <Button variant="outline" className="top-5">Motivation</Button>
          </div>

          <div>
            <figure className="pl-5 pb-5 rounded-md">
              <Image
                src="/every_breath_you take.jpg"
                alt="Homepage"
                width={450}
                height={450}
                className="inline-block rounded-md"
              />
              <figcaption className="h-20">
                <div className="ml-1 m-2">
                  <Avatar className="float-left">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <span className="text-xl">
                    <Link href="/Every_breath_you_take" rel="noopener noreferrer">
                      The Police- Every breath you take<br />
                    </Link>
                  </span>

                  <div className="inline-block text-gray-500 text-md">
                    <span className="text-gray-500">Dela Cruz</span>
                    <span className="text-gray-500 ml-3">1 views</span>
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="pl-5 pb-5 rounded-md">
              <Image
                src="/every_breath_you take.jpg"
                alt="Homepage"
                width={450}
                height={450}
                className="inline-block rounded-md"
              />
              <figcaption className="h-20">
                <div className="ml-1 m-2">
                  <Avatar className="float-left">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <span className="text-xl">
                    <Link href="/Chest_pain" rel="noopener noreferrer">
                      Malcom Todd- Chest pain<br />
                    </Link>
                  </span>

                  <div className="inline-block text-gray-500 text-md">
                    <span className="text-gray-500">Dela Cruz</span>
                    <span className="text-gray-500 ml-3">1 views</span>
                  </div>
                </div>
              </figcaption>
            </figure>

          </div>

        </fieldset>
      </main>
    </>
  );
}
