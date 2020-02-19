import React, { Component } from "react";
import EmblaCarouselReact from "embla-carousel-react";

import Italian from "../images/italian.jpg";
import Pie from "../images/pie.jpg";
import Pizza from "../images/pizza.jpg";
import Cupcake from "../images/cupcake.jpg";
import Pineapple from "../images/pineapple.jpg";
import { withRouter } from "react-router-dom";

import AllRecipes from "./AllRecipes";

class EmblaCarouselComponent extends Component {
  componentDidMount() {
    this.embla.on("select", () => {
      console.log(`Current index is ${this.embla.selectedScrollSnap()}`);
    });
  }

  render() {
    return (
      <>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{ loop: true }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flex: "75%" }}>
              <img className="carousel-image" src={Pizza} />
            </div>
            <div style={{ flex: "75%" }}>
              <img className="carousel-image" src={Italian} />
            </div>
            <div style={{ flex: "75%" }}>
              <img className="carousel-image" src={Pineapple} />
            </div>
            <div style={{ flex: "75%" }}>
              <img className="carousel-image" src={Pie} />
            </div>
            <div style={{ flex: "75%" }}>
              <img className="carousel-image" src={Cupcake} />
            </div>
          </div>
        </EmblaCarouselReact>
        <button onClick={() => this.embla.scrollPrev()}>Prev</button>
        <button onClick={() => this.embla.scrollNext()}>Next</button>
        <AllRecipes />
      </>
    );
  }
}

export default withRouter(EmblaCarouselComponent);
