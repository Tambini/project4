import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import AllRecipes from "./AllRecipes";

import Italian from "../images/italian.jpg";
import Pie from "../images/pie.jpg";
import Pizza from "../images/pizza.jpg";
import Cupcake from "../images/cupcake.jpg";
import Pineapple from "../images/pineapple.jpg";
import Steak from "../images/steak.jpg";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <h1 className="featured-items">Featured Items</h1>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={10}
        leftChevron={<li className="arrows">{"<"}</li>}
        rightChevron={<li className="arrows">{">"}</li>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 600, background: "#EEE" }}>
          <img className="carousel-image" src={Cupcake} />
        </div>
        <div style={{ height: 600, background: "#EEE" }}>
          <img className="carousel-image" src={Pizza} />
        </div>
        <div style={{ height: 600, background: "#EEE" }}>
          <img className="carousel-image" src={Italian} />
          <img className="carousel-image" src={Pineapple} />
        </div>
        <div style={{ height: 600, background: "#EEE" }}>
          <img className="carousel-image" src={Pie} />
        </div>
        <div style={{ height: 600, background: "#EEE" }}>
          <img className="carousel-image" src={Steak} />
        </div>
      </ItemsCarousel>
      <AllRecipes />
    </div>
  );
};
