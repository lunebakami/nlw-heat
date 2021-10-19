import { Request, Response } from 'express';
import { ProfileUser } from '../services/ProfileUser';

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const profileUser = new ProfileUser();

    const result = await profileUser.execute(req.user_id);

    return res.json(result);
  }
}

export default new ProfileUserController();
