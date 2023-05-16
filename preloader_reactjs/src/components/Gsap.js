import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

const content = document.querySelector("section");

const imagLoad = imagesLoaded(content);

imagLoad.on("done", (instance) => {
  gsap.to("svg", {
    scale: 0,
  });
});
