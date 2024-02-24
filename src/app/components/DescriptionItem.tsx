/* eslint-disable react/no-unescaped-entities */
"use client";
import { title } from "process";
import React from "react";
import ContentfulImage from "./ContentfulImage";

const DescriptionItem = ({ title, details, recipeby }: any) => {
  const data = new Date(details?.banner.sys.createdAt);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <ContentfulImage
                  className="w-10 h-10 rounded-full"
                  src={"https:" + recipeby?.image.fields.file.url}
                  width={40}
                  height={40}
                  quality="100"
                  alt={title}
                />
              </div>
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    {/* Tooltip */}
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-500">
                          {recipeby?.name}
                        </span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-500 before:rounded-full">
                        {month[data.getMonth()]} {data.getDate()}
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-500 before:rounded-full">
                        {details?.timeToCook} min to cook
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl text-gray-500">
                {title}
              </h2>
              <p className="text-lg text-gray-500">
                {details?.procedure.content[0].content[0]?.value}
              </p>
            </div>
            <figure>
              <ContentfulImage
                className="w-full object-cover rounded-xl h-auto"
                src={"https:" + details?.banner.fields.file.url}
                width={600}
                height={600}
                quality="100"
                alt={title}
                priority
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                {recipeby?.image?.fields?.description}.
              </figcaption>
            </figure>
          </div>
          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default DescriptionItem;
