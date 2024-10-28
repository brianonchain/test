"use client";
import React from "react";
import { setCookie } from "@/actions";

export default function Client1() {
  return (
    <div className="componentContainer">
      <p>Client1</p>
      <button className="button" onClick={() => setCookie("red")}>
        Button 1 red
      </button>
      <button className="button" onClick={() => setCookie("blue")}>
        Button 2 blue
      </button>
    </div>
  );
}
