import { Request, Response, NextFunction } from "express";

const asyncWrapperError = (func: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default asyncWrapperError;
