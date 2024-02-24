import Description from "@/app/components/Description";
import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  return <div className="">
    <Description slug={params?.slug} />
  </div>;
};

export default page;
