import React from "react";
import "./MenuLanguage.css";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

function MenuLanguage({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (code: string) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className="menu-language">
      <label htmlFor="language-select">Selecciona un idioma:</label>
      <select id="language-select" value={value} onChange={handleChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MenuLanguage;
