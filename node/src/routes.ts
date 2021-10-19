import { Router } from 'express';
import AuthenticationController from './controllers/AuthenticationController';
import CreateMessageController from './controllers/CreateMessageController';
import GetLastMessagesController from './controllers/GetLastMessagesController';
import ProfileUserController from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', AuthenticationController.handle);

router.get('/last_messages', GetLastMessagesController.handle);

router.post('/messages', ensureAuthenticated, CreateMessageController.handle);
router.get('/profile', ensureAuthenticated, ProfileUserController.handle);

export default router;
