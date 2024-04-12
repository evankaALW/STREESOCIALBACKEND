const app = require('../STREESOCIALBACKEND/app')
const PORT = process.env.PORT || 8012;


//const PORT = process.env.PORT || 8012;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });