import { Constants } from "@shared/constants/Constants";
import { NextFunction, Request, Response } from "express";
import AppError from "./AppError";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ statusCode: error.statusCode, message: error.message });
  }

  return res.status(Constants.HttpStatusCode.InternalServerError).json({ statusCode: Constants.HttpStatusCode.InternalServerError, message: 'Internal Server Error' });
}
