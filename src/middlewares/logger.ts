import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  // start timer
  const start = Date.now();
  console.log(
    `:: ${req.method} ${req.originalUrl}:: Started ${new Date(
      start
    ).toLocaleString()}]`
  );
  res.on('finish', () => {
    // calculate time cost
    const timeCost = Date.now() - start;
    // display time cost
    console.log(
      `      :: ${req.method} ${req.originalUrl} ${res.statusCode} ::cost ${timeCost}ms]
      ----------------------------------------------------------`
    );
  });

  next();
};

export default logger;
