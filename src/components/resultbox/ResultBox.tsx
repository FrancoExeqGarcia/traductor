import React from "react";
import "./ResultBox.css";

type ResultBoxProps = {
  translatedText: string;
};

const ResultBox: React.FC<ResultBoxProps> = ({ translatedText }) => {
  return (
    <div className="result-box">
      <label htmlFor="translated-text">Resultado de la traducción:</label>
      <textarea
        id="translated-text"
        value={translatedText}
        readOnly
      ></textarea>
    </div>
  );
};

export default ResultBox;
