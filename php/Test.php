<?php
$args=[
/*-- Permanent access token generator for Facebook Graph API version 2.9 --*/
//Instructions: Fill Input Area below and then run this php file
/*-- INPUT AREA START --*/
    'usertoken'=>'EAAEqgX5ZBkpYBANAN3iFNkpHQeb8kxrI2NrmP8uHaD72aTGJJi96eov6rZAjT6wu8NMNosdrgaEyeGp9YDfOzOjXLQHF9R38tBtlmAqL7hB3i0cbOjbhcaMUwlr9w0UesHJynGTHDeUJYWEl6PIVbfFYuEVMz3HUy8Fv6pBsAxhs2bonGcDmjDe789c5N8J8pCLtqJHgZDZD',
    'appid'=>'328210638082710',
    'appsecret'=>'e9739eb8372ffd67cb42512b6f1569fa',
    'pageid'=>'2738812642814871'
/*-- INPUT AREA END --*/
];
echo 'Permanent access token is: <input type="text" value="'.generate_token($args).'"></input>';
function generate_token($args){
    $r=json_decode(file_get_contents("https://graph.facebook.com/v2.9/oauth/access_token?grant_type=fb_exchange_token&client_id={$args['appid']}&client_secret={$args['appsecret']}&fb_exchange_token={$args['usertoken']}")); // get long-lived token
    $longtoken=$r->access_token;
    $r=json_decode(file_get_contents("https://graph.facebook.com/v2.9/me?access_token={$longtoken}")); // get user id
    $userid=$r->id;
    $r=json_decode(file_get_contents("https://graph.facebook.com/v2.9/{$userid}?fields=access_token&access_token={$longtoken}")); // get permanent token
    if($r->id==$args['pageid']) $finaltoken=$r->access_token;
    return $finaltoken;
}
?>