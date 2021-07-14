const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, Universe!');
})

app.listen(port, () => console.log(`App is running at port ${port}`));

