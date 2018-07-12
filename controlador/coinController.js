var coin = new Coin();

flipCoin = function(){
	//debugger;
	var text = "";
	coin.flipCoin();
	if(coin.value===0){
		text = "HEAD";
	}

	else{
		text = "TAIL";
	}
	document.getElementById("coinInfo").innerHTML=text;
}