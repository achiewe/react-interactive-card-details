import { useState } from "react";
import styled from "styled-components";
import CardLogo from "/public/card-logo.svg";

function BankCards() {
  return (
    <CardsDiv>
      <Imagediv>
        <BackImage>
          <p> 000 </p>
        </BackImage>
        <FronttImage>
          <img src={CardLogo} alt="card logo" />
          <div>
            <h2> 0000 0000 0000 0000</h2>
            <div>
              <p>JANE APPLESEED</p>
              <p>00/00</p>
            </div>
          </div>
        </FronttImage>
      </Imagediv>
    </CardsDiv>
  );
}

const CardsDiv = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("public/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-size: 100% 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Imagediv = styled.div`
  width: 375px;
  height: 251px;
  position: relative;
`;

const BackImage = styled.div`
  position: absolute;
  top: 32px;
  left: 73px;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  background-image: url(/public/bg-card-back.png);
  background-repeat: no-repeat;
  background-size: 286px 157px;

  p {
    position: absolute;
    font-size: 9px;
    font-weight: 500;
    line-height: 11px;
    letter-spacing: 1.2857142686843872px;
    text-align: right;
    top: 73.64px;
    right: 37px;
    color: #ffffff;
  }
`;

const FronttImage = styled.div`
  position: absolute;
  top: 121px;
  left: 17px;
  width: 285px;
  height: 156.21px;
  border-radius: 6px;
  background-image: url(/public/bg-card-front.png);
  background-repeat: no-repeat;
  background-size: 285px 156.21px;
  padding: 19px;
  display: flex;
  flex-direction: column;
  gap: 37px;

  img {
    width: 54px;
    height: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 17px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        font-size: 9px;
        font-weight: 500;
        line-height: 11px;
        letter-spacing: 1.2857142686843872px;
        text-align: left;
        color: #ffffff;
      }
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 2.200000047683716px;
    text-align: left;
    color: #ffffff;
  }
`;

export default BankCards;
