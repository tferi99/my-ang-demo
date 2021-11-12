import {Request, Response} from 'express';
import {LESSONS} from './db-data';
import {setTimeout} from 'timers';



export function searchLessons(req: Request, res: Response) {

    const queryParams = req.query;
    console.log('SEARCH params:', queryParams);

    const courseId = queryParams.courseId;
    const filter = queryParams.filter || '';
    const sortOrder = queryParams.sortOrder || 'asc';
    const pageNumber = queryParams.pageNumber ? parseInt(queryParams.pageNumber.toString(), 10) : 0;
    const pageSize = queryParams.pageSize ? parseInt(queryParams.pageSize.toString(), 10) : 1000;

    let lessons = Object.values(LESSONS).filter(lesson => lesson.courseId.toString() === courseId).sort((l1, l2) => l1.id - l2.id);
    if (filter) {
       lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toString().toLowerCase()) >= 0);
    }
    if (sortOrder === 'desc') {
        lessons = lessons.reverse();
    }

    const initialPos = pageNumber * pageSize;
    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: lessonsPage});
    }, 1000);
}
