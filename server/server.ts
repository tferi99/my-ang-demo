
import * as express from 'express';
import {Application} from 'express';
import {getAllCourses, getAllCoursesRandomErr, getAllCoursesSlowly, getCourseById} from './get-courses.route';
import {searchLessons} from './search-lessons.route';
import {saveCourse} from './save-course.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

<<<<<<< HEAD
app.get('/api/courses', getAllCourses);
app.get('/api/courses/slow', getAllCoursesSlowly);


/*
app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/slow').get(getAllCoursesSlowly);

app.route('/api/courses/randomerr').get(getAllCoursesRandomErr);
=======
app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/randomerr').get(getAllCoursesRandomErr);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);
>>>>>>> 39d8d8b9650e9d0cb3057fd282a4b8b89498f048

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);
*/


const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});



