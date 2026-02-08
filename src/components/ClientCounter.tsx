"use client";

import { useState } from "react";

const ClientCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</button>
  );
};

export default ClientCounter;
