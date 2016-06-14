var express = require('express'),
    router = express.Router(),
    Article = require('../models/Article');

router.get('/', function(req, res, next) {
    // console.log('get article');
    Article.find(function(err, articles){
        if(err){
            res.json(err);
        }else{
            res.json(articles);
        }
    });
});

router.get('/:id', function(req, res, next){
    Article.findById(req.params.id, function(err, article){
        if(err){
            res.json(err);
        }else{
            res.json(article);
        }
    })
});

router.post('/',function(req, res){
    // console.log(req.body);
    Article.create(req.body, function(err, article){
       if(err){
           res.json(err);
       }else{
           res.json(article); 
       }
    });
});

router.put('/:id', function(req, res){
    Article.findByIdAndUpdate(req.params.id, req.body, {new: true},function(err, new_article){
        if(err){
            res.json(err);
        }else{
            res.json(new_article);
        }
    })
});

router.delete('/:id', function(req, res){
    Article.findByIdAndRemove(req.params.id, function(err, old_article){
        if(err){
            res.json(err);
        }else{
            res.json(old_article);
        }
    });
});



module.exports = router;