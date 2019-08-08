import {Request, Response} from 'express';
import {COURSES, SIMPLE_INPUT_VALUE} from './db-data';

export function getSimpleInputValue(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload: SIMPLE_INPUT_VALUE});
  }, 200);
}

export function saveSimpleInputValue(req: Request, res: Response) {
  const {value} = req.body;

  console.log('Saving simple input value', value);
  SIMPLE_INPUT_VALUE.value = value;

  setTimeout(() => {
    res.status(200).json(SIMPLE_INPUT_VALUE);
  }, 2000);
}
