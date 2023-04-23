/** @format */

import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined ,DownloadOutlined} from "@ant-design/icons";
const Carousel = (props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {images.map((item, index) => {
        return (
          <img
            key={item.url}
            src={item.url}
            alt={`carousel-${index}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: `${index === currentIndex ? "0" : "100%"}`,
              transition: "left 1s ease-in-out",
            }}
          />
        );
      })}
      <LeftOutlined
        style={{ position: "absolute", top: "50%", left: "2%", color: "#FFF" ,fontSize:"64px"}}
        onClick={handlePrevClick}
      />
      <RightOutlined
        style={{ position: "absolute", top: "50%", right: "2%", color: "#FFF",fontSize:"64px" }}
        onClick={handleNextClick}
      />
      <DownloadOutlined style={{ position: "absolute", bottom: "2%", left: "50%", color: "#FFF",fontSize:"32px" }} />
    </div>
  );
};

export default Carousel;
