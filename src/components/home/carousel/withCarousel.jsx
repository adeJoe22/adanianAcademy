import React, { useState } from "react";

const withCarousel = (WrappedComponent, data) => {
  const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      if (currentIndex === data.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handlePrev = () => {
      if (currentIndex === 0) {
        setCurrentIndex(data.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return (
      <WrappedComponent
        data={data}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        setCurrentIndex={setCurrentIndex}
      />
    );
  };

  return CardCarousel;
};

export default withCarousel;
