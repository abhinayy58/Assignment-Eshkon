/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/features/store";
import CardItem from "./CardItem";
import getMainContent from "../utils/contentful";
import { useDispatch } from "react-redux";
import { setLoaded } from "../redux/features/appSlice";

export function Card({ recipe }: any) {
  const [content, setContent] = useState([]);
  const theme = useSelector((state: RootState) => state?.appReducer?.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaded(true));
    const fetchContent = async () => {
      const content = await getMainContent();
      if (content) {
        setContent(content.map((item: any) => item.fields));
        dispatch(setLoaded(false));
      }
    };
    fetchContent();
  }, [dispatch]);
  console.assert(content);
  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-10">
        {content.map((recipe: any, i) => (
          <CardItem
            key={recipe?.fields?.slug || i}
            title={recipe?.title}
            thumbnail={recipe.thumbnails.fields}
            image={recipe?.thumbnails.fields.file.details?.image}
            slug={recipe.slug}
          />
        ))}
      </div>
      <p
        className={`p-10 flex justify-center  ${
          theme === "light" ? "text-black" : "text-blue-400 "
        }`}
      >
        Using - {theme === "light" ? "Light" : "Dark"} Theme
      </p>
    </>
  );
}
