import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export const app = fastify()


app.post('/partners', (request, reply) => {
    const registerBodySchema = z.object({
        
    })
})