"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/healthcheck', function (req, res) {
    res.send('Service is Up');
});
app.listen(PORT, function () { return console.log("Running on " + PORT); });
//# sourceMappingURL=index.js.map