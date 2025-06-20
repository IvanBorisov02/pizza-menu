import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

export default function StarRating({
  maxStars = 5,
  color = "#fcc419",
  size = 48,
  setUserRating,
}) {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);

  const textStyle = {
    lineHeight: "0",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(i) {
    setRating(i + 1);
    setUserRating(i + 1);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleRating(i)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}
