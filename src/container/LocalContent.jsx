import React, { useState } from "react";
export default function Content() {
  const [state, setState] = useState({
    name: "",
    tel: "",
    comments: "",
    mpesa: "",
    amount: "",
    payment: "",
  });
  const onUpdateField = (e) => {
    const nextFormState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(nextFormState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="card p-4 shadow-lg p-3 mb-5 bg-white border-top border-5 border-light rounded">
      <form onSubmit={handleSubmit}>
        <h6 class="text-center pt-3">Fill in the form below</h6>
        <hr />
        <div className="mb-3">
          <label for="fullname" className="form-label">
            Fullname
          </label>
          <input
            required
            type="name"
            onChange={onUpdateField}
            value={state.name}
            name="name"
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
            value={state.tel}
            name="tel"
            onChange={onUpdateField}
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
            name="amount"
            onChange={onUpdateField}
            className="form-control"
            id="amount"
            value={state.amount}
            placeholder="30,000"
          />
        </div>
        <div className="mb-3">
          <label for="mpesa" className="form-label">
            Mpesa phone number
          </label>
          <input
            required
            type="name"
            name="mpesa"
            value={state.mpesa}
            onChange={onUpdateField}
            className="form-control"
            id="mpesa"
            placeholder="0713271345"
          />
        </div>
        <div className="d-inline" required onChange={onUpdateField}>
          <input
            className="form-check-input pe-3"
            type="checkbox"
            name="payment"
            value="paid"
            checked={state.payment === "paid" ? true : false}
            id="paid"
          />
          <label className="form-check-label pe-3 ps-3" for="paid">
            paid
          </label>

          <input
            className="form-check-input pe-3"
            type="checkbox"
            name="payment"
            value="pledged"
            id="pledged"
            checked={state.payment === "pledged" ? true : false}
          />
          <label className="form-check-label ps-3" for="pledged">
            pledged
          </label>
        </div>
        <select
          className="form-select mt-3"
          name="agent"
          onChange={onUpdateField}
        >
          <option value="" name="agent">
            Fundraising Agent (required)
          </option>
          <option value="grapesfruit" name="agent">
            Grapefruit
          </option>
          <option value="lime" name="agent">
            Lime
          </option>
          <option value="coconut" name="agent">
            Coconut
          </option>
          <option value="mango" name="agent">
            Mango
          </option>
        </select>
        <div className="mb-3">
          <label for="Cooemts" className="form-label">
            Comments if any.....
          </label>
          <textarea
            className="form-control"
            id="Comments"
            rows="3"
            name="comments"
            value={state.comments}
            onChange={onUpdateField}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
