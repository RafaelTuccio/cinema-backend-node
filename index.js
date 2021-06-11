const app = require("./src/config/expressConfig");


const PORT = 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

