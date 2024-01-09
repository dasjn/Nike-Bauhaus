import React, { useState, useRef } from 'react';
import Lottie from 'react-lottie-player';
import nikeAnimation from '../animations/BauhausCompo_v2.json';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const lottieRef = useRef(null)

  const handleAnimationComplete = () => {
    // Animation is complete, set loading to false to start the removal animation
    setLoading(false);
  };

  const handleTransitionEnd = () => {
    // This function will be called when the removal animation is complete
    // Stop animation
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  };

  return (
      <div
        className={`loading-screen${loading ? ' visible' : ' hidden'}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <Lottie
          ref={lottieRef}
          loop
          animationData={nikeAnimation}
          play
          speed={1.25}
          onLoopComplete={handleAnimationComplete}
        />
      </div>
  );
}