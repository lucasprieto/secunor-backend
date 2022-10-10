import App from '@/app'
import IndexRoute from '@/routes/index.route'

const routes = [new IndexRoute()]

const app = new App(routes)

app.listen()
