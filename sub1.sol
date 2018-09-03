pragma solidity ^0.4.11;

contract Subscribe {
         mapping (address => int) public owners;
         mapping (address => int) public peers;
         int profitearned;
         mapping (int => details) public id_details;
         mapping (int => int) public video_id;
         struct details{
               bytes32 name;
               bytes32 city;
               int balance;
               int64 ph_no;
         }
         
        function getbalance(int tmpid) public view returns (int){
             return id_details[tmpid].balance;
         }
         
         function adduser(bytes32 tmpcity,bytes32 tmpname,int64 tmpph_no,int id) public payable returns (bool){
                    if(bytes32(tmpph_no).length != 0 && tmpcity.length != 0 && tmpname.length !=0){
                      id_details[id].name=tmpname;
                      id_details[id].city=tmpcity;
                      id_details[id].balance=0;
                      id_details[id].ph_no=tmpph_no;
                      return true;
                    }
               return false;
         }
         
         function addbalance(int tmpid,int incrementbalance) public payable returns (bool){
             id_details[tmpid].balance=id_details[tmpid].balance+incrementbalance;
             return true;
         }

         function getuserdetails(int tmpid) view public returns (bytes32 tmpname,bytes32 tmpcity,int tmpbalance,int64 tmpph_no) {
               return (id_details[tmpid].name,id_details[tmpid].city,id_details[tmpid].balance,id_details[tmpid].ph_no);
         }
         
         function isbalanceremains(int tmpid,int videoid) view public returns (bool){
             if (id_details[tmpid].balance - video_id[videoid] >= 0){
                 return true;
             }
             return false;
         }
         function addvideoid(int videoid, int price) public payable returns (bool){
             video_id[videoid]=price;
             return true;
         }
         
         function maketrasaction(int tmpid,int videoid) public payable returns (bool){
             if (id_details[tmpid].balance - video_id[videoid] >= 0){
                 id_details[tmpid].balance = id_details[tmpid].balance - video_id[videoid];
                 profitearned = profitearned + video_id[videoid];
             }
         }
         
         function splittransactiontopeer(address p,int amount) public payable returns (bool){
                         peers[p] = peers[p]+amount;
                         return true;
         }
         function splittransactiontoowner(address o,int amount)public payable returns(bool){
                         owners[o]=owners[o]+amount;
                         return true;
         }
         
         function gettransactionamount() view public returns (int){
             return profitearned;
         }
         
         function getpeerbalance(address p) public view returns (int){
             return peers[p];
         }
         
         function getownerbalance(address o) public view returns (int){
             return owners[o];
         }

}

