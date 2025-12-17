"use client";

import Image from "next/image";

const Services: React.FC = () => {
  return (
    <div>
        <h1>This is the services section</h1>
          <Image
            src="/artinena.png"
            alt="services image"
            width={600}
            height={400}
            priority
          />
        </div>
  );
}
export default Services;