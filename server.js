require('dotenv-safe').config();
const express = require('express');
var http = require('http');
const jwt = require('jsonwebtoken');
const httpProxy = require('express-http-proxy');
const app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;

const usersServiceProxy = httpProxy('http://localhost:5000');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({extended: false}));

var server = http.createServer(app);
server.listen(PORT);

function urlencodedParser() {
    return bodyParser.urlencoded({extended: false});
}

app.post('/login', urlencodedParser, (req, res, next) => {
    const user = req.body.user;
    const pwd = req.body.password;

    if (user === 'admin' && pwd === 'admin') {
        const id = 1;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json({auth: true, token: token});
    }

    res.status(500).json({message: 'Login inválido!'});
});

app.post('/logout', (req, res) => {
    res.json({auth: false, token: null});
});

app.get('/users', verifyJWT, (req, res, next) => {
    usersServiceProxy(req, res, next);
});


function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).json({
            auth: false, message: 'Token não informado.'
        });
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false, message: 'Falha ao autenticar o token.'
            });
        }

        req.userId = decoded.userId;
        next();
    });
}

