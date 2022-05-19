
console.log('我是main.js')

  
getCSS.onclick=()=> {
  const request = new XMLHttpRequest()
request.open("GET", "/style.css")
request.onload=()=>{
  console.log(request.response)

  const style = document.createElement("style")  //使用dom在html中创建一个style标签
  style.innerHTML = request.response //让这个标签里的内容=request.response的内容
  document.head.appendChild(style) //使这个标签插入document.head这个父标签中
  }
  
  request.onerror=()=>{
  }
request.send();
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload=() => {
    const script = document.createElement("script")
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => {
    console.log("失败了")
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/3.html")
  request.onload = () => {
    console.log("成功了")
    console.log(request.response)
    const div = document.createElement("div")
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => { 
    console.log("失败了")
  }
  request.send();
}
getXML.onclick = () => {
  const request = new XMLHttpRequest() //创建一个请求
  request.open("GET", "/4.xml")
  request.onreadystatechange = () => {

    if (request.readyState === 4 &&request.status>=200&&request.status<300) {
      console.log(request.responseXML)
    }
  }
  request.send();
}
  
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const object = JSON.parse(request.response)
      console.log(object)
      myName.textContent=object.name
      
    }
  }
  request.send()
}
let n=1  //记录page的数字
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n+1}.json`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response) //使返回的string变成数组
      array.forEach(item => { //遍历这个数组
        const li = document.createElement("li") //在document中创建li标签
        console.log(item.id)
        li.textContent = item.id //让li标签的文本变成item的id（id命名在db中page文件中）
        xxx.appendChild(li) //在id=xxx中插入这个li标签
      });
        n+=1 //使page数字递增，用于下次继续点击
      };
    }
    request.send()
  }

