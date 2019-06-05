import * as express from 'express';
import {Application} from 'express';
import {getAllCourses, getAllCoursesRandomErr, getAllCoursesSlowly, getCourseById} from './get-courses.route';
import {searchLessons} from './search-lessons.route';
import {saveCourse} from './save-course.route';
import {loginUser} from './auth.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

// REST API
app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/randomerr').get(getAllCoursesRandomErr);
app.route('/api/courses/slow').get(getAllCoursesSlowly);
app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9001, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});



