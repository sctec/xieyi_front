const koa=require("koa");
const router=require("koa-router")();
const static=require("koa-static");

const app = new koa();
app.use(static(__dirname+"/public"));
app.listen(3002);