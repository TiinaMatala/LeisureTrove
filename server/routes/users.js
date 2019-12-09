var express = require('express');
var router = express.Router();
var users = require('../models/users');
const Strategy = require('passport-http').BasicStrategy;
const bcrypt = require('bcryptjs');
var db = require('../database');


/* passport.use(new Strategy((email, password, cb) => {
  db.query('SELECT id, email, password FROM users WHERE email = ?', [email]).then(dbResults => {

    if(dbResults.length == 0)
    {
      return cb(null, false);
    }

    bcrypt.compare(password, dbResults[0].password).then(bcryptResult => {
      if(bcryptResult == true)
      {
        cb(null, dbResults[0]);
      }
      else
      {
        return cb(null, false);
      }
    })

  }).catch(dbError => cb(err))
}));
 */
router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    users.getById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    users.get(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  users.add(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});


router.delete('/:id', 
  function(req, res, next) {
  users.delete(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', 
  function(req, res, next) {
  users.update(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


//login with crypted passwords
router.post('/login', function(request, response) {
  var loginPassword=request.body.password;
	var email = request.body.email;
  console.log('send email:',email);
  if (email && loginPassword) {
	db.query('SELECT * FROM users WHERE email = ?', 
    [email], function(error, results, fields) {
			if (results.length > 0) {
        if(bcrypt.compareSync(loginPassword, results[0].password)){
          response.send(results[0].id.toString());
          console.log("id=",results[0].id);
        }

			} else {
        console.log("unsuccessful");
				response.send(false);
			}			
			response.end();
		});
	} else {
		response.send('Please enter Email and Password!');
		response.end();
	}
}); 


module.exports = router;
