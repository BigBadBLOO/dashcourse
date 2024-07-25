import React, {useEffect} from "react";

export const useObserver = (id: string, options: { threshold: number } = { threshold: 1.0}) => {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    const el = window.document.querySelector(`#${id}`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        if (el) observer.unobserve(el);
      }
    }, options);

    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el);
    }
  }, [id]);

  return show;
}