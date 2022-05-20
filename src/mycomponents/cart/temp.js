import React from "react";
import styled from "styled-components";
const Temp = () => {
  return (
    <>
      <TextWrapper className="text-uppercase">
        <div class="section group">
          <div class="col span_1_of_6">1 of 6</div>
          <div class="col span_1_of_6">1 of 6</div>
          <div class="col span_1_of_6">1 of 6</div>
          <div class="col span_1_of_6">1 of 6</div>
          <div class="col span_1_of_6">1 of 6</div>
          <div class="col span_1_of_6">1 of 6</div>
        </div>
      </TextWrapper>
    </>
  );
};

const TextWrapper = styled.div`
/*  SECTIONS  */
.section {
	clear: both;
	padding: 0px;
	margin: 0px;
}

/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }
/*  GRID OF SIX  */
.span_6_of_6 {
	width: 100%;
}

.span_5_of_6 {
  	width: 83.06%;
}

.span_4_of_6 {
  	width: 66.13%;
}

.span_3_of_6 {
  	width: 49.2%;
}

.span_2_of_6 {
  	width: 32.26%;
}

.span_1_of_6 {
  	width: 15.33%;
}

/*  GO FULL WIDTH BELOW 480 PIXELS */
// @media only screen and (max-width: 480px) {
// .col {  margin: 1% 0 1% 0%; }
	// .span_1_of_6, .span_2_of_6, .span_3_of_6, .span_4_of_6, .span_5_of_6, .span_6_of_6 { width: 100%; }
// }
`;

export default Temp;
