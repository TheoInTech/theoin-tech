"use client";

import { Badge, Card, ChannelLink } from "@/components";
import Link from "next/link";
import Image from "next/image";
import ArrowUprightIcon from "public/icons/arrow-upright.svg";
import Youtube from "public/images/youtube.svg";
import Tiktok from "public/images/tiktok.svg";
import teaching from "public/images/teaching.jpg";
import metacrafters from "public/images/with-metacrafters-founders.png";
import matching from "public/images/startup-matching.png";
import podcast from "public/images/podcast.png";
import web3bootcamp from "public/images/web3-bootcamp.jpg";
import top6startups from "public/images/top-6-startups.png";

import SupabaseIcon from "public/images/tech/supabase.svg";

export default function Home() {
  return (
    <section className="z-20">
      <h1 className="font-bold text-xl md:text-4xl mb-8 tracking-tighter">
        hi, {`i'm theo - the indie hacker`} 🕵️💻
      </h1>

      {/* Intro */}
      <p className="prose prose-neutral dark:prose-invert">
        {`i'm a fullstack developer and indie hacker currently
        working full-time at accenture as an assoc manager developer whilst building side saas projects in emerging tech like ai and blockchain.`}
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        i&apos;m slowly building my tech startup called{" "}
        <Link
          href="https://thehowdystudios.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-green font-medium hover:underline hover:brightness-105"
        >
          the howdy studios
        </Link>
        , a dev studio that builds micro saas products for people who want to
        make their lives easier{" "}
        <i>
          (see my works{" "}
          <Link
            href="/works"
            className="text-blue-green font-medium hover:underline hover:brightness-105"
          >
            here
          </Link>
          )
        </i>
        .
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        having been in the startup scene, i&apos;ve met and learned from the
        best people in the industry.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="me introducing ethereum to participants at a web3 hackathon in the philippines"
            src={teaching}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover hover:scale-105 hover:z-30 duration-300"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="chosen as one of the top 6 startups at the aibc conference organized by sigma."
            src={top6startups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-left hover:scale-105 hover:z-30 duration-300"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="got interviewed on national television together with metacrafters founders sheila marcelo and kevin yang."
            src={metacrafters}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top hover:scale-105 hover:z-30 duration-300"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="introduced my startup to investors during the philippine blockchain week 2022"
            src={matching}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover hover:scale-105 hover:z-30 duration-300"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="invited as guest in a podcast to talk about my journey in the web3 startup industry."
            src={podcast}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover hover:scale-105 hover:z-30 duration-300"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="joined us a mentor in a web3 bootcamp in the philippines"
            src={web3bootcamp}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover hover:scale-105 hover:z-30 duration-300"
          />
        </div>
      </div>

      {/* Channels */}
      <p className="prose prose-neutral dark:prose-invert">
        {`i also found passion in creating dev content where i share my knowledge and experiences in the tech industry, for both in startup and enterprise scenes.`}
      </p>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          image={
            <Youtube className="border border-neutral-200 dark:border-neutral-700 rounded-full h-full w-full" />
          }
          name="@_theindiehacker"
          // TODO: Get realtime subscriber count from YouTube API
          subscribers={12200}
          link="https://www.youtube.com/@_theindiehacker"
        />
        <ChannelLink
          image={
            <Tiktok className="border border-neutral-200 dark:border-neutral-700 rounded-full h-full w-full" />
          }
          name="@_theindiehacker"
          // TODO: Get realtime subscriber count from Tiktok API
          subscribers={28700}
          link="https://www.tiktok.com/@_theindiehacker"
        />
      </div>

      {/* Tech stack */}
      <p className="prose prose-neutral dark:prose-invert">
        in these channels, i publicly share my journey as an indie hacker and
        what i&apos;m learning along the way using the following tech stack:
      </p>
      <Card className="my-8 flex flex-row w-full h-16">
        <Image
          alt="aws,azure,supabase,ts,react,next,tailwind,java,spring,solidity,graphql,mysql,git,vercel"
          src="https://skillicons.dev/icons?i=aws,azure,supabase,ts,react,next,tailwind,java,spring,solidity,graphql,mysql,git,vercel&theme=dark"
          priority
          width={1000}
          height={500}
        />
      </Card>

      <p className="prose prose-neutral dark:prose-invert">
        if you want to learn more, go ahead and follow my othersocials or maybe
        schedule a call with me 👌
      </p>
      <ul className="flex my-8 gap-4">
        <li>
          <Link
            className="flex items-center transition-all hover:bg-blue-green hover:bg-opacity-10"
            rel="noopener noreferrer"
            target="_blank"
            href="https://beacons.ai/_theindiehacker"
          >
            <Card className="gap-4">
              <ArrowUprightIcon className="w-3 h-3 text-off-white" />
              all socials
            </Card>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:bg-blue-green hover:bg-opacity-10"
            rel="noopener noreferrer"
            target="_blank"
            href="https://calendar.app.google/fWz4oqm3tu7LiTeF7"
          >
            <Card className="gap-4">
              <ArrowUprightIcon className="w-3 h-3 text-off-white" />
              book a call
            </Card>
          </Link>
        </li>
      </ul>
    </section>
  );
}
