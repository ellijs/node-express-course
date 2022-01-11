const authorize = ( req, res, next ) => {
    // http://localhost:5000/?user=john
    const { user } = req.query
    if ( user === 'john' ) {
        req.user = { name: 'john', id: 3 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize