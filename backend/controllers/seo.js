import axios from "axios";

export const createreq = async (req, res) => {
  try {
    console.log("Request Body: -- 1", req.body); 
    const userTarget = req.body.search;
    console.log("userTarget", userTarget);
    const postObject = {
      url: userTarget,
      // max_crawl_pages: 10,
      load_resources: true,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
      // tag: "some_string_123",
      // pingback_url: "https://your-server.com/pingscript?id=$id&tag=$tag"
    };

    console.log("data   -2 ", postObject);
    const API_USERNAME = "rajatchauhan02736@gmail.com";
    const API_PASSWORD = "4ec7fb0ec4c862a5";

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

export const generatereq = async (req, res) => {
  console.log("called");
    const { id } = req.params;
    console.log("id", id);
    const API_USERNAME = "rajatchauhan02736@gmail.com";
    const API_PASSWORD = "4ec7fb0ec4c862a5";
  
    try {
      const response = await axios.get(
        `https://api.dataforseo.com/v3/on_page/summary/${id}`,
        {
          auth: {
            username: API_USERNAME,
            password: API_PASSWORD,
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error("GET Error:", error);
      res.status(500).json({ error: "An error occurred while fetching data." });
    }
  };
  
