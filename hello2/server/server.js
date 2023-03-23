const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({ msg: 'hello from server' });
});

app.listen(8080);
console.log('Server running on http://localhost:8080');