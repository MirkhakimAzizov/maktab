import React from "react";

const index = () => {
  return (
    <div>
      <div className="container my-5">
        <div
          class="alert alert-success text-center text-uppercase"
          role="alert"
        >
          Rahbariyat
        </div>
        <ul className="about-list">
          <div className="card" style={{width: '18rem'}}>
            <img src='https://picsum.photos/288/250' className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary w-100">
                More
              </a>
            </div>
          </div>
        </ul>
        <div
          class="alert alert-success text-center text-uppercase"
          role="alert"
        >
          O'qituvchilar
        </div>
        <div
          class="alert alert-success text-center text-uppercase"
          role="alert"
        >
          Faol o'quvchilar
        </div>
      </div>
    </div>
  );
};

export default index;
