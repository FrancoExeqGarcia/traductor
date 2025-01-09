import { useState } from "react";
import Swal from "sweetalert2";
import "./index.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MenuLanguage from "./components/menulanguage/MenuLanguage";
import ResultBox from "./components/resultbox/ResultBox";
import Translate from "./services/Translate";
import TranslateBox from "./components/translateBox/TranslateBox";

function App() {
  const [sourceLanguage, setSourceLanguage] = useState<string>("en");
  const [targetLanguage, setTargetLanguage] = useState<string>("es");
  const [textToTranslate, setTextToTranslate] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>(
    "Aquí aparecerá tu traducción"
  );
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleTranslate = async (text: string) => {
    if (!text.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Texto vacío",
        text: "Por favor, ingresa texto para traducir.",
      });
      return;
    }

    if (sourceLanguage === targetLanguage) {
      Swal.fire({
        icon: "error",
        title: "Idiomas iguales",
        text: "Por favor, elige un idioma de destino diferente al de origen.",
      });
      return;
    }

    const translateService = new Translate();
    try {
      const result = await translateService.translatetext(
        text,
        targetLanguage,
        sourceLanguage
      );
      setTranslatedText(result);
    } catch (error) {
      console.error("Error al traducir:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al traducir el texto.",
      });
    }
  };

  return (
    <div>
      {/* Barra de navegación */}
      <Nav />

      {/* Contenido principal */}
      <main>
        <h1>Bienvenido al Traductor</h1>

        {/* Selección de idiomas */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <MenuLanguage
            value={sourceLanguage}
            onSelect={(code) => setSourceLanguage(code)}
          />
          <MenuLanguage
            value={targetLanguage}
            onSelect={(code) => setTargetLanguage(code)}
          />
        </div>

        {/* Caja de texto para ingresar */}
        <TranslateBox
          onTranslate={(text) => {
            setTextToTranslate(text);
            handleTranslate(text);
          }}
        />
        <p>Texto a traducir: {textToTranslate}</p>

        {/* Resultado de la traducción */}
        <ResultBox translatedText={translatedText} />
      </main>

      {/* Botón para alternar tema */}
      <button
        onClick={toggleTheme}
        style={{ margin: "1rem", padding: "0.5rem 1rem" }}
      >
        Cambiar a {isDarkMode ? "Tema Claro" : "Tema Oscuro"}
      </button>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}


export default App;
