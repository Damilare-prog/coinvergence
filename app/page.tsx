"use client";

import { useEffect } from "react";
import { PAGE_DATA } from "./constants";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement("script");
      script.innerHTML = PAGE_DATA.scripts;
      document.body.appendChild(script);
    }, 500);
    return () => {};
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: PAGE_DATA.html }} suppressHydrationWarning />
  );
}
