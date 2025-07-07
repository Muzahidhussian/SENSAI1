import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career-coach", // Unique app ID
  name: "Career Coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
    fetch: async (url, options) => {
    // Force the correct API path
    const newUrl = url.replace("/.netlify/functions/inngest", "/api/inngest");
    return fetch(newUrl, options);
  },

  },
});