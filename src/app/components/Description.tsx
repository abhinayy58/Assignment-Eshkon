"use client";
import React, { useEffect, useState } from "react";
import getMainContent from "../utils/contentful";
import DescriptionItem from "./DescriptionItem";
import { useDispatch } from "react-redux";
import { setLoaded } from "../redux/features/appSlice";

const Description = ({ slug }: any) => {
  const [content, setContent] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoaded(true));

    const fetchContent = async () => {
      const content = await getMainContent();
      if (content) {
        let contentFulData = content.map((item: any) => item?.fields);
        setContent(contentFulData.filter((field: any) => field?.slug === slug));
        dispatch(setLoaded(false));
      }
    };
    fetchContent();
   
  }, [slug,dispatch]);
  return (
    <div>
      <DescriptionItem
        title={slug}
        details={content[0]}
        recipeby={content[0]?.recipeby.fields}
      />
    </div>
  );
};

export default Description;
