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

const CardsDiv = styled.header`
  width: 100%;
  height: 240px;
  background-image: url(/public/bg-main-mobile.png);
  background-repeat: no-repeat;
  background-size: 100% 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 91px;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 483px;
    height: 100vh;
    background-image: url(/public/bg-main-desktop.png);
    background-size: 483px 100%;
    margin-bottom: 0px;
  }
`;

const Imagediv = styled.div`
  width: 375px;
  height: 251px;
  position: relative;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 541px;
    height: 527px;
    box-shadow: 0px 39px 60px rgba(0, 0, 0, 0.142481);
  }
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
  box-shadow: 0px 39px 60px rgba(0, 0, 0, 0.142481);
  @media (min-width: 1024px) {
    width: 447px;
    height: 245px;
    top: 275px;
    left: 258px;
    background-size: 447px 245px;
  }

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
    @media (min-width: 1024px) {
      top: 110px;
      right: 55px;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 2px;
      text-align: right;
    }
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
  box-shadow: 0px 39px 60px rgba(0, 0, 0, 0.142481);
  @media (min-width: 1024px) {
    width: 447px;
    height: 245px;
    top: -5px;
    left: 180px;
    background-size: 447px 245px;
    padding: 32px;
    gap: 64px;
  }

  img {
    width: 54px;
    height: 30px;
    @media (min-width: 1024px) {
      width: 84px;
      height: 47px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 17px;
    @media (min-width: 1024px) {
      gap: 25.5px;
    }

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
        @media (min-width: 1024px) {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 2px;
          text-align: left;
        }
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
    @media (min-width: 1024px) {
      font-size: 28px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 3.422222137451172px;
      text-align: left;
    }
  }
`;

export default BankCards;
