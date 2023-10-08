import { EIndustry, ETechStack, TWebCard, WebCard } from "@/app/works/WebCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "works",
};

const works: Array<TWebCard> = [
  {
    title: "DAOCre-8",
    description:
      "A Solana-based decentralized application that empowers realization of limitless potentials of creations through unencumbered crowdfunding, enabling them without constraints.",
    role: "Co-founder & CTO",
    tech: [
      ETechStack.NEXTJS,
      ETechStack.REACT,
      ETechStack.TYPESCRIPT,
      ETechStack.GIT,
      ETechStack.SOLANA,
      ETechStack.RUST,
      ETechStack.ANCHOR,
      ETechStack.TAILWIND,
      ETechStack.VERCEL,
      ETechStack.ARWEAVE,
    ],
    imageUrl: "/images/works/daocre8.png",
    url: "https://daocre8.com",
    githubUrl: "https://github.com/theindiehacker/daocre8",
    industries: [
      EIndustry.WEB3,
      EIndustry.BLOCKCHAIN,
      EIndustry.AI,
      EIndustry.NFT,
      EIndustry.STARTUP,
    ],
  },
  // ----------------------------------------
  {
    title: "Honest Farmer Club NFT",
    description:
      "A NFT PFP project in Polygon with multiple utilities in GameFi and IRL: minting, NFT staking, LP farming, token staking, minigames, play-and-earn, scholarship system, discord events, offline meetups and more, building since 2021.",
    role: "Former Lead Developer",
    tech: [
      ETechStack.NEXTJS,
      ETechStack.REACT,
      ETechStack.TYPESCRIPT,
      ETechStack.TAILWIND,
      ETechStack.GSAP,
      ETechStack.SOLIDITY,
      ETechStack.IPFS,
      ETechStack.THEGRAPH,
      ETechStack.GRAPHQL,
      ETechStack.ETHEREUM,
      ETechStack.CHAINLINK,
      ETechStack.GIT,
      ETechStack.VERCEL,
    ],
    imageUrl: "/images/works/farmernft.png",
    url: "https://game.farmernft.com/",
    industries: [
      EIndustry.WEB3,
      EIndustry.BLOCKCHAIN,
      EIndustry.NFT,
      EIndustry.STARTUP,
      EIndustry.CRYPTO,
      EIndustry.DEFI,
    ],
  },
  // ----------------------------------------
  {
    title: "OpenAI Fine-Tuning Model Builder and Deployer",
    description:
      "A tool designed for people who want to customize their own AI models without dealing with complicated code. Everything you need can be done right from this user-friendly web interface.",
    role: "Principal Opensource Developer",
    tech: [
      ETechStack.NEXTJS,
      ETechStack.REACT,
      ETechStack.TAILWIND,
      ETechStack.VERCEL,
      ETechStack.GIT,
      ETechStack.TYPESCRIPT,
    ],
    imageUrl: "/images/works/openai-finetuning.png",
    url: "https://openai-finetuning-model-creator.vercel.app/",
    githubUrl:
      "https://github.com/theindiehacker/openai-finetuning-model-creator",
    industries: [EIndustry.AI, EIndustry.OPENSOURCE, EIndustry.STARTUP],
  },
  // ----------------------------------------
  {
    title: "Fit Senpai",
    description:
      "Get personalized 4-week workout and meal plans in seconds. Ditch the gym guesswork and plan your fitness routines with just a few clicks.",
    role: "Former Principal Developer",
    tech: [
      ETechStack.NEXTJS,
      ETechStack.REACT,
      ETechStack.TAILWIND,
      ETechStack.VERCEL,
      ETechStack.GIT,
      ETechStack.TYPESCRIPT,
      ETechStack.POSTGRESQL,
      ETechStack.SUPABASE,
    ],
    imageUrl: "/images/works/fitsenpai.png",
    url: "https://fitsenpai.com/",
    industries: [EIndustry.AI, EIndustry.STARTUP, EIndustry.FITNESS],
  },
  // ----------------------------------------
  {
    title: "The Howdy Studios, Inc.",
    description:
      "The Howdy Studios is a startup web3 development studio focusing on blockchain dapps, metaverse, crypto, NFTs and its on-chain utilities, offering custom development and its in-house dApps aiming to be the one-stop hub for all talented Filipino builders who aspire to build in the still-infant web3 space.",
    role: "CEO & CTO",
    tech: [
      ETechStack.NEXTJS,
      ETechStack.REACT,
      ETechStack.ANCHOR,
      ETechStack.TAILWIND,
      ETechStack.GSAP,
      ETechStack.VERCEL,
    ],
    imageUrl: "/images/works/howdy.png",
    url: "https://thehowdystudios.com",
    industries: [
      EIndustry.WEB3,
      EIndustry.BLOCKCHAIN,
      EIndustry.AI,
      EIndustry.NFT,
      EIndustry.STARTUP,
      EIndustry.CRYPTO,
      EIndustry.DEFI,
    ],
  },
];

const WorksPage = () => {
  return (
    <section className="z-20 min-h-screen text-gray-400">
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-off-white">
        here&apos;s what i built so far 🛠️
      </h1>
      <div className="flex flex-col gap-4">
        {works.map((work) => (
          <WebCard key={work.title} {...work} />
        ))}
      </div>
    </section>
  );
};

export default WorksPage;
