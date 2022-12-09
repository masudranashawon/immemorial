import { createRef, useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photoRefOne = useRef();
  const photoRefTwo = useRef();
  const photoRefThree = useRef();
  const photoRefFour = useRef();
  const photoRefFive = useRef();

  const photoArr = [
    photoRefOne,
    photoRefTwo,
    photoRefThree,
    photoRefFour,
    photoRefFive,
  ];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photoArr);
  useGsapPhotoLevitate(photoArr, heroRef);

  return (
    <section className='hero-section wrapper' ref={heroRef}>
      <h1 className='ethereal'>
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className='canvas'>
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className='photos'>
        <div
          ref={photoRefOne}
          className='photo one'
          style={{
            backgroundImage: 'url("https://i.ibb.co/C7sSXVx/skater.jpg")',
          }}
        ></div>
        <div
          ref={photoRefTwo}
          className='photo two'
          style={{
            backgroundImage: 'url("https://i.ibb.co/pnmbWpF/cassette.jpg")',
          }}
        ></div>
        <div
          ref={photoRefThree}
          className='photo three'
          style={{
            backgroundImage: 'url("https://i.ibb.co/qJghxC5/pc-build.jpg")',
          }}
        ></div>
        <div
          ref={photoRefFour}
          className='photo four'
          style={{
            backgroundImage:
              'url("https://i.ibb.co/z595DhB/90s-memories.webp")',
          }}
        ></div>
        <div
          ref={photoRefFive}
          className='photo five'
          style={{
            backgroundImage: 'url("https://i.ibb.co/QfGTHZS/4-89.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
