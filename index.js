#!/usr/bin/env node
// The line above tells npm that this is a CLI app.
console.log("Loading expressjs.");
const express=require("express");
console.log("Loading path.")
const path=require("path");
var caching;
console.log("Searchocean ".concat(require(path.join(__dirname,"package.json")).version), "starting.");
/*if(process.env.NODE_ENV=="production") {
    caching=0xea60;// Cache content for 1 minute when in production mode
    console.log("Running in production mode, caching is enabled.");
}
else {
    caching=0;
} */
const app=express();
app.get("/*",express.static(__dirname));
app.listen(8000);
console.log("Searchocean listening on HTTP port 8000")