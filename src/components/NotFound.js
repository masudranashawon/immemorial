import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImage } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const rightImageRef = useRef(null);
  const leftImageRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImage(rightImageRef);
  useGsapNotFoundImage(leftImageRef);

  return (
    <div className='not-found wrapper'>
      <div className='headline-1' ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className='img-1' ref={rightImageRef}>
        <img
          src='https://media.istockphoto.com/id/1198643357/photo/happy-kid-in-red-polka-dot-dress.jpg?s=612x612&w=0&k=20&c=ZEDJnkpejNHf4lpqg_E0jDntdoTYHLJAdJjtBe33EsQ='
          alt='Happy kid looking at camera with happiness through magnifier'
        />
      </div>
      <div className='img-2' ref={leftImageRef}>
        <img
          src='https://images.pexels.com/photos/5808388/pexels-photo-5808388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Woman showing retro photo camera and holding blooming flower'
        />
      </div>
      <div className='headline-2' ref={rightHeadlineRef}>
        Find that page
      </div>
    </div>
  );
};

export default NotFound;
