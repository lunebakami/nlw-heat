import { Request, Response } from 'express';
import { CreateMessage } from '../services/CreateMessage';

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;

    const messageService = new CreateMessage();

    const result = await messageService.execute(message, user_id);

    return res.json(result);
  }
}

export default new CreateMessageController();
