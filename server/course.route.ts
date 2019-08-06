import {Request, Response} from 'express';
import {COURSES} from './db-data';
import {setTimeout} from "timers";


export function getAllCourses(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload: Object.values(COURSES)});
  }, 200);
}

export function getAllCoursesSlowly(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload: Object.values(COURSES)});
  }, 1000);
}

/**
 * It generates error randomly.
 *
 * @param req
 * @param res
 */
export function getAllCoursesRandomErr(req: Request, res: Response) {
  const error = (Math.random() >= 0.4);
  if (error) {
    const errorTypeAuth = (Math.random() >= 0.5);
    if (errorTypeAuth) {
      console.log('ERROR loading courses$!');
      res.status(401).json({message: 'random auth error occurred.'});
    } else {
      console.log('ERROR loading courses$!');
      res.status(500).json({message: 'random server side error occurred.'});
    }
  } else {
    setTimeout(() => {
      res.status(200).json({payload: Object.values(COURSES)});
    }, 200);
  }
}


export function getCourseById(req: Request, res: Response) {
  const courseId = req.params['id'];
  const courses: any = Object.values(COURSES);
  const course = courses.find(course => course.id == courseId);
  res.status(200).json(course);
}

export function saveCourse(req: Request, res: Response) {

  const id = req.params['id'];
  const changes = req.body;

  console.log('Saving course', id, JSON.stringify(changes));
  COURSES[id] = {
    ...COURSES[id],
    ...changes
  };

  setTimeout(() => {
    res.status(200).json(COURSES[id]);
  }, 2000);
}
