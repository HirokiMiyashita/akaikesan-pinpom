import React, { useState } from "react";

export const ColorCeneration = () => {
  const [name, setName] = useState("");

  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleName} />
    </div>
  );
};
