import React, { useState } from 'react';
import './TranslateBox.css';

interface TranslateBoxProps {
  onTranslate: (text: string) => void; 
}

function TranslateBox({ onTranslate }: TranslateBoxProps) {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleTranslate = () => {
    if (text.trim()) {
      onTranslate(text); 
    } else {
      alert('Por favor, ingresa texto para traducir.');
    }
  };

  return (
    <div className="translate-box">
      <label htmlFor="translate-input">Texto para traducir:</label>
      <textarea
        id="translate-input"
        value={text}
        onChange={handleChange}
        placeholder="Escribe el texto aquí..."
      ></textarea>
      <button onClick={handleTranslate} className="translate-button">
        Traducir
      </button>
    </div>
  );
}

export default TranslateBox;
