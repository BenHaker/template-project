"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckDoc = void 0;
exports.healthCheckDoc = {
    tags: ['healthcheck'],
    description: "Return if the service is healthy",
    operationId: 'healthcheck',
    responses: {
        "200": {
            description: "Service is healthy.",
        }
    }
};
//# sourceMappingURL=healthcheckDoc.js.map