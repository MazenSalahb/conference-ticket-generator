import backgroundImg from "../assets/images/background-desktop.png";
import patternCircle from "../assets/images/pattern-circle.svg";
import patternSquigglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottomDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
function BackgroundImages() {
  return (
    <>
      <img
        src={backgroundImg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
      />
      <img
        src={patternCircle}
        alt="pattern"
        className="absolute -top-16 left-16  object-cover opacity-75"
      />
      <img
        src={patternSquigglyLineTop}
        alt="pattern"
        className="absolute top-16 right-0  object-cover -z-10 opacity-75"
      />
      <img
        src={patternCircle}
        alt="pattern"
        className="absolute bottom-64 right-64  object-cover opacity-75"
      />
      <img
        src={patternSquigglyLineBottomDesktop}
        alt="pattern"
        className="absolute bottom-0 left-0  object-cover opacity-75 -z-10"
      />
    </>
  );
}

export default BackgroundImages;
