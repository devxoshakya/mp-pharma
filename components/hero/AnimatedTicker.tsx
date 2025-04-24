"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/hero/AnimatedCustomerDemo";
import Ticker from "@/components/hero/Ticker";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import React from "react";

const AnimatedTicker = () => {
  return (
    <div
      style={{
      backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("/bg-5.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        overflowX: "hidden",
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        zIndex: 0,
        scrollbarColor: "transparent transparent",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
        overflowY: "hidden",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <style jsx global>{`
          html,
          body {
            overflow-x: hidden;
            max-width: 100%;
          }

          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          * {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

      <div className="relative text-center md:pt-32 py-8 w-full mx-auto px-4 bg-no-repeat bg-cover bg-center overflow-x-hidden max-w-full">
        {/* Global style to hide scrollbars */}
        

        <h1 className="text-4xl font-semibold md:text-6xl mx-auto">
          <LineShadowText
            className="italic text-emerald-900"
            shadowColor={"black"}
          >
            Expertly Made. Perfectly Yours.
          </LineShadowText>
        </h1>
        <div className="mx-auto flex flex-col md:flex-row-reverse items-center justify-center text-center">
          <AnimatedBeamMultipleOutputDemo />
          <Ticker />
        </div>
      </div>
    </div>
  );
};

export default AnimatedTicker;
