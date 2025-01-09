export default class Translate {
  private baseUrl: string = import.meta.env.VITE_API_URL || "https://translation.googleapis.com/language/translate/v2";
  private apiKey: string = import.meta.env.VITE_API_KEY || "";

  async translatetext(text: string, targetLang: string, sourceLang: string = "auto") {
    if (!this.apiKey) {
      throw new Error("Clave API no configurada.");
    }

    if (!text || !targetLang) {
      throw new Error("Texto o idioma faltante.");
    }

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: "text",
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
