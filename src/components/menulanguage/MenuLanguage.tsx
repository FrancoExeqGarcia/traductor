import React, { useState } from 'react';
import './MenuLanguage.css';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

function MenuLanguage({ onSelect }: { onSelect: (code: string) => void }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onSelect(newLanguage);
  };

  return (
    <div className="menu-language">
      <label htmlFor="language-select">Selecciona un idioma:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleChange}
      >
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
