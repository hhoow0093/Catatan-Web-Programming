// import util from 'util';

function Logger(req, res, next) {
    // console.log(`Request Object: ${util.inspect(req, { showHidden: false, depth: null })}`);
    console.log(`url: ${req.url} method:${req.method}`);
    next();
}

export default Logger;