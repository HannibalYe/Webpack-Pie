const path = require('path');//获取并设置路径

module.exports = {
	mode:"production",
  entry:{
  	entry: './src/entry.js',//入口配置文件，里面放的json对象
  	entry2:'./src/entry2.js',//第二个入口配置文件，里面放的json对象
  },
  output: {//出口配置
    path: path.resolve(__dirname, 'dist'),//路径
    filename: '[name].js'//出口文件名字
  },
  devServer:{//需要安装devServer cnpm install webpack-dev-server
  	contentBase:path.resolve(__dirname, 'dist'),//热更新服务路径
  	host:'localhsot'//Ip地址 服务器地址
  	compress:true,//服务器压缩
  	port:1717,//端口
  },//开发时的参数
/*  moudule:{},//打包css，转换图片
  plugins:[],//插件
  */
};