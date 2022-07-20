"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var swaggerUI = require('swagger-ui-express');
var swagger_1 = require("./swagger/swagger");
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger_1.swaggerDocument));
app.get('/healthcheck', function (req, res) {
    res.send('Service is Up');
});
app.listen(PORT, function () { return console.log("Running on ".concat(PORT)); });
//# sourceMappingURL=index.js.map