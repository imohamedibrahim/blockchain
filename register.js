
$(document).ready(function(){
    $("#submit").click(function(){
      var UserName = $('#usr').val();
      var UserBalance = 100;
      var UserPhoneNo = $('#Phoneno').val();
      var id =Math.floor((Math.random() * 100000) + 1);
      var UserCountry = $('#country option:selected').text();
      var UserState = $('#state option:selected').text();
      var status=contractInstance.adduser(web3.fromAscii(String(UserState),32),web3.fromAscii(String(UserName),32),parseInt(UserPhoneNo),parseInt(id),{from: web3.eth.accounts[0]});
      alert(String(id));
    });
 });
 $(function(){
      //Set button disabled
      $("input[type=submit]").attr("disabled", "disabled");
      //Append a change event listener to you inputs
      $('input').change(function(){
            //Validate your form here, example:
            var validated = true;
            if($('#usr').val().length === 0) validated = false;
            if($('#Phoneno').val().length === 0) validated = false;
            //If form is validated enable form
            if(validated) $("input[type=submit]").removeAttr("disabled");
      });
      //Trigger change function once to check if the form is validated on page load
      $('input:first').trigger('change');
})



