$("#submit_emails").on("click", function(){ 
  $.post( "uniq", { emails: $("#emails").val() })
  .done(function( data ) {
    $("#emails").val(data);
  })
  .fail(function() {
    console.log("error processing request");
  });
});
