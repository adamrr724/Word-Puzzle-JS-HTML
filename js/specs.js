describe("hangman", function() {

  it("returns true if word has an e or o in it", function() {
    expect(hangman("hello")).to.eql('h-ll-');
  });

});
