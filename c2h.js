

$(document).ready(function(){
        $('#details').hide();
        $("a").click(function(){
                var id = $('#id').val();
		var detailsForId = contractInstance.getuserdetails.call(parseInt(id));
                $("#details").show();
                $("#CustomerId").html(id);
                $("#CustomerName").html(''+web3.toAscii(detailsForId[0]));
		$("#CustomerState").html(''+web3.toAscii(detailsForId[1]));
                $("#CustomerBalance").html(''+detailsForId[2]);
		$("#CustomerPhoneNo").html(''+detailsForId[3]);
    });

        $("#clear").click(function(){
                $('#details').hide();
    });
});

