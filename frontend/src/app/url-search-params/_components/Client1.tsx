"use client";
// next
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
// actions
import { setCookie } from "@/actions";
// functions
import { getCookie } from "cookies-next";

export default function Client1() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  // const color = getCookie("color");
  // console.log(color);

  return (
    <div className="componentContainer">
      <p>Client 1</p>
      <button
        id="1"
        className="button"
        onClick={(e) => {
          // setCookie("green");
          const params = new URLSearchParams({
            productId: e.currentTarget.id,
          });
          router.push(`/searchparams?${params.toString()}`);
        }}
      >
        Set productId &rarr; 1 | color &rarr; green
      </button>
      <button
        id="2"
        className="button"
        onClick={(e) => {
          // setCookie("black");
          const params = new URLSearchParams({
            productId: e.currentTarget.id,
          });
          router.push(`/searchparams?${params.toString()}`);
        }}
      >
        Set productId &rarr; 2 | color &rarr; black
      </button>
      {/* <p>Cookie | color: {color}</p> */}
      <p>Search Params | productId: {productId}</p>
    </div>
  );
}
