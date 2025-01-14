export default class Translate {
  private baseUrl: string = import.meta.env.VITE_API_URL || "https://translate-backend-274548491076.us-central1.run.app/api";

  async translatetext(text: string, targetLang: string, sourceLang: string = "auto") {
    if (!text || !targetLang) {
      throw new Error("Texto o idioma faltante.");
    }

    try {
      const response = await fetch(`${this.baseUrl}/Translate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
         // format: "text",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error de la API:", errorData);
        throw new Error("Error al traducir.");
      }

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Error en la API de traducción:", error);
      throw error;
    }
  }
}