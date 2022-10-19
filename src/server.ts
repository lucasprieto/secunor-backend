import App from '@/app'
import IndexRoute from '@/routes/index.route'
import ProveedorRoute from './routes/proveedor.route'
import UserRoute from './routes/user.route'

const routes = [new IndexRoute(), new UserRoute(), new ProveedorRoute()]

const app = new App(routes)

app.listen()
