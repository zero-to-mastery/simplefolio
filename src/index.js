import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


var typed = new Typed(".auto-type", {
    strings: ['a Web developer', 'and','a Backend developer'],
    typeSpeed: 50,
    backspeed:40,
    loop:true
  })
  