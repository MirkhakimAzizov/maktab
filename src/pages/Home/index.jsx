import React from "react";
import "./index.scss";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import card1 from "../../assets/images/card2.jpg";
import card2 from "../../assets/images/card1.jpg";
import card3 from "../../assets/images/card3.jpg";

const index = () => {
  return (
    <div>
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade w-100"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bg1}
              // "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Xalq ta'limi vaziri bilan uchrashuv</h5>
              <p>
                2023-yil 30-yanvar Xalq ta'limi vazirining maktabimizga tashrifi
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={bg2}
              // "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Yoshlar va vazir</h5>
              <p>
                Xalq ta'limi vazirining maktabimiz yoshlari bilan uchrashuvi
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={bg3}
              // "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Uzuliksiz musobaqalar</h5>
              <p>
                Maktabimiz o'quvchilari o'rtasida uzuliksiz tarzda turli
                musobaqalar olib boroladi
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <ul className="home__list mt-5 d-flex flex-column gap-3">
          <li className="card border p-3 m-2">
            <div className="card-body text-center d-flex flex-column border rounded-2">
              <h3 className="card-title fs-1">94</h3>
              <p className="card-text m-0 p-0">Xodim</p>
            </div>
          </li>
          <li className="card border p-3 m-2">
            <div className="card-body text-center d-flex flex-column border rounded-2">
              <h3 className="card-title fs-1">1056</h3>
              <p className="card-text m-0 p-0">O'quvchi</p>
            </div>
          </li>
          <li className="card border p-3 m-2">
            <div className="card-body text-center d-flex flex-column border rounded-2">
              <h3 className="card-title fs-1">32</h3>
              <p className="card-text m-0 p-0">O'quv xonasi</p>
            </div>
          </li>
        </ul>
      </div>

      <ul className="home__list my-5 d-flex gap-5 flex-column align-items-center justify-content-center">
        <li className="home__item w-75 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
          <img
            className="rounded-5"
            src={card1}
            alt="img"
            width={300}
            height={220}
          />
          <div className="card-body">
            <h2 className="card-title text-uppercase">Dars jarayonlari</h2>
            <p className="card-text mt-4">
              Iqtidorli yoshlar, ijodiylikda ham muvaffaqiyat ko'rsatishadi.
              Ular, yangi ideyalar va innovatsiyalar bilan ishlaydilar va
              o'zlarining o'ylarini, fikrlarini va tajribalarini boshqa odamlar
              bilan ulashishadi. Ular, ijodiylikni joriy etishda eng muhim
              qadamlarni o'tkazishadi.
            </p>
          </div>
        </li>
        <li className="home__item mt-5 w-75 d-flex flex-column flex-lg-row-reverse align-items-center justify-content-center gap-5">
        <img
            className="rounded-5"
            src={card2}
            alt="img"
            width={300}
            height={220}
          />
          <div className="card-body">
            <h2 className="card-title text-uppercase">Iqtidorli yoshlar</h2>
            <p className="card-text mt-4">
              Iqtidorli yoshlar, ijodiylikda ham muvaffaqiyat ko'rsatishadi.
              Ular, yangi ideyalar va innovatsiyalar bilan ishlaydilar va
              o'zlarining o'ylarini va fikrlarini boshqa odamlar bilan
              ulashishadi. Ular, ijodiylikni joriy etishda eng muhim qadamlarni
              o'tkazishadi. Ular, xavfsizligi ta'minlash, yangiliklarni
              o'rganish va yaratish, texnologik rivojlanish va boshqa muhim
              sohalarda ham ishlaydilar.
            </p>
          </div>
        </li>
        <li className="home__item w-75 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
          <img
            className="rounded-5"
            src={card3}
            alt="img"
            width={300}
            height={220}
          />
          <div className="card-body">
            <h2 className="card-title text-uppercase">Tozalik va ozodalik</h2>
            <p className="card-text mt-4">
              Iqtidorli yoshlar, ijodiylikda ham muvaffaqiyat ko'rsatishadi.
              Ular, yangi ideyalar va innovatsiyalar bilan ishlaydilar va
              o'zlarining o'ylarini, fikrlarini va tajribalarini boshqa odamlar
              bilan ulashishadi. Ular, ijodiylikni joriy etishda eng muhim
              qadamlarni o'tkazishadi.
            </p>
          </div>
        </li>
        <div className="container">
          <div className="maps">
            <a
              href="https://yandex.uz/maps/org/32975768265/?utm_medium=mapframe&utm_source=maps"
              className="maps-link"
            >
              Средняя общеобразовательная школа № 45
            </a>
            <a
              href="https://yandex.uz/maps/105804/andijan-province/category/school/184106240/?utm_medium=mapframe&utm_source=maps"
              className="maps-loc"
            >
              Общеобразовательная школа в Андижанской области
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=72.059033%2C40.846032&mode=search&poi%5Bpoint%5D=72.056037%2C40.846598&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D32975768265&sctx=ZAAAAAgCEAAaKAoSCSU9DK1OTVFAETy%2BvWvQp0RAEhIJcLa5MT1hwz8RJZLoZRTLsT8iBgABAgMEBSgKOABAncoLSAFiNnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3VidGl0bGVzL1VzZUxvbmdQaW5TdWJ0aXRsZXM9MWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdWJ0aXRsZXMvUmFuZG9tUGluU3VidGl0bGVzPTFqAnV6nQHNzEw9oAEAqAEAvQFsnwSh6gEA8gEA%2BAEAggIfYW5kaWpvbiB2aWxveWF0aSBiYWxpcWNoaSB0dW1hbooCAJICBTEwMzExmgIMZGVza3RvcC1tYXBz&sll=72.059033%2C40.846032&sspn=0.014244%2C0.006586&text=andijon%20viloyati%20baliqchi%20tuman&z=16.41"
              // width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              className="maps-city"
            ></iframe>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default index;
