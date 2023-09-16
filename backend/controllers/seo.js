import axios from "axios";

export const createreq = async (req, res) => {
  try {
    console.log("Request Body: -- 1", req.body); 
    const userTarget = req.body.search;

    const postObject = {
      target: userTarget,
      max_crawl_pages: 10,
      load_resources: true,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
      tag: "some_string_123",
      pingback_url: "https://your-server.com/pingscript?id=$id&tag=$tag"
    };

    console.log("data   -2 ", postObject);
    const API_USERNAME = "gamerplayer1357@gmail.com";
    const API_PASSWORD = "014ffc2c5ea4cd7b";

    const response = await axios.post(
      "https://api.dataforseo.com/v3/on_page/task_post",
      [postObject],
      {
        auth: {
          username: API_USERNAME,
          password: API_PASSWORD,
        },
      }
    );
    
    // const taskId = response.data.tasks[0].id;
    // generatereq(taskId, res); 
    res.json(response.data);

  } catch (error) {
    console.error("POST Error:", error);
  }
};

export const generatereq = async (id, res) => {
  console.log("called");
  const API_USERNAME = "gamerplayer1357@gmail.com";
  const API_PASSWORD = "014ffc2c5ea4cd7b";

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
