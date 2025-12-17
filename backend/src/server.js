import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import adminRoutes from './routes/adminRoutes.js'
import docentesRoutes from './routes/docentesRoutes.js'
import alumnosRoutes from './routes/alumnoRoutes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', adminRoutes)
app.use('/api', docentesRoutes)
app.use('/api', alumnosRoutes)

export default app