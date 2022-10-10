import App from '@/app'
import IndexRoute from '@/routes/index.route'
import UserRoute from './routes/user.route'

const routes = [new IndexRoute(), new UserRoute()]

const app = new App(routes)

app.listen()
