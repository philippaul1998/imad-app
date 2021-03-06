var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
    'article-one': {
        title: 'Article One|Philip',
        head: 'Article One',
        date: '5 August 2017',
        content: ` 
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>`},
    'article-two': {
        title: 'Article Two|Philip',
        head: 'Article Two',
        date: '10 August 2017',
        content: ` 
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>`},
    'article-three': {
        title: 'Article Three|Philip',
        head: 'Article Three',
        date: '15 August 2017',
        content: ` 
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>
    		<p>This is an article.This is an article.
    		This is an article.This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		This is an article.This is an article.
    		</p>`}
};
function createtemplate(data){
    var title=data.title;
    var head=data.head;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`
            <html>
            	<head>
            		<title>${title}</title>
            		<meta name="viewport" content="width=device-width, initial-scale=1"/>
            		<link href="/ui/style.css" rel="stylesheet"/>
            	</head>
            	<body>
            	    <div class="container fadeInUp animated">
            		<div  class="left animated"><a href="/"><button class="art">Home</button></a>
            	   	<hr/></div>
            		<div><h3>${head}</h3></div>
            		<div>${date}</div>
            		<div>
            		${content}</div>
            		</div>
            	</body>
            </html>
    `;
    return htmltemplate;
    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names=[];
app.get('/submit-name', function (req, res) {
  var name=req.query.name;
  names.push(name);
  
  res.send(JSON.stringify(names));
});

var count=0;
app.get('/counter', function (req, res) {
    count=count+1;
  res.send(count.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/blur.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blur.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
