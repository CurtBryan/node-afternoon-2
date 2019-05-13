const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const mc = require("./controllers/messageControllers");
const port = 3001;
const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
  console.log(`Server listening creepily on port ${port}`);
});
