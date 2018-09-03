$(document).ready(function(){
	        var userid = prompt("Enter user id","");
	        var video = $('#videoid');
	        var vid = 1;
	        var videocost = ''+contractInstance.video_id(parseInt(1));
	        var videocosttoowner = Math.round(parseInt(videocost)*0.8);
	        var videocosttopeer = Math.round(parseInt(videocost)*0.2);
	        $("#displayid").html(userid);
	        $("#displayvideoid").html(''+vid);
	        $("#displayvideocost").html(''+videocost);
			if (!Boolean(contractInstance.isbalanceremains.call(parseInt(userid),parseInt(1))) )
                {
                    alert("your balance is too low to play this video");
                    video[0].pause();
                    video[0].controls = false;
                }else{
	
			contractInstance.maketrasaction(parseInt(userid),1,{from: web3.eth.accounts[0]});
			contractInstance.splittransactiontoowner(web3.eth.accounts[1],videocosttoowner,{from: web3.eth.accounts[0]});
			 contractInstance.splittransactiontopeer(web3.eth.accounts[2],videocosttopeer,{from: web3.eth.accounts[0]});
                        alert(contractInstance.getpeerbalance.call(web3.eth.accounts[2]));
		}
			
	        $("#displaybalance").html(''+contractInstance.getbalance(parseInt(userid)));
 

	       //update HTML5 video current play time
                video.on('timeupdate', function() {
                    $('.current').text(video[0].currentTime);
                });

                //update HTML5 video current play time
                video.on('timeupdate', function() {
//console.log("hai");
                    var currentPos = video[0].currentTime; //Get currenttime
                    var maxduration = video[0].duration; //Get video duration
                    var percentage = 100 * currentPos / maxduration; //in %
//                    if(!contractInstance.isbalanceremains.call(parseInt(id))){
  //                     pause();
//		       alert("Your balance is too low to play this video");
//		       return;
  //                  }
//		    contractInstance.maketransaction(parseInt(id),1,{from: web3.eth.accounts[0]});
                        console.log(percentage);
                    // $('.timeBar').css('width', percentage+'%');
                });
        });



function pause(){
    $('body').on('hidden.bs.modal', '.modal', function () {
$('videoid').trigger('pause');
});
}
