import React from "react";
import Hotdeals from "./Component/Landing/HotDeals/Hotdeals";
import Activities from "./Component/Landing/Activities/Activities";
import ActivitiesSlider from "./Component/Landing/Activities/ActivitiesSlider";
import Packages from "./Component/Landing/Packages/Packages";
import Booknow from "./Component/Landing/BookNow/Booknow";
import ContactUs from "./Component/ContactUs/Contact";
import Temple from "./Component/Landing/MaulakaliTemple/Temple";
import Newsletter from "./Component/Landing/NewsLetter/Newsletter";

const Components = () => {
  return (
      <div style={{
        width: '100vw',
    }}>
      <Hotdeals />
      <ActivitiesSlider />
      {/* <Booknow /> */}
      <Temple />
      <Packages />
      <Newsletter />
    </div>
  );
};

export default Components;
