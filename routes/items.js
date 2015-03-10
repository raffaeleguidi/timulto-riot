
/*
 * GET users listing.
 */

exports.list = function(req, res){
  var items = [
    { id: 1, title: 'Uno' },
    { id: 2, title: 'Due' },
    { id: 3, title: 'Tre' }
  ];
  res.send(items);
};
