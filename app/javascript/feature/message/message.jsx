import React from "react";
import { useSelector } from "react-redux";

export default function Message() {
  const { message } = useSelector(state => state.message);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}