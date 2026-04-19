import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    handleScroll();
  }, []);
}