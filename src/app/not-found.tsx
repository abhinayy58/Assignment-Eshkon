"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLoaded } from "./redux/features/appSlice";
import { RootState } from "./redux/features/store";
import Loader from "./utils/Loader";

const NotFound = () => {
  const [randomJoke, setRandomJoke] = useState<any>("");
  const theme = useSelector((state: RootState) => state?.appReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRandomJoke = async () => {
      dispatch(setLoaded(true));
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        if (response.ok) {
          const data = await response.json();
          setRandomJoke(data);
        } else {
          throw new Error("Failed to fetch joke");
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoaded(false));
      }
    };

    fetchRandomJoke();
  }, [dispatch]);

  return (
    <main className="flex w-[100%] h-[100vh] flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold text-gray-500">404 Not Found</h2>
      <p className="text-gray-500">Could not find the requested path.</p>
      {randomJoke && theme.isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="text-gray-500">{randomJoke?.setup}</p>
          <p className="text-xl font-bold text-gray-500">
            {randomJoke?.punchline}
          </p>
        </>
      )}

      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
};

export default NotFound;
