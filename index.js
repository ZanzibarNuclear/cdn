import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Resolve __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify()
const options = {}

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept', 'Set-Cookie', 'X-Session-Token'],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
})

// Register the static plugin
app.register(fastifyStatic, {
  root: join(__dirname, 'public'),
  prefix: '/static/', // URL prefix for accessing static files
})

// Start the server
const start = async () => {
  try {
    await app.listen({ port: 3031 })
    console.log('WoN CDN Service listening at http://localhost:3031')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
