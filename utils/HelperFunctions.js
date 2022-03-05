module.exports.ValidateEmail = function(emailId) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailId.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}