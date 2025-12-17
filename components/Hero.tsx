"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
    <h1>This is my hero</h1>
      <Image
        src="/artinena.png"
        alt="Hero image"
        width={600}
        height={400}
        priority
      />
    </div>
  );
};

export default Hero;