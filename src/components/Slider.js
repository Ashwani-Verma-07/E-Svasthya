import React, { useEffect } from "react";
import "./Slider.css";
export default function Slider() {
  useEffect(() => {
    var slides = document.querySelectorAll(".slide");
    var btns = document.querySelectorAll(".btn");
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function (manual) {
      slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
      });

      slides[manual].classList.add("active");
      btns[manual].classList.add("active");
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function (activeClass) {
      let active = document.getElementsByClassName("active");
      let i = 1;

      var repeater = () => {
        setTimeout(function () {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove("active");
          });

          slides[i].classList.add("active");
          btns[i].classList.add("active");
          i++;

          if (slides.length === i) {
            i = 0;
          }
          if (i >= slides.length) {
            return;
          }
          repeater();
        }, 4000);
      };
      repeater();
    };
    repeat();
  }, []);
  return (
    <>
      <div className="img-slider">
        <div className="slide active">
          <img
            src="https://cdn.vox-cdn.com/thumbor/pAuPWGH5DWFOvBz--fe0KivkudQ=/0x0:1500x1060/1200x800/filters:focal(155x357:395x597)/cdn.vox-cdn.com/uploads/chorus_image/image/70520768/Pok_mon_Go_guide_header.0.jpg"
            alt="Hello World"
          />
        </div>
        <div className="slide">
          <img
            src="https://venturebeat.com/wp-content/uploads/2022/06/pokemon-go-six-billion-revenue.jpg?fit=400%2C231&strip=all"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://cdn.vox-cdn.com/thumbor/pAuPWGH5DWFOvBz--fe0KivkudQ=/0x0:1500x1060/1200x800/filters:focal(155x357:395x597)/cdn.vox-cdn.com/uploads/chorus_image/image/70520768/Pok_mon_Go_guide_header.0.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://gamingonphone.com/wp-content/uploads/2022/01/pokemon-unite-all-pokemon-cover-wallpaper.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://www.opticflux.com/wp-content/uploads/2021/11/Pokemon_UNITE___Team_Up._Take_Down.___Screenshot_1.0.jpeg"
            alt="Hello"
          />
        </div>
        <div className="navigation">
          <div className="btn active"></div>
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
        </div>
      </div>
    </>
  );
}
