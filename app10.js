var user_hand = prompt('グー、チョキ、パーを選んでください');
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
alert("あなたの出した手は" + user_hand + "で、JSが選んだ手は" + js_hand + "なので" + judge);



function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3);
	var hand;

	if(js_hand_num == 0){
		hand = "グー";
	}else if(js_hand_num == 1){
		hand = "チョキ";
	}else if(js_hand_num == 2){
		hand = "パー";
	}

	return hand;
}



function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js ==  "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js ==  "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js ==  "パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;

}