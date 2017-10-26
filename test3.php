<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js "></script>
<script src="js/fabric/dist/fabric.min.js"></script>
<script src="js/fabric/dist/fabric.require.js"></script>
<script src="js/myobj.js"></script>
<script src="js/image.js"></script>
<script>
$(function(){

// function collect(remove_item)
// {
//   var array = [2, 5,999, 9];
//   var index = array.indexOf(remove_item);
//   if (index > -1) {
//     array.splice(index, 1);
//   }
//   return array;
// }


// alert(collect(5));
var array = [2, 5,999, 9];
Object.prototype.array_remove = function(type,remove_item)//element,index指定移除元素或序列
  {

      if(type == "element")
      {
        var index = this.indexOf(remove_item);
        if (index > -1){
          this.splice(index, 1);
        }
      }
      else if(type == "index")
      {
          this.splice(remove_item, 1);
      }
      return this;//返回這個陣列
      
  }
alert(myobj.action.check.array_remove("index",0))
})
// create a wrapper around native canvas element (with id="c")
</script>
<input type="file"  id="img_file">
<canvas width="335" height="435" id="c"></canvas>
<a href="javascript:;" onclick="this.href=to_url();" download>下載</a>
<p><a href="javascript:;" onclick="do_sth()">移除</a></p>
</body>
</html>