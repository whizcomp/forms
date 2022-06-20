import React from "react";

export default function Content() {
  return (
    <div className="card p-4 shadow-lg p-3 mb-5 bg-white border border-5 border-light rounded">
      <h6 class="text-center pt-3">Fill in the form below</h6>
      <hr />
      <div className="mb-3">
        <label for="fullname" className="form-label">
          Fullname
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="fullname"
          placeholder="e.g Joe Doe"
        />
      </div>

      <div className="mb-3">
        <label for="tel" className="form-label">
          Contact number
        </label>
        <input
          required
          type="tel"
          className="form-control"
          id="tel"
          placeholder="e.g 0713271345"
        />
      </div>

      <div className="mb-3">
        <label for="amount" className="form-label">
          Amount to contribute
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="amount"
          placeholder="30,000"
        />
      </div>

      <div className="mb-3">
        <label for="amount" className="form-label">
          Mpesa phone number
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="amount"
          placeholder="0713271345"
        />
      </div>

      <div className="d-inline">
        <input
          required
          className="form-check-input pe-3"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label pe-3 ps-3" for="flexCheckDefault">
          paid
        </label>

        <input
          required
          className="form-check-input pe-3"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label ps-3" for="flexCheckChecked">
          pledged
        </label>
      </div>

      <select className="form-select mt-3">
        <option value="Agent">Fundraising Agent</option>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>

      <div className="mb-3">
        <label for="Cooemts" className="form-label">
          Comments if any.....
        </label>
        <textarea className="form-control" id="Cooemts" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
