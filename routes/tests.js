module.exports = function(app,test)
{
    var test = new test();
    //account.name = "taek";
    app.post('/api/tests', function(req, res){
        test.test = req.body.test;     
        
    
        test.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
            res.json({result: 1});
    
        });
    });

    app.get('/api/tests', function(req,res){
        test.find(function(err, tests){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(tests);
        })
    });
}