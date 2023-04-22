import React from "react";
import './index.scss';

const index = () => {
  return (
    <div className="help">
      <div className="container">
        <form className="help__form col-md-4 mt-0 mb-5 d-flex gap-3 flex-column justify-content-between align-items-start">
          <h3 className="help__title fs-4 text-normal text-light">Send message</h3>
          <div className="col-md-4 w-100">
            <div className="form-outline">
              <input
                type="text"
                className="form-control border text-light"
                id="validationCustom01"
                required
              />
              <label for="validationCustom01" className="form-label text-light">
                First name
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col-md-4 w-100">
            <div className="form-outline">
              <input
                type="text"
                className="form-control border text-light"
                id="validationCustom01"
                required
              />
              <label for="validationCustom01" className="form-label text-light">
                Last name
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col-md-4 w-100">
            <div className="form-outline">
              <input
                type="tel"
                className="form-control border text-light"
                id="validationCustom01"
                required
              />
              <label for="validationCustom01" className="form-label text-light">
                Phone number
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col-md-4 w-100">
            <div className="form-outline">
              <input
                type="email"
                className="form-control border text-light"
                id="validationCustom01"
                required
              />
              <label for="validationCustom01" className="form-label text-light">
                Email
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col-md-4 w-100">
            <div className="form-outline">
              <textarea
                className="form-control border text-light"
                id="validationCustom01"
                placeholder="Send your message..."
                required
              ></textarea>
              <label for="validationTextarea" className="form-label text-light">
                Massege
              </label>
            </div>
          </div>
          <div className="mb-3 w-100">
            <button className="btn btn-secondary fs-6 w-100" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
