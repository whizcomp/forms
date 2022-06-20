import React from "react";

export default function Content() {
  return (
    <div className="card p-4 shadow-lg p-3 mb-5 bg-white rounded">
      <p class="text-center pt-3">Fill in the form below</p>
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
          Phone number
        </label>
        <input
          required
          type="tel"
          className="form-control"
          id="tel"
          placeholder="e.g +1(919) 543..."
        />
      </div>

      <div className="mb-3">
        <label for="Email" className="form-label">
          Email address
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="Email"
          placeholder="e.g email@gmail.com"
        />
      </div>

      <div className="mb-3">
        <label for="amount" className="form-label">
          Amount to contribute in ksh
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="amount"
          placeholder="30,000"
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
          PayPal
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
          Western Unions
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
