import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from "react-owl-carousel";
import Header from "./components/header";
import Footer from "./components/footer";

export default (props) => {

  const [popularDataList, setPopularDataList] = useState([])
  const [chefWeek, setChefWeek] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  const fetchData = () => {

    fetch('http://63.142.251.101:3000/homepage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },

    })
      .then((response) => response.json())
      .then(data => {
        setPopularDataList(data.data.popularweek);
        setChefWeek(data.data.chefweek);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const obj = {
    'dishes': [{
      "Img": "../../images/All.png",
      "Name": "All",
      "id": "1",
    }, {
      "Img": "../../images/Indian.png",
      "Name": "Indian",
      "id": "2",
    },
    {
      "Img": "../../images/Italian.png",
      "Name": "Italian",
      "id": "3",
    },
    {
      "Img": "../../images/All.png",
      "Name": "Chinese",
      "id": "4",
    },
    {
      "Img": "../../images/Korean.png",
      "Name": "Korean",
      "id": "5",
    },
    {
      "Img": "../../images/All.png",
      "Name": "African",
      "id": "6",
    },
    {
      "Img": "../../images/Indian.png",
      "Name": "Chinese",
      "id": "7",
    },
    {
      "Img": "../../images/Korean.png",
      "Name": "Chinese",
      "id": "8",
    },
    ]
  };

  // const arrayById = obj.dishes.filter(function (el) {
  //   return 
    // el.id === ;
  // });

  // console.log(arrayById);

  return (
    <div >
      <Header />

      <section className="menu">

        <ul>
          {obj.dishes.map((item, index) => (
            <li>
              <div className="menuImg" id="1">
                <img src={item.Img} />
                <p>{item.Name} </p>
              </div>
            </li>

          ))}
        </ul>

        <div className="menusearch" >
          <span> <img className="filter-search" src="../../images/Vector.png" /></span>
          <input type="text" placeholder="Select a Delivery Day" />
          <span> <img className="down-search" src="../../images/downarrow.png" /></span>
        </div>
      </section>

      <section className="home-container">
        <div className="container">
          <div className="populardish">
            <h3 className="text-start"> Popular Weekly food</h3>
            <br />
            <div className="card-section">
              {popularDataList && popularDataList.length ? (
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  loop={true}
                  nav
                  autoplay={true}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    1199: {
                      items: 4,
                    },
                  }}
                >
                  {popularDataList.map((item, i) => (
                    <div className="slideCard">
                      <div className="slideCard-img">
                        <img src={item.dish_masters.length && "http://63.142.251.101:3000/" + item.dish_masters[0].dishImage} />
                      </div>
                      <h4 style={{ cursor: "pointer" }}>{item.dish_masters.length && item.dish_masters[0].dishname} </h4>
                      <p>{item.chefname}</p>
                      <div className="chef-pc">
                        <img src={item.chefprofile && "http://63.142.251.101:3000/" + item.chefprofile} />
                      </div>

                      <div className="slideCard-detail">
                        <span className="text-start" style={{ float: "left" }}>
                          <b>	{item.reviewCnt} </b>	( {item.totalRating} reviews)</span>
                        <span className="text-end" style={{ color: "#2C8C64" }}>View Details</span></div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : ""}
            </div>
          </div>
          <br />
          <div className="chef-section">
            <div className="chef-innersection">
              <h3 className="text-center">Chef Of the week</h3>
            </div>
            <div className="chef-detail">
              <div className="row">
                <div className="col-lg-6">
                  <div className="chefImg">
                    <img src={chefWeek && chefWeek.length ? "http://63.142.251.101:3000/" + chefWeek[2].chefprofile : ""} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chefView">
                    <h4 className="text-start">{chefWeek && chefWeek.length ? chefWeek[2].chefname : ""}</h4>
                    <span className="text-end">{chefWeek && chefWeek.length ? chefWeek[2].chefRateing : ""} ({chefWeek && chefWeek.length ? chefWeek[2].chefReview : ""} reviews)</span></div>
                  <p dangerouslySetInnerHTML={{ __html: (chefWeek && chefWeek.length ? chefWeek[2].aboutChef : "") }} />

                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="populardish">
            <h3 className="text-start"> Explore All Dishesd</h3>
            <br />
            <div className="card-section">
              {popularDataList && popularDataList.length ? (
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  loop={true}
                  nav
                  autoplay={true}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    1199: {
                      items: 4,
                    },
                  }}
                >
                  {popularDataList.map((item, i) => (
                    <div className="slideCard">
                      <div className="slideCard-img">
                        <img src={item.dish_masters.length && "http://63.142.251.101:3000/" + item.dish_masters[0].dishImage} />
                      </div>
                      <h4 style={{ cursor: "pointer" }}>{item.dish_masters.length && item.dish_masters[0].dishname} </h4>
                      <p>{item.chefname}</p>
                      <div className="chef-pc">
                        <img src={item.chefprofile && "http://63.142.251.101:3000/" + item.chefprofile} />
                      </div>

                      <div className="slideCard-detail">
                        <span className="text-start" style={{ float: "left" }}>
                          <b>	{item.reviewCnt} </b>	({item.totalRating} reviews)</span>
                        <span className="text-end" style={{ color: "#2C8C64" }}>View Details</span></div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : ""}
            </div>
          </div>

          <br />
          <br />
          <div className="populardish">
            <h3 className="text-start">Explore African Dishes</h3>
            <br />
            <div className="card-section">
              {popularDataList && popularDataList.length ? (
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  loop={true}
                  nav
                  autoplay={true}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    1199: {
                      items: 4,
                    },
                  }}
                >
                  {popularDataList.map((item, i) => (
                    <div className="slideCard">
                      <div className="slideCard-img">
                        <img src={item.dish_masters.length && "http://63.142.251.101:3000/" + item.dish_masters[0].dishImage} />
                      </div>
                      <h4 style={{ cursor: "pointer" }}>{item.dish_masters.length && item.dish_masters[0].dishname} </h4>
                      <p>{item.chefname}</p>
                      <div className="chef-pc">
                        <img src={item.chefprofile && "http://63.142.251.101:3000/" + item.chefprofile} />
                      </div>

                      <div className="slideCard-detail">
                        <span className="text-start" style={{ float: "left" }}>
                          <b>	{item.reviewCnt} </b>	( {item.totalRating} reviews)</span>
                        <span className="text-end" style={{ color: "#2C8C64" }}>View Details</span></div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : ""}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
};
