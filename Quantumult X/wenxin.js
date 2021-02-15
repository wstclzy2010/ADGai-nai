str = str.match(/:&#x2f;&#x2f;(\S*)"}/)[1]
str = str.replace(/&#x2f;/g, '/');
str = str.replace(/&amp;/g, '&');
console.log(str);//结果bbbcccdddeee 

var option1={"open-url": "*.com://"}
	option1["open-url"]="*.com://"+str
	$notify(``, "","🔗点击打开链接", option1);
console.log(option1["open-url"])

$done({body: $response.body});
