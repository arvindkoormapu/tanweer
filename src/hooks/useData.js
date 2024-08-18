import headerData from "../content/header.json";
import footerData from "../content/footer.json";
import homeData from "../content/home.json";

export const useData = () => {
  return {
    pages: {
      header: headerData,
      footer: footerData,
      home: homeData,
    },
  };
};
