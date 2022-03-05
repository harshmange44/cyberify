const router = require("express").Router();
const axios = require('axios');
const { response } = require("express");
var utils = require('../utils/HelperFunctions');
const crypto = require('crypto');

//GET All Site Breaches
router.get("/allsitebreaches", async (req, res) => {
  axios
  .get('https://haveibeenpwned.com/api/v2/breaches')
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(error => {
    console.error("Error: "+error)
    res.status(500).send(error);
  })
});

//GET Site Breaches
router.get("/:sitename", async (req, res) => {
  axios
  .get('https://haveibeenpwned.com/api/v2/breach/'+req.params.sitename)
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(error => {
    console.error(error)
    res.status(500).json(error);
  })
});

//GET Email Breaches
router.get("/emailbreach/:emailId", async (req, res) => {
  if(!utils.ValidateEmail(req.params.emailId.toString())){
    return res.status(400).json("Invalid Email ID...")
  }

  // var refactoredEmailId = req.params.emailId.replace('@', '%40');
  axios
  .get('https://haveibeenpwned.com/unifiedsearch/'+req.params.emailId, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12.2; rv:97.0) Gecko/20100101 Firefox/97.0', 
  'Accept-Language': 'en-US,en;q=0.8' }  } )
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(error => {
    console.error(error.response.data)
    res.status(500).json(error.response.data);
  })
});

//GET Password Breaches
router.get("/passwordbreach/:password", async (req, res) => {

  var hashPwd = crypto.createHash('sha1').update(req.params.password).digest('hex');

  var sha1passwd5Char = hashPwd.substring(0,5);

  axios
  .get('https://api.pwnedpasswords.com/range/'+sha1passwd5Char)
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(error => {
    console.error(error)
    res.status(500).json(error);
  })
});

module.exports = router;
