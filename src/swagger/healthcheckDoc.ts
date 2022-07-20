export const healthCheckDoc = {
    tags: ['healthcheck'],
    description: "Return if the service is healthy",
    operationId: 'healthcheck',
    responses: {
        "200": {          
            description: "Service is healthy.",
        }
    }
}