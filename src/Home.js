import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://files.cdn.printful.com/o/upload/variant-image/c8/c81d38a2cf182977bbdc9c335718bdb4_l"
          }
          rating={5}
        />
        <Product
          id="2"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://media.kohlsimg.com/is/image/kohls/3979967_Charcoal?wid=2048&hei=2048&op_sharpen=1"
          }
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://files.cdn.printful.com/o/upload/variant-image/c8/c81d38a2cf182977bbdc9c335718bdb4_l"
          }
          rating={5}
        />
        <Product
          id="4"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://files.cdn.printful.com/o/upload/variant-image/c8/c81d38a2cf182977bbdc9c335718bdb4_l"
          }
          rating={5}
        />
        <Product
          id="5"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://files.cdn.printful.com/o/upload/variant-image/c8/c81d38a2cf182977bbdc9c335718bdb4_l"
          }
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Alphabeing gym vest"
          price={28}
          image={
            "https://files.cdn.printful.com/o/upload/variant-image/c8/c81d38a2cf182977bbdc9c335718bdb4_l"
          }
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
