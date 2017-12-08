var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
            console.log(cb);
        });
         
    },

    insert: function(col1, col2, col3, col4, val1, val2, val3, cb){
        orm.insertOne("burgers", col1, col2, col3, col4, val1, val2, val3, function(res){
            cb(res);
        });
    },
    
    


    // orm.selectAll();
    
    // orm.insertOne();
    
    // orm.updateOne();
};

module.exports = burger;