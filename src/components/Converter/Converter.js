import React from "react";
import "./Converter.css";
import { getCourse } from "../../utils/Api";

const Converter = ({ setLoaderActive }) => {
  const [firstSelectValue, setFirstSelectValue] = React.useState("BTC");
  const [secondSelectValue, setSecondSelectValue] = React.useState("USD");
  const [firstInputValue, setFirstInputValue] = React.useState("1");
  const [secondInputValue, setSecondInputValue] = React.useState("");

  React.useEffect(() => {
    setLoaderActive(true);
    getCourse(firstSelectValue, secondSelectValue)
      .then((res) => {
        setSecondInputValue(Object.values(res)[0] * firstInputValue);
      })
      .then(() => {
        setLoaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      }); // eslint-disable-next-line
  }, [firstSelectValue, secondSelectValue, firstInputValue]);

  function handleFirstSelectChange(e) {
    setFirstSelectValue(e.target.value);
    setLoaderActive(true);
  }

  function handleSecondSelectChange(e) {
    setSecondSelectValue(e.target.value);
    setLoaderActive(true);
  }

  function handleFirstInputChange(e) {
    setFirstInputValue(e.target.value);
    setLoaderActive(true);
  }

  return (
    <section className="converter">
      <h1 className="converter__title">Конвертер криптовалют</h1>
      <div className="converter__item">
        <input
          type="number"
          placeholder="1"
          className="converter__input"
          value={firstInputValue}
          onChange={handleFirstInputChange}
        ></input>
        <select
          className="converter__select"
          value={firstSelectValue}
          onChange={handleFirstSelectChange}
        >
          <option>USD</option>
          <option>BTC</option>
          <option>ETH</option>
        </select>
      </div>
      <div className="converter__item">
        <input
          type="number"
          disabled
          placeholder="1"
          className="converter__input"
          value={secondInputValue}
        ></input>
        <select
          className="converter__select"
          value={secondSelectValue}
          onChange={handleSecondSelectChange}
        >
          <option>USD</option>
          <option>BTC</option>
          <option>ETH</option>
        </select>
      </div>
    </section>
  );
};

export default Converter;
