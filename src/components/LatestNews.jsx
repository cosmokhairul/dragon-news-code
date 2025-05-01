import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 ">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-10" pauseOnHover={true} speed={100}>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur totam illo laudantium ea repellat, error quod quae vel sed
          ex eveniet dolores fugiat sit similique consequuntur est minima atque.
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur totam illo laudantium ea repellat, error quod quae vel sed
          ex eveniet dolores fugiat sit similique consequuntur est minima atque.
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur totam illo laudantium ea repellat, error quod quae vel sed
          ex eveniet dolores fugiat sit similique consequuntur est minima atque.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
