

import {Request, Response} from 'express';
import {COURSES, login, logout} from './db-data';


export function loginUser(req: Request, res: Response) {
  setTimeout(() => {
    console.log('User login attempt ...');
    const {email, password} = req.body;
    const user = login(email, password);
    if (user) {
      res.status(200).json({id: user.id, email: user.email});
    } else {
      res.sendStatus(403);
    }
  }, 100);
}

export function logoutUser(req: Request, res: Response) {
  console.log('User logout');
  const {email} = req.body;
  const username = logout(email);
  if (username) {
    res.status(200).json({username});
  } else {
    res.sendStatus(403);
  }
}
