import Wip from "@/components/Wip";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "blog",
};

const BlogPage = () => {
  return (
    <section className="z-20 min-h-screen text-gray-400">
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-off-white">
        love reading? go subscribe 📚
      </h1>
      <Wip page="blog" />
    </section>
  );
};

export default BlogPage;
