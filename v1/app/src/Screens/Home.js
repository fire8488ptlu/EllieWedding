import usePreloadImages from "../Utils/usePreLoadImages";
import useInView from "../Utils/useInView";
import { useState, useEffect } from "react";
import Info1 from "../Img/Info1.png";
import Info2 from "../Img/Info2.png";
import Info3 from "../Img/Info3.png";
import Info6 from "../Img/Info6.png";
import Info81_1 from "../Img/Info81_1.png";
import Info81_2 from "../Img/Info81_2.png";
import Info82_1 from "../Img/Info82_1.png";
import Info82_2 from "../Img/Info82_2.png";

import Logo from "../Img/Logo.svg";
import Info1Item1 from "../Img/info1Item1.svg";
import Info4Item1 from "../Img/info4.svg";
import Info5Item1 from "../Img/Info5.svg";
import Info7Item1 from "../Img/info7Item1.svg";
import Info7Item2 from "../Img/info7Item2.svg";
import Info7Item3 from "../Img/info7Item3.svg";
import Info9Item1 from "../Img/Info9Item1.svg";
import Line from "../Img/Line.svg";
//import usePreloadImages from "../Utils/usePreloadImages";

const allImages = [
  Info1,
  Info2,
  Info3,
  Info6,
  Info81_1,
  Info81_2,
  Info82_1,
  Info82_2,
  Logo,
  Info1Item1,
  Info4Item1,
  Info5Item1,
  Info7Item1,
  Info7Item2,
  Info7Item3,
  Info9Item1,
  Line,
];

const Home = () => {
  const imagesLoaded = usePreloadImages(allImages);

  const [fadeInRef, isVisible] = useInView({
    threshold: 0.3, // Trigger when 30% visible
  });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true); // ✅ Lock visible state after trigger
    }
    // console.log("isVisible", isVisible);
    // console.log("hasBeenVisible", hasBeenVisible);
  }, [isVisible, hasBeenVisible]);

  const GMapClick = () => {
    window.open("https://maps.app.goo.gl/PNYssJBCNMU6xmhp8", "_blank"); // Opens Instagram in a new tab
  };
  /*
    if (!imagesLoaded) {
      return (
        <section className="loading">
          <div className="loading-screen">
            <img className="loading-screen-img" src={Logo} />
            {/* You can use a spinner here 
          </div>
        </section>
      );
    } else {
  */

  return !imagesLoaded ? (
    <section className="loading">
      <div className="loading-screen">
        <img className="loading-screen-img" src={Logo} />
      </div>
    </section>
  ) : (
    <section className="home">
      <div className="home-container">
        <div className="home-info1">
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info1-box" style={{ paddingTop: "2rem" }}>
            <img src={Info1Item1} className="home-info1-box-img1" />
          </div>
        </div>

        <div className="home-info2">
          <img
            src={Info2}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
        </div>

        <div className="home-info3">
          <img
            src={Info3}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
        </div>

        <div className="home-info4">
          <div className="home-info4-box">
            <img src={Info4Item1} className="home-info4-box-img1" />
          </div>
        </div>

        <div className="home-info5">
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info5-box" style={{ marginTop: "2rem" }}>
            {/* <img src={Info5Item1} className="home-info5-box-img1" /> */}
            <img
              ref={fadeInRef}
              src={Info5Item1}
              //style={{ border: "2px solid red" }}
              className={`home-info5-box-img1 fade-in-on-scroll ${
                hasBeenVisible ? "visible" : ""
              }`}
            />
          </div>
        </div>

        <div className="home-info6">
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info6-box" style={{ marginTop: "3rem" }}>
            <img src={Info6} className="home-info6-box-img" />
          </div>
        </div>

        <div className="home-info7">
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info7-box">
            <img
              src={Info7Item1}
              onClick={GMapClick}
              className="home-info7-box-img1"
              style={{ marginBottom: "2rem" }}
            />
            <img
              src={Info7Item2}
              className="home-info7-box-img2"
              style={{ marginBottom: "3rem" }}
            />
            <img
              src={Info7Item3}
              className="home-info7-box-img3"
              style={{ marginBottom: "6rem" }}
            />

            <div className="home-info7-box-line" />
            {/* <img src={Line} className="home-info7-box-img5" /> */}
            <img src={Logo} className="home-info7-box-img4" />
          </div>
          <h1 className="home-info7-h1" style={{}}>
            更多美好照片，將在婚禮當天與大家分享，敬請期待
          </h1>
        </div>

        <div className="home-info8">
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info8-box">
            <div className="home-info8-box-box">
              <div className="home-info8-box-box-item">
                <img src={Info81_1} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">野餐生活小日子</h4>
              </div>

              <div className="home-info8-box-box-item">
                <img src={Info81_2} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">求婚驚喜日</h4>
              </div>
            </div>
            <div className="home-info8-box-box" style={{ marginTop: "2rem" }}>
              <div className="home-info8-box-box-item">
                <img src={Info82_1} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">單車的成長回憶</h4>
              </div>

              <div className="home-info8-box-box-item">
                <img src={Info82_2} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">咖啡廳約會之必要</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="home-info9">
          <div className="home-info9-box">
            <img src={Info9Item1} className="home-info9-box-img1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
