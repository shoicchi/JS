var max = 100;
var num = 1;
var count = 0;

do{
	num = num * 2;
	count = count + 1;
}while(num <= max)

alert('1に２を' + count + '回かけると' + max + 'を超える')