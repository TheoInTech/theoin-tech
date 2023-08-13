import Wip from "@/components/Wip";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "works",
};

const WorksPage = () => {
  return (
    <section className="z-20 text-gray-400">
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-off-white">
        here&apos;s what i built so far 🛠️
      </h1>
      <Wip page="works" />
    </section>
  );
};

export default WorksPage;
