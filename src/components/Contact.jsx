import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="clip" className="w-full h-auto" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 w-screen min-h-96 px-4 md:px-10">
      <div className="relative bg-black text-blue-50 py-24 rounded-lg overflow-hidden sm:overflow-visible">
        
        {/* Left-side Decorative Images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
          />
        </div>

        {/* Right-side Swordman Images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Text & Button Section */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="uppercase text-[10px] mb-10 font-general tracking-widest">
            Join VirtuWorld
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font w-full font-zentry text-5xl md:text-[6.2rem] font-black leading-[.9]"
          />

          <Button
            title="Download Now"
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
