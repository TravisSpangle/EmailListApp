function EmailGenerator() {
}
EmailGenerator.prototype.create_emails = function(amount, emails) {
  this.emails = (typeof emails !== 'undefined') ?  emails : [];

  for (var i = 1; i <= amount; i++) {
    this.emails.push("test_"+i+"@email.com");
  }
};
EmailGenerator.prototype.mix = function() {
  let count = this.emails.length;

  while (count > 0) {
    let index = Math.floor(Math.random() * count);
    count--;

    let temp = this.emails[count];
    this.emails[count] = this.emails[index];
    this.emails[index] = temp;
  }
};
EmailGenerator.prototype.duplicate_emails = function(percentage) {
  amount = this.emails.length * (percentage/100);
  this.create_emails(amount, this.emails);
};
