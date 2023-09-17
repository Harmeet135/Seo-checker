import axios from "axios";
import dotenv from "dotenv"; 

dotenv.config();

export const createreq = async (req, res) => {
  try {
    let userTarget = req.body.search.trim();

    if (!userTarget.startsWith("http://") && !userTarget.startsWith("https://")) {
      if (userTarget.startsWith("www.")) {
        userTarget = "https://" + userTarget;
      } else {
        userTarget = "https://www." + userTarget;
      }
    }

    if (!userTarget.endsWith("/")) {
      userTarget += "/";
    }

    const postObject = {
      url: userTarget,
      max_crawl_pages: 10,
      load_resources: true,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
    };


    const API_USERNAME = process.env.API_USERNAME;
    const API_PASSWORD = process.env.API_PASSWORD;

    const response = await axios.post(
      "https://api.dataforseo.com/v3/on_page/instant_pages",
      [postObject],
      {
        auth: {
          username: API_USERNAME,
          password: API_PASSWORD,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("POST Error:", error);
  }
};
