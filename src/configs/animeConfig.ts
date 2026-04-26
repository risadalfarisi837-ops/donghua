interface animeConfig {
  donghuaku: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  donghuakuApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: animeConfig = {
  donghuaku: {
    siteName: "donghuaku",
    description: "Nonton donghua gratis ga pake karcis hanya di Sankadonghub",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/donghuaku.jpg",
  },

  donghuakuApi: {
    apiUrl: "https://www.sankavollerei.com",
    baseUrlPath: "/anime/donghua",
  },
};

export default animeConfig;