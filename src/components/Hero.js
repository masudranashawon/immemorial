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
        Etherial <span ref={shutter1}></span>
      </h1>
      <h1 className='canvas'>
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className='photos'>
        <div
          ref={photoRefOne}
          className='photo one'
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%22")',
          }}
        ></div>
        <div
          ref={photoRefTwo}
          className='photo two'
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/843884278/photo/90s-mixed-tape.jpg?s=612x612&w=0&k=20&c=iSlMVOsSwbTN_0AprK4OB5kYNXo4qBql4Wg_sb5VlV8=")',
          }}
        ></div>
        <div
          ref={photoRefThree}
          className='photo three'
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1273665646/photo/cyberpunk-computer-room.jpg?s=612x612&w=0&k=20&c=jt5NLoH7gsqUaG54PhkIyPNaQ92_Ib2yfp8FzExiX7E=")',
          }}
        ></div>
        <div
          ref={photoRefFour}
          className='photo four'
          style={{
            backgroundImage:
              'url("https://i0.wp.com/www.society19.com/wp-content/uploads/2018/03/90s-memories.jpg?resize=740%2C600&ssl=1")',
          }}
        ></div>
        <div
          ref={photoRefFive}
          className='photo five'
          style={{
            backgroundImage:
              'url("https://metrosaga.com/wp-content/uploads/2019/03/4-89.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
