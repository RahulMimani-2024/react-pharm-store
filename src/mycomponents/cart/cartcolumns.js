import React from "react";
import styled from "styled-components";

const Cartcolumns = () => {
  return (
    <>
      <TextWrapper>
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Products</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">name of product</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Price</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">quantity</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">remove</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">total</p>
            </div>
          </div>
        </div>
      </TextWrapper>
    </>
  );
};

const TextWrapper = styled.div`
`;

export default Cartcolumns;