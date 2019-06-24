var max = 100;
var num = 1;
var count = 0;

while(num <= max){
	num = num * 2;
	count = count + 1;
}

alert('1に２を' + count + '回かけると' + max + 'を超える')