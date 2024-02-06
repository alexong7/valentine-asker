"use client";

import Image from "next/image";
import { useState } from "react";
// import mochaGif from "../../public/mocha-gif.gif";
// import milkMochaHug from "../../public/mocha-gif.gif";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const mochaGif =
    "https://media1.tenor.com/m/hnqwiqhkSy0AAAAC/hearts-flowers.gif";
  const milkMochaHug =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDgxNXprZmZ4d3Z3b2pncW04NGptZDI1dDB3bWl5ZHQwaWhhcXd3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif";

  const yesButtonSize = noCount * 16 + 16;
  const yesPaddingX = noCount * 6 + 16;
  const yesPaddingY = noCount * 6 + 8;

  function handleClick() {
    setNoCount(noCount + 1);
  }

  function getNoTextButton() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {yesPressed ? (
        <div className="flex flex-col items-center justify-center space-y-2">
          <img src={milkMochaHug} />
          <h1 className="text-3xl font-semibold">Yay!!!!!!!!!!!!</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            {/* <Image
              src={mochaGif}
              alt="Mocha Gif"
              layout="fill"
              objectFit="contain"
            /> */}
            <img src={mochaGif} />
          </div>
          <h1 className="text-3xl font-semibold">
            Will you be my Valentine Ava?
          </h1>
          <div className="flex space-x-8 mt-6">
            <div>
              <button
                style={{
                  fontSize: yesButtonSize,
                  // paddingRight: yesPaddingX,
                  // paddingLeft: yesPaddingX,
                  // paddingTop: yesPaddingY,
                  // paddingBlock: yesPaddingY,
                }}
                onClick={() => setYesPressed(true)}
                className="bg-[#27a33e] px-4 py-2 rounded-lg text-white"
              >
                Yes
              </button>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[#eb170c] px-4 py-2 text-md rounded-lg text-white"
              >
                {getNoTextButton()}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Bro deadass?",
  "I'm gonna jump off a bridge",
  "Oh so you hate me",
  "Mega Sad",
];
