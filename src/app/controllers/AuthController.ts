import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthController {
  authenticate(req: Request, res: Response) {
    const { username, password } = req.body;

    if(!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    // In a real application, the username and password must be compared to the information recorded in the database.
    if (username !== 'admin' || password !== 'admin') {
      return res.sendStatus(401);
    }
    // For application security, it is advisable that the secret be recorded in an .env file and the same be added to .gitignore
    const token = jwt.sign({}, 'secret', { expiresIn: '1d' });

    res.json(token);
  }
}

export default new AuthController();
