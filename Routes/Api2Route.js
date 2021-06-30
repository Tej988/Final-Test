const express = require("express");
const fetch = require('node-fetch');




 fetch('https://jsonplaceholder.typicode.com/posts/[postId]/comments')
    .then(res => res.text())
    .then(text => console.log(text))

