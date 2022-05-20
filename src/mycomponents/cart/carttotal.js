import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Carttotal = ({ value }) => {
  const { cartsubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
            <Link to="/">
              <Button
                className="btn text-uppercase"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </Button>
            </Link>
            <h5>
                <span className="text-title">
                    subtotal : 
                </span>
                <strong>₹{cartsubTotal}</strong>
            </h5>

            <h5>
                <span className="text-title">
                    tax : 
                </span>
                <strong>₹{cartTax}</strong>
            </h5>

            <h5>
                <span className="text-title">
                    subtotal : 
                </span>
                <strong>₹{cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = styled.button`
  color: red;
  border: 0.2rem solid red;
`;

export default Carttotal;
