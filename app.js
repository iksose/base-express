import express from 'express';
import bodyParser from 'body-parser';
import * as controllers from './controllers/exports';

const app = express();
const port = process.env.port || 3000;

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(controllers.index)

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
