import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
  // start timer
  const start = Date.now();
  // display som info
  console.log(
    `:: :${req.method} ${req.originalUrl}:: Started ${new Date(
      start
    ).toLocaleString()}]`
  );
  res.on("finish", () => {
    // calculate time cost
    const timeCost = Date.now() - start; // in milliseconds
    // log the request with duration
    console.log(
      `:: ${req.method} ${req.originalUrl} ${res.statusCode} ::cost ${timeCost}ms]`
    );
  });
  // call next middleware/function
  next();
};

export default logger;