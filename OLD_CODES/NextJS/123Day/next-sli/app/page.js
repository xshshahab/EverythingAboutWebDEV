import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <Image
        className="object-cover mx-auto"
        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={900}
        height={600}
        alt="pexels iamge"
      />
    </div>
  );
};

export default Home;
