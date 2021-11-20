import { useEffect } from "react";

const useOutsideClick = (callback) => {
  useEffect(() => {
    document.addEventListener("click", callback, true);
    return () => {
      document.removeEventListener("click", callback, true);
    };
  });
};

export default useOutsideClick;
