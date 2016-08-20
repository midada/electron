
<!-- 判断输入框是否为空 -->
function elcheck(id) {
  var x = document.getElementById("fname").value;
  str = x.replace(/\s+/g,"");

  if(str == null || str == ""){
    alert("不能输入空");
  }
  else {
    id.innerHTML='开始执行';
    document.getElementById("fname").class("btn btn-success")
  }
}
