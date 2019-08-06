import {Request, Response} from 'express';
import {COURSES, GRIDSTER} from './db-data';
import {setTimeout} from 'timers';

export function getGridster(req: Request, res: Response) {

  res.status(200).json(GRIDSTER);
}

export function saveGridster(req: Request, res: Response) {
  const data = req.body;

  console.log('Saving gridster');
  GRIDSTER.grids = data.grids;

  setTimeout(() => {
    res.status(200).json({});
  }, 2000);
}
