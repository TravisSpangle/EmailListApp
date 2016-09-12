describe("EmailGenerator", function() {
  var email_generator;

  beforeEach(function() {
    email_generator = new EmailGenerator();
  });

  it("should generate test_1@email.com as it's first email", function(){
    email_generator.create_emails(1);

    expect(email_generator.emails.length).toEqual(1);
    expect(email_generator.emails[0]).toEqual("test_1@email.com");
  });

  it("should duplicate email addresses", function(){
    email_generator.create_emails(10);
    email_generator.duplicate_emails(50);

    expect(email_generator.emails.length).toEqual(15);
  });

  it("should mix email addresses", function(){
    email_generator.create_emails(50);
    email_generator.mix();

    expect(email_generator.emails[0]).not.toEqual("test_1@email.com");
    expect(email_generator.emails[49]).not.toEqual("test_50@email.com");
  });
});
