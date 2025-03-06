const express = require('express');
const cors = require('cors');
const {apiLog} = require('./logger');

const albumRoutes = require('./routes/albumRoutes');

app = express();
app.use(express.json());
app.use(apiLog)
app.use(cors());
app.use("/albums", albumRoutes);



app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})
