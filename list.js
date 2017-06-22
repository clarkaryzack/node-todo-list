var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var list
var newitem;
var newitemformatted

var app = express();

var html = '<h1>Things to do.</h1>' +
							'<form action="/" method="post">' +
							'<input type="text" name="newitem" placeholder="Enter new to-do item." />' +
							'<button type="submit">add new item</button>' +
						'</form>'
var html2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(expressValidator());

app.get('/', function(req,res){
	res.send(html);
})

app.post('/', function(req,res){
		newitem = req.body.newitem;
		req.checkBody('newitem').notEmpty();
		var errors = req.validationErrors();
			if (errors) {
				html2 = html + '<h2>DO SOMETHING.</h2>'
				res.send(html2);
				html2 = null
			} else {
				newitemformatted = '<input type="checkbox"><label>' + newitem + '</label></input><br>'
				html += newitemformatted
				res.send(html);
			}
});

app.listen(3000, function(){
  console.log('Started express application!')
});
