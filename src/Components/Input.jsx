import { useState } from "react";
import styled from "styled-components";

function Input() {
  return (
    <InputContainer>
      <div>
        <h2>CARDHOLDER NAME</h2>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>
      <div>
        <h2>CARD NUMBER </h2>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
      </div>

      <div className="bottom-div">
        <div id="title">
          <h2>EXP. DATE (MM/YY) &nbsp; &nbsp; &nbsp; &nbsp;CVC</h2>
        </div>
        <div id="monyear">
          <select type="number" id="month">
            <option defaultValue="" disabled>
              MM
            </option>
            <option value="1"> 01 </option>
            <option value="1"> 02 </option>
            <option value="1"> 03 </option>
            <option value="1"> 04 </option>
            <option value="1"> 05 </option>
            <option value="1"> 06 </option>
            <option value="1"> 07 </option>
            <option value="1"> 08 </option>
            <option value="1"> 09 </option>
            <option value="1"> 10 </option>
            <option value="1"> 11 </option>
            <option value="1"> 12 </option>
          </select>

          <select id="year" type="age" min="2023" max="2027" required>
            <option defaultValue="" disabled>
              YY
            </option>
            <option value="2023"> 2023 </option>
            <option value="2024"> 2024 </option>
            <option value="2025"> 2025 </option>
            <option value="2026"> 2026 </option>
            <option value="2027"> 2027 </option>
          </select>
          <div>
            <input
              id="cvc"
              type="number"
              minLength="3"
              maxLength="3"
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </div>
      <button> Confirm</button>
    </InputContainer>
  );
}

const InputContainer = styled.main`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 1024px) {
    max-width: 381px;
    gap: 26px;
  }

  h2 {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 2px;
    text-align: left;
    color: #21092f;
  }

  input {
    width: 327px;
    height: 45px;
    border: 1px solid #dfdee0;
    border-radius: 8px;
    padding: 11px 0 11px 16px;
    ::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0px;
      text-align: left;
    }

    @media (min-width: 1024px) {
      width: 381px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 9px;
    @media (min-width: 1024px) {
      gap: 10px;
    }
  }

  .bottom-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    @media (min-width: 1024px) {
      gap: 10px;
    }

    #title {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    #monyear {
      display: flex;
      flex-direction: row;
    }

    #month {
      width: 72px;
      height: 45px;
      border: 1px solid #dfdee0;
      background-color: #ffff;
      border-radius: 8px;
      @media (min-width: 1024px) {
        width: 85px;
      }
    }

    #year {
      width: 72px;
      height: 45px;
      border: 1px solid #dfdee0;
      background-color: #ffff;
      border-radius: 8px;
      @media (min-width: 1024px) {
        width: 85px;
      }
    }

    #cvc {
      width: 164px;
      height: 45px;
      @media (min-width: 1024px) {
        width: 191px;
      }
    }
  }

  button {
    width: 327px;
    height: 53px;
    border-radius: 8px;
    background-color: #21092f;
    color: #ffffff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
    @media (min-width: 1024px) {
      width: 381px;
    }
  }
`;

export default Input;
