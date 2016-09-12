$("#submit_emails").on("click", function(){ 
  $.post( "uniq", { emails: $("#emails").val() })
  .done(function( data ) {
    $("#emails").val(data);
  })
  .fail(function() {
    console.log("error processing request");
  });
});

$("#create_emails").on("click", function(){ 
  var generator = new EmailGenerator();
  generator.create_emails(1000);
  generator.duplicate_emails(50);
  generator.mix();

  $("#emails").val(generator.emails.join(", "));
});
