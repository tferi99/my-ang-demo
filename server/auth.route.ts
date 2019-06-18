

import {Request, Response} from 'express';
import {login, logout} from './db-data';


export function loginUser(req: Request, res: Response)
{
    console.log('User login attempt ...');
    const {email, password} = req.body;
    const user = login(email, password);
    if (user) {
        res.status(200).json({id: user.id, email: user.email});
    } else {
        res.sendStatus(403);
    }
}

export function logoutUser(req: Request, res: Response)
{
  console.log('User logout');
  const {email} = req.body;
  const user = logout({});
  if (user) {
    res.status(200).json();
  } else {
    res.sendStatus(403);
  }
}
