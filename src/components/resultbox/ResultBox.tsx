import './ResultBox.css';

interface ResultBoxProps {
  translatedText: string;
}

function ResultBox({ translatedText }: ResultBoxProps) {
  return (
    <div className="result-box">
      <label htmlFor="result-output">Resultado de la traducción:</label>
      <textarea
        id="result-output"
        value={translatedText}
        readOnly
        placeholder="El texto traducido aparecerá aquí..."
      ></textarea>
    </div>
  );
}

export default ResultBox;
