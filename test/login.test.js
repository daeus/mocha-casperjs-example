describe('Duck Duck Go', function() {
    before(function() {
        casper.start('https://duckduckgo.com/');
    });
    it('It should have a search bar', function() {
        casper.waitForSelector('#search_form_input_homepage', function() {
            '#search_form_input_homepage'.should.be.inDOM;
        });
    });
});