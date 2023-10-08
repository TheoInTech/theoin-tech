import { Button, Card } from "@/components";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export enum EIndustry {
  WEB3 = "web3",
  DEFI = "defi",
  NFT = "nft",
  CRYPTO = "crypto",
  BLOCKCHAIN = "blockchain",
  AI = "ai",
  FINTECH = "fintech",
  HEALTHTECH = "healthtech",
  EDTECH = "edtech",
  ENTERPRISE = "enterprise",
  STARTUP = "startup",
  AGRITECH = "agritech",
  LOGISTICS = "logistics",
  ECOMMERCE = "ecommerce",
  SOCIAL = "social",
  MEDIA = "media",
  MARKETING = "marketing",
  GAMING = "gaming",
  OPENSOURCE = "opensource",
  FITNESS = "fitness",
}

export enum ETechStack {
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  TYPESCRIPT = "typescript",
  ARWEAVE = "arweave",
  IPFS = "ipfs",
  CHAINLINK = "chainlink",
  THEGRAPH = "thegraph",
  SOLIDITY = "solidity",
  GRAPHQL = "graphql",
  MYSQL = "mysql",
  NOSQL = "nosql",
  POSTGRESQL = "postgresql",
  GIT = "git",
  VERCEL = "vercel",
  AWS = "aws",
  AZURE = "azure",
  SUPABASE = "supabase",
  JAVA = "java",
  SPRING = "spring",
  RUST = "rust",
  ANCHOR = "anchor",
  SOLANA = "solana",
  ETHEREUM = "ethereum",
  GSAP = "gsap",
}

export type TWebCard = {
  title: string;
  description: string;
  role: string;
  tech: Array<ETechStack>;
  imageUrl: string;
  url: string;
  githubUrl?: string;
  industries: Array<EIndustry>;
};

export const WebCard = ({
  title,
  description,
  role,
  tech,
  imageUrl,
  url,
  githubUrl,
  industries,
}: TWebCard) => {
  return (
    <Card className="relative flex flex-col gap-4 p-4">
      <Image
        src={imageUrl}
        alt={title}
        priority
        width={1500}
        height={1500}
        className="object-cover w-full rounded-lg shadow-2xl"
      />

      <div className="grid w-full grid-cols-8 gap-8 p-4 border rounded-lg border-white/10 bg-black/5">
        <div className="flex flex-col col-span-8 gap-2 md:col-span-6">
          <h3 className="font-semibold text-off-white">{title}</h3>
          <span>{role}</span>
          <h4 className="text-sm">{description}</h4>
        </div>

        {/* Buttons */}
        <div className="flex flex-col col-span-8 gap-4 md:gap-2 md:col-span-2">
          <Button asChild size={"sm"}>
            <Link href={url} target="_blank">
              Website <ExternalLink className="w-3 h-3 ml-2" />
            </Link>
          </Button>
          {githubUrl && (
            <Button asChild variant={"secondary"} size={"sm"}>
              <Link href={githubUrl} target="_blank">
                Github <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 p-4 border rounded-lg border-white/10 bg-black/5">
        {/* Tech stack */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold shrink-0">Tech stack</span>
          <div className="flex flex-wrap gap-2">
            {tech.map((stack) => (
              <div
                key={stack}
                className="px-4 py-1 text-xs rounded-2xl bg-off-white/10"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold shrink-0">Industries</span>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-4 py-1 text-xs rounded-2xl bg-off-white/10"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
