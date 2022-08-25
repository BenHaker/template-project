import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument } from './swagger/swagger.js';
var PORT = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get('/healthcheck', function (req, res) {
    res.send('Service is Up');
});
app.listen(PORT, function () { return console.log("Running on ".concat(PORT)); });
//# sourceMappingURL=index.js.map