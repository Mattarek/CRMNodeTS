import { Request, Response, NextFunction } from "express";
import Client from "../../models/clients";
import errorHandler from "../../errors/errorHandler";
import asyncWrapperError from "../../errors/asyncWrapper";

export const getClient = asyncWrapperError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const task = await Client.findOne({ _id: id });
    if (!task) {
      return next(errorHandler(`Client not found with login: ${id}`, 404));
    }
    res.status(200).json({ task });
  }
);

export const getAllClients = async (req: Request, res: Response) => {
  console.log("Cookies: ", req);
  const clients = await Client.find({});
  res.status(200).json({ clients });
};

export const createClient = asyncWrapperError(
  async (req: Request, res: Response) => {
    const task = await Client.create(req.body);
    res.status(201).json({ task });
  }
);

export const updateClient = asyncWrapperError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId } = req.params;
    const client = await Client.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!client) {
      return next(errorHandler(`No client with id ${userId}`, 404));
    }
    res.json({ client });
  }
);

export const deleteClients = asyncWrapperError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: deleteUserId } = req.params;
    const deleteUser = await Client.findOneAndDelete({ _id: deleteUserId });
    if (!deleteUser) {
      return next(errorHandler(`No client found with id ${deleteUserId}`, 404));
    }
    res.status(200).json({ deleteUser });
  }
);
