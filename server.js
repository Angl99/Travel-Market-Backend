const app = require('./index.js');

const PORT = 3015;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});