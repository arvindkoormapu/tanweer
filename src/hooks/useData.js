import headerData from "../content/header.json";
import footerData from "../content/footer.json";
import homeData from "../content/home.json";
import programList from "../content/program_list.json"
import about from "../content/about.json"
import programs from "../content/programs.json"

export const useData = () => {
  return {
    pages: {
      header: headerData,
      footer: footerData,
      home: homeData,
      programList: programList,
      about: about,
      programs: programs
    },
  };
};
