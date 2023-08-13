import React from "react";

const Wip = ({ page }: { page?: string }) => {
  return (
    <section className="flex w-full h-full text-lg font-medium">
      {page} page is still <span className="ml-2 underline"> wip</span>.
    </section>
  );
};

export default Wip;
