import { Request, Response } from 'express';
import { GetLastMessages } from '../services/GetLastMessages';

class GetLastMessagesController {
  async handle(req: Request, res: Response) {
    const lastMessagesService = new GetLastMessages();

    const result = await lastMessagesService.execute();

    return res.json(result);
  }
}

export default new GetLastMessagesController();
