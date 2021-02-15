<?php

function load_cc($url){
    $cc=curl_init();    // 初始化curl函式
    curl_setopt($cc,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($cc,CURLOPT_URL,$url);
    $data=curl_exec($cc);
    curl_close($cc);
    return $data;
}
echo $content=load_cc("https://gis.taiwan.net.tw/XMLReleaseALL_public/activity_C_f.json");
?>