import React, { useState } from "react";
import { postDetailsDiaspora } from "./Server";
import { useNavigate } from "react-router-dom";
export default function Content() {
  let navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
    banking: "",
    amount: "",
    payment: "",
    agent: 0,
  });
  const onUpdateField = (e) => {
    const nextFormState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(nextFormState);
  };
  const sendToServer = async () => {
    const { name, phone, email, comments, banking, amount, payment, agent } =
      state;
    const { data } = await postDetailsDiaspora({
      name,
      phone,
      email,
      comments,
      banking,
      amount,
      payment,
      agent_id: agent,
    });
    console.log(data[0]);
    if (data[0].affectedRows > 0) {
      navigate("/thanks");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendToServer();
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
          <label for="email" className="form-label">
            email
          </label>
          <input
            required
            type="email"
            name="email"
            value={state.email}
            onChange={onUpdateField}
            className="form-control"
            id="email"
            placeholder="e.g myemail@email.com"
          />
        </div>
        <div className="d-inline" required onChange={onUpdateField}>
          <input
            className="form-check-input pe-3"
            type="checkbox"
            name="banking"
            value="western"
            checked={state.banking === "western" ? true : false}
            id="western"
          />
          <label className="form-check-label pe-3 ps-3" for="western">
            Western Union
          </label>

          <input
            className="form-check-input pe-3"
            type="checkbox"
            name="banking"
            value="paypal"
            id="paypal"
            checked={state.banking === "paypal" ? true : false}
          />
          <label className="form-check-label ps-3" for="paypal">
            paypal
          </label>
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Contact number
          </label>
          <input
            required
            type="phone"
            value={state.phone}
            name="phone"
            onChange={onUpdateField}
            className="form-control"
            id="phone"
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
          id="agent"
          value={state.agent}
          onChange={onUpdateField}
        >
          <option value={1}>Fundraising Agent (required)</option>
          <option value={2}>Grapefruit</option>
          <option value={3}>Lime</option>
          <option value={4}>Coconut</option>
          <option value={5}>Mango</option>
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
