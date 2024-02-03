"use client";
import React, { useEffect } from "react";

const Title = ({}) => {
  useEffect(() => {
    document.title = "Anime Pulse";
  }, []);
  return <div></div>;
};

export default Title;
