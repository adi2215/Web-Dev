const apiLog = (req, res, next) => {
  const date = new Date();
  console.log(`[${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ` 
    + req.method + " " + req.path + " ");
  next();
};

module.exports = {apiLog}
