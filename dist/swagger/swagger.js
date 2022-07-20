"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
var healthcheckDoc_1 = require("./healthcheckDoc");
exports.swaggerDocument = {
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
            "get": healthcheckDoc_1.healthCheckDoc
        }
    }
};
//# sourceMappingURL=swagger.js.map