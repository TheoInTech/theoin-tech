import React from "react";

const Wip = ({ page }: { page?: string }) => {
  return (
    <section className="flex items-center justify-center w-full h-full text-lg font-medium text-center">
      {page} page is still <span className="ml-2 underline"> wip</span>.
    </section>
  );
};

export default Wip;
