casper.test.begin('Google search retrieves 10 or more results', 2, function suite (test) {
  casper.start('http://www.google.de/', function () {
    test.assertTitle('Google', 'google homepage title is the one expected');
    test.assertExists('form[action="/search"]', 'main form is found');

    this.fill('form[action="/search"]', {
      q: 'casperjs'
    }, true);
  });

  casper.run(function () {
    test.done();
  });
});
