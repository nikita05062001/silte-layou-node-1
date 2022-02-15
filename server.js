const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./nodemailer");

const app = express();
const PORT = 3001;

let user = undefined;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.post('/index', (req, res) => {
  if (!req.body.house) return res.sendStatus(400)

  const message = {
    from: "Mailer Test<podvorie.baza@bk.ru>",
    to: "podvorie.baza@bk.ru",
    subject: `Поступил новый заказ! от: ${req.body.email}`,
    html: `
    <div>
      <div style="font-size=30; color:green;">
        <p>Почта клиента: ${req.body.email}</p>
      </div>
      <div style="font-size=20; color:white";>
      <p>Телефон клиента: ${req.body.phone}</p>
      <p>Дом который выбрал клиент: ${req.body.house}</p>
      <p>Сообщение от клиента: ${req.body.text}</p>
      </div>
    </div>
        `
  }
  mailer(message);
  user = req.body;
  res.redirect('/index')

})


app.get('/index', (req, res) => {
  if (typeof user !== 'object') return res.sendFile(__dirname + '/public/index.html')
  res.send(
    `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <div class="card">
        <div class="card-header">
          Запрос успешно отправлен!
        </div>
        <div class="card-body">
          <h5 class="card-title">Администратор ответ вам на почту или позвонит на мобильный телефон</h5>
          <p class="card-text">Пожалуйста перезагрузите страницу</p>
          <a href="http://localhost:3001/index" class="btn btn-primary">Перезагрузить</a>
        </div>
      </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  `)
  user = undefined;
})

app.listen(PORT, () => console.log(`server listaning at http://localhost:${PORT}/index`))