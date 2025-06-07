import usePreloadImages from "../Utils/usePreLoadImages";
import useInView from "../Utils/useInView";
import { useState, useEffect } from "react";
import Info1 from "../Img/Info1.png";
import Info2 from "../Img/Info2.png";
import Info3 from "../Img/Info3.png";
import Info6 from "../Img/Info6.png";
import Info81_1 from "../Img/Info81_1.jpg";
import Info81_2 from "../Img/Info81_2.jpg";
import Info82_1 from "../Img/Info82_1.jpg";
import Info82_2 from "../Img/Info82_2.jpg";
import Info83_1 from "../Img/Info83_1.png";
import Info83_2 from "../Img/Info83_2.jpg";

import bike from "../Img/bike.svg";
import marrageTitle from "../Img/marrageTitle.svg";
import marrageTitle2 from "../Img/marrageTitle2.svg";

import Logo from "../Img/Logo.svg";
import Info1Item1 from "../Img/info1Item1.svg";
import Info4Item1 from "../Img/info4.svg";
import Info5Item1 from "../Img/Info5.svg";
import Info7Item1 from "../Img/info7Item1.svg";
import Info7Item2 from "../Img/info7Item2.svg";
import Info7Item3 from "../Img/info7Item3.svg";
import Info9Item1 from "../Img/Info9Item1.svg";
import Line from "../Img/Line.svg";
import Footer from "../Img/footer.svg"
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


  const Info81_1Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E9%A6%96%E9%A0%81", "_blank"); // Opens Instagram in a new tab
  };

  const Info81_2Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E5%96%AE%E8%BB%8A%E7%94%9F%E6%B4%BB", "_blank"); // Opens Instagram in a new tab
  };

  const Info82_1Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E9%87%8E%E9%A4%90%E5%B0%8F%E6%97%A5%E5%AD%90", "_blank"); // Opens Instagram in a new tab
  };

  const Info82_2Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E9%A0%90%E7%B4%84%E7%99%BB%E8%A8%98%E6%90%B6%E5%85%88%E7%9C%8B", "_blank"); // Opens Instagram in a new tab
  };

  const Info83_1Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E6%B1%82%E5%A9%9A%E9%A9%9A%E5%96%9C%E6%97%A5", "_blank"); // Opens Instagram in a new tab
  };

  const Info83_2Click = () => {
    window.open("https://sites.google.com/view/jikalaandellieweddingphoto/%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9A%84%E5%92%96%E5%95%A1%E5%BA%97%E7%B4%84%E6%9C%83", "_blank"); // Opens Instagram in a new tab
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
        <div className="home-info1" >
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info1-box" style={{ paddingTop: "5rem" }}>
            <img src={bike} className="home-info1-box-img1" />
            <img src={marrageTitle } className="home-info1-box-img2" style={{ marginTop: "1rem" }}/>
            <img src={marrageTitle2} className="home-info1-box-img3" style={{ marginTop: "0.7rem" }} />
            <h1 className="home-info1-box-h1" style={{}}>
              點擊照片看更多可愛的我們!
          </h1> 
          </div>

          {/* <h1 className="home-info1-h1" style={{}}>
              點擊照片看更多可愛的我們!
          </h1>  */}
        </div>

        <div className="home-info2" style={{display:"none"}}>
          <img
            src={Info2}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
        </div>

        <div className="home-info3" style={{display:"none"}}>
          <img
            src={Info3}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
        </div>

        <div className="home-info4" style={{display:"none"}}>
          <div className="home-info4-box">
            <img src={Info4Item1} className="home-info4-box-img1" />
          </div>
        </div>

        <div className="home-info5" style={{display:"none"}}>
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

        <div className="home-info6" style={{display:"none"}}>
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

        <div className="home-info7" style={{display:"none"}}>
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
          {/* <h1 className="home-info8-h1" style={{}}>
              更多美好照片，將在婚禮當天與大家分享，敬請期待
          </h1> */}
          <img
            src={Info1}
            alt="Background"
            className="background-img"
            loading="lazy"
          />
          <div className="home-info8-box">
            <div className="home-info8-box-box">
              <div className="home-info8-box-box-item">
                <img src={Info81_1} className="home-info8-box-box-item-img" onClick={Info81_1Click}/>
                <h4 className="home-info8-box-box-item-h4">照片分享</h4>
              </div>

              <div className="home-info8-box-box-item">
                <img src={Info81_2} className="home-info8-box-box-item-img" onClick={Info81_2Click} />
                <h4 className="home-info8-box-box-item-h4">單車生活</h4>
                <img src={Info82_1} className="home-info8-box-box-item-img" style={{marginTop:"0.5rem"}} onClick={Info82_1Click} />
                <h4 className="home-info8-box-box-item-h4">野餐小日子</h4>
              </div>
            </div>


            {/* <div className="home-info8-box-box" style={{ marginTop: "2rem" }}>

              <div className="home-info8-box-box-item">
                <img src={Info82_1} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">野餐小日子</h4>
              </div>

              <div className="home-info8-box-box-item">
                <img src={Info82_2} className="home-info8-box-box-item-img" />
                <h4 className="home-info8-box-box-item-h4">預約登記搶先看</h4>
              </div>
            </div> */}

            <div className="home-info8-box-box" style={{ marginTop: "2rem" }}>
              

              <div className="home-info8-box-box-item">
                <img src={Info83_2} className="home-info8-box-box-item-img" onClick={Info83_2Click}/>
                <h4 className="home-info8-box-box-item-h4">一定要的咖啡店約會</h4>
                <img src={Info82_2} className="home-info8-box-box-item-img" onClick={Info82_2Click} style={{marginTop:"0.5rem"}}/>
                <h4 className="home-info8-box-box-item-h4">預約登記搶先看</h4>
              </div>
              <div className="home-info8-box-box-item" >
                <img src={Info83_1} className="home-info8-box-box-item-img" onClick={Info83_1Click}/>
                <h4 className="home-info8-box-box-item-h4">求婚驚喜日</h4>
              </div>
            </div>


          </div>
        </div>

        <div className="home-info9">
          <div className="home-info9-box">
            <img src={Footer} className="home-info9-box-img1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
