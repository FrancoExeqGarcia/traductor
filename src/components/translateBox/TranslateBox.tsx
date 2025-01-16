import React from "react";
import "./TranslateBox.css";

type TranslateBoxProps = {
  onTranslate: (text: string) => void;
};

const TranslateBox: React.FC<TranslateBoxProps> = ({ onTranslate }) => {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTranslate(text);
  };

  return (
    <div className="translate-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-to-translate">Texto para traducir:</label>
        <textarea
          id="text-to-translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe el texto aquí..."
        ></textarea>
        <button type="submit">Traducir</button>
      </form>
    </div>
  );
};

export default TranslateBox;
