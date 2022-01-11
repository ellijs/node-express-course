const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)   //=> GET / 2022
    // you MUST pass th next to pass to next middleware!!!! or sending the data
    next()
  }

  module.exports = logger