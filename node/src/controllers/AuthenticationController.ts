import { Request, Response } from 'express';
import { AuthenticateUser } from '../services/AuthenticateUser';

class AuthenticationController {
  async handle(req: Request, res: Response) {
    const authService = new AuthenticateUser();
    const { code } = req.body;

    try {
      const result = await authService.execute(code);

      return res.json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default new AuthenticationController();
