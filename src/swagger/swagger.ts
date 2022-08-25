import { healthCheckDoc } from "./healthcheckDoc.js"

export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'Ben Haker',
            email: 'haker.ben@gmail.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/',
            description: 'Local Server'
        }
    ],
    paths: {
        "/healthcheck": {
            "get": healthCheckDoc
        }
    }
}