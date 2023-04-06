const express = require("express"); // runs http server
const cors = require("cors"); // calls cors from any server
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username},
            {headers: {"private-key": "6c3c8e1e-e984-4e6e-ae13-a0a4dab0bcfd"} }
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);