
module.exports = function errorHandler( err, req, res, next ) {
    console.error('Oh no, you have an error!', err.message);
    res.status(err.status || 400);
    res.json({ message: err.message, time: Date.now() });
};
