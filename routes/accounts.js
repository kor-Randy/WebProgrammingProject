module.exports = function(app,Account)
{
    var account = new Account();
    //account.name = "taek";
    app.post('/api/accounts', function(req, res){
        account.name = req.body.name;     
        
    
        account.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
            res.json({result: 1});
    
        });
    });

    app.get('/api/accounts', function(req,res){
        Account.find(function(err, accounts){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(accounts);
        })
    });
}