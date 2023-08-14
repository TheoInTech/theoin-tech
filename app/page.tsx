import { Card, ChannelLink } from "@/components";
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

export default function Home() {
  return (
    <section className="z-20 min-h-screen text-gray-400">
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-off-white">
        hi, {`i'm theo - the indie hacker`} 🕵️💻
      </h1>

      {/* Intro */}
      <p>
        i&apos;m a <b className="text-gray-300">fullstack developer</b> and{" "}
        <b className="text-gray-300">indie hacker</b> currently working
        full-time at a fortune 100 software services and consulting company as
        an assoc manager developer whilst building side saas projects in
        emerging tech like ai and blockchain.
      </p>
      <br />
      <p>
        i&apos;m slowly building my tech startup called{" "}
        <Link
          href="https://thehowdystudios.com"
          rel="noopener noreferrer"
          target="_blank"
          className="font-medium text-blue-green hover:underline hover:brightness-105"
        >
          the howdy studios
        </Link>
        , a dev studio that builds micro saas products for people who want to
        make their lives easier{" "}
        <i>
          (see my works{" "}
          <Link
            href="/works"
            className="font-medium text-blue-green hover:underline hover:brightness-105"
          >
            here
          </Link>
          )
        </i>
        .
      </p>
      <br />
      <p>
        having been in the startup scene, i&apos;ve met and learned from the
        best people in the industry.
      </p>
      <div className="gap-1 my-8 space-y-1 text-xs columns-2 sm:columns-3">
        <div className="flex flex-col">
          <div className="relative h-32 sm:h-40">
            <Image
              alt="me introducing ethereum to participants at a web3 hackathon in the philippines"
              src={teaching}
              fill
              priority
              className="object-cover h-full rounded"
            />
          </div>
          <Card className="z-30 order-2 p-2 sm:order-1">
            me introducing ethereum to participants at a web3 hackathon in the
            philippines
          </Card>
        </div>
        <div className="flex flex-col">
          <div className="relative h-40 sm:h-60">
            <Image
              alt="chosen as one of the top 6 startups at the aibc conference organized
              by sigma."
              src={top6startups}
              fill
              priority
              className="object-cover h-full"
            />
          </div>
          <Card className="z-30 order-2 p-2 sm:order-1">
            chosen as one of the top 6 startups at the aibc conference organized
            by sigma.
          </Card>
        </div>
        <div className="flex flex-col">
          <Card className="z-30 order-2 p-2 sm:order-1">
            interviewed on television together with metacrafters founders sheila
            marcelo and kevin yang.
          </Card>
          <div className="relative order-1 h-60 sm:order-2">
            <Image
              alt="interviewed on television together with metacrafters founders sheila marcelo and kevin yang."
              src={metacrafters}
              fill
              priority
              className="object-cover h-full rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Card className="z-30 order-2 p-2 sm:order-1">
            introduced my startup to investors during the philippine blockchain
            week 2022
          </Card>
          <div className="relative order-1 h-40 sm:order-2">
            <Image
              alt="introduced my startup to investors during the philippine blockchain week 2022"
              src={matching}
              fill
              priority
              className="object-cover h-full rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-40">
            <Image
              alt="invited as guest in a podcast to talk about my journey in the web3 startup industry."
              src={podcast}
              fill
              priority
              className="object-cover h-full rounded"
            />
          </div>
          <Card className="z-30 order-2 p-2 sm:order-1">
            invited as guest in a podcast to talk about my journey in the web3
            startup industry.
          </Card>
        </div>
        <div className="flex flex-col">
          <div className="relative h-60">
            <Image
              alt="joined as a mentor in a 3-day web3 bootcamp and hackathon in the philippines."
              src={web3bootcamp}
              fill
              priority
              className="object-cover h-full rounded"
            />
          </div>
          <Card className="z-30 order-2 p-2 sm:order-1">
            joined as a mentor in a 3-day web3 bootcamp and hackathon in the
            philippines.
          </Card>
        </div>
      </div>

      {/* Channels */}
      <p>
        {`i also found passion in creating dev content where i share my knowledge and experiences in the tech industry, for both in startup and enterprise scenes.`}
      </p>
      <div className="flex flex-col w-full my-8 space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          image={
            <Youtube className="w-full h-full border rounded-full border-neutral-200 dark:border-neutral-700" />
          }
          name="@_theindiehacker"
          // TODO: Get realtime subscriber count from YouTube API
          subscribers={12200}
          link="https://www.youtube.com/@_theindiehacker"
        />
        <ChannelLink
          image={
            <Tiktok className="w-full h-full border rounded-full border-neutral-200 dark:border-neutral-700" />
          }
          name="@_theindiehacker"
          // TODO: Get realtime subscriber count from Tiktok API
          subscribers={28700}
          link="https://www.tiktok.com/@_theindiehacker"
        />
      </div>

      {/* Tech stack */}
      <p>
        in these channels, i publicly share my journey as an indie hacker and
        what i&apos;m learning along the way using the following tech stack:
      </p>
      <Card className="flex flex-row w-full h-16 my-8">
        <Image
          alt="aws,azure,supabase,ts,react,next,tailwind,java,spring,solidity,graphql,mysql,git,vercel"
          src="https://skillicons.dev/icons?i=aws,azure,supabase,ts,react,next,tailwind,java,spring,solidity,graphql,mysql,git,vercel&theme=dark"
          priority
          width={1000}
          height={500}
        />
      </Card>

      <p>
        if you want to learn more, go ahead and follow my othersocials or maybe
        schedule a call with me 👌
      </p>
      <ul className="flex gap-4 my-8">
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
