const path = require('path');//获取并设置路径
const uglify = require('uglifyjs-webpack-plugin');//压缩js文件
const htmlPlugin = require('html-webpack-plugin');//打包html指向
const ExtractTextPlugin = require('extract-text-webpack-plugin');//css分离 打包第三方插件

var website = {
	publicPath:"http://10.237.189.54:1717"
}

module.exports = {
  mode:"development", //webpack4.0才支持
  entry:{
  	entry: './src/entry.js',//入口配置文件，里面放的json对象
  	//entry2:'./src/entry2.js',//第二个入口配置文件，里面放的json对象
  },
  output: {//出口配置
    path: path.resolve(__dirname, 'dist'),//路径
    filename: '[name].js',//出口文件名字
    publicPath:website.publicPath
  },
  devServer:{// 热更新服务 ，需要安装devServer cnpm install webpack-dev-server 
  	contentBase:path.resolve(__dirname, 'dist'),//热更新服务路径
  	host:'10.237.189.54',//Ip地址 服务器地址 填写localhost 容易解析不到
  	compress:true,//服务器压缩
  	port:1717,//端口 自己配置
  },//开发时的参数
  module:{
  	rules:[
  		{
  			test:/\.css$/,//压缩css文件 ，压缩到入口文件中，入口文件被压缩
  			/*use:[//用哪些loader
  				{
  					loader:'style-loader'
  				},
  				{
  					loader:'css-loader'
  				}
  				],*/
  			use:ExtractTextPlugin.extract({//集成ExtractTextPlugin
  				fallback:'style-loader',
  				use:'css-loader'
  			})
  		},
  		{
  			test:/\.(png|jpg|gif)/,
  			use:[{
  				loader:'url-loader',//url-loader自带了file-loader的功能
  				options:{
  					limit:500000
  				}
  			}]
  		}
  	]
  },//打包css，转换图片
  plugins:[
   //new uglify(),
   new htmlPlugin({
   	template:'./src/index.html',
   	hash:true,//不会产生缓存
   	minify:{
   		//"removeAttributeQuotes":true,//压缩通过去掉html中引号
   		removeComments: true,
        removeEmptyAttributes: true,
   	}
   }),
   new ExtractTextPlugin("/css/index.css")
  ],//插件

};