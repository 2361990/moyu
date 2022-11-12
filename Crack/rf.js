/*

通知频道：https://t.me/ddgksf2021
问题反馈：https://t.me/ddgksf2013_bot

[rewrite_local]

https://pro-status-service-prod.azurewebsites.net/api/item url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/rf.js

[mitm] 

hostname=pro-status-service-prod.azurewebsites.net

*/



var ddgksf2013 = JSON.parse($response.body);
ddgksf2013.FilmsProStatus = 1
ddgksf2013.AeroProStatus = 1
$done({body: JSON.stringify(ddgksf2013)});