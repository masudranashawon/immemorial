import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featuredRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featuredRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featuredRef);

  return (
    <section className='featured-section wrapper' ref={featuredRef}>
      <h2 className='section-title'>Featured</h2>
      <div className='features'>
        <div className='feature-left'>
          <span className='feature-text'>90'S TELEPHONE</span>
          <img
            src='https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="90'S TELEPHONE"
          />
          <span
            className='feature-shutter-left'
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className='feature-right'>
          <span className='feature-text'>90'S CASSETTE PLAYER</span>
          <img
            src='https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="90'S CASSETTE PLAYER"
          />
          <span
            className='feature-shutter-right'
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
