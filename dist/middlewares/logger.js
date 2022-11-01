"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    // start timer
    const start = Date.now();
    console.log(`:: ${req.method} ${req.originalUrl}:: Started ${new Date(start).toLocaleString()}]`);
    res.on('finish', () => {
        // calculate time cost
        const timeCost = Date.now() - start;
        // display time cost
        console.log(`      :: ${req.method} ${req.originalUrl} ${res.statusCode} ::cost ${timeCost}ms]
      ----------------------------------------------------------`);
    });
    next();
};
exports.default = logger;
