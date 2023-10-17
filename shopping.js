window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); //สร้าง object แบบ xmlth ให้เอาไว้ใช้ทำ ajax 
    xhr.open("GET", "cloth.json"); //ดึงไฟล์ cloth.json มาอ่าน 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);//แปลงค่าให้ตัวไฟล์ cloth.json มันอ่านได้โดยมันจะกลายเป็นก้อนชื่อว่า jsdata เดะตรงนี้จะเอาไปใช้ต่อในฟังก์ชัน showData
        console.log(jsdata);
        showData(jsdata);//เอาก้อน jsdata ไปใช้ในฟังก์ชัน showData
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

//ในไฟล์ json จะมี object ที่มีชื่อว่า top1 top2 บลาๆๆ โดยจะมี property หรือคุณสมบัติของแต่ละ object โดยจะมี property สามอัน, brandname , price และ pic
//มันจะคล้ายๆเรื่องคลาสของพี่โหน่งอะถ้าจำได้ รถหนึ่งคัน(object) มี ล้อ แกน ประตู เครื่องยนตร์ (property หรือ คุณสมบัติ)

function showData(data){
	console.log(Object.keys(data).length);
    var keys = Object.keys(data); //แปลงก้อน data ให้มันกลายเป็น array โดย array จะเก็บสมาชิกเป็น topic แต่ละอัน (data จริงๆมันคือ jsdata นั่นแหละแต่พอมาในฟังก์ชันใหม่มันจะต้องเปลี่ยนชื่อ ตัวเดียวกันๆ)
    ContainerElement = document.getElementById("container"); //ยิงไปบล็อก container
    LayerElement = ContainerElement.querySelector("#layer");//ยิงลึกลงไปบล็อก layer
    subChildDiv = LayerElement.querySelectorAll("div"); //ตรงนี้จะหมายถึงว่าเซ็ทเป้าหมายให้มันใส่ภาพใน div ที่อยู่ใน layer
    
    for(var i =0; i< keys.length;i++) //ลูปสำหรับไล่ใส่รูปใส่ข้อความไปทีละ div
    {
        var temp_img = document.createElement("img"); //สร้างelement แบบรูปขึ้นมาใหม่ ("img" ไม่ใช่ชื่อ id หรือคลาสแต่มันคือการบอกว่าสร้าง element ประเภท img)
        temp_img.src = data[keys[i]].pic; //กำหนดค่าให้มันจากการอ้างอิงจาก property (คุณสมบัติ) ของ object topic ที่เป็นรูป. [i] คือการบอกตำแหน่งเช่น key[0] คือ topic ตัวที่ 1
        ChildDiv = subChildDiv[i];//ตรงนี้จะสร้างบล็อคเปล่าขึ้นมาอันนึงโดยมีตำแหน่งจาก subchild บรรทัดที่ 20
        ChildDiv.appendChild(temp_img);//ใส่รูปไปในบล็อค childdiv ที่มีตำแหน่งและค่าเท่ากับบล็อค subchilddiv

        var temp = document.createElement("p");//สร้างelement แบบพารากราฟข้อความขึ้นมาใหม่ ("p" ไม่ใช่ชื่อ id หรือคลาสแต่มันคือการบอกว่าสร้าง element ประเภท p)
        temp.innerHTML = data[keys[i]].brandname + "Price: " + data[keys[i]].price;//ตรงนี้จะเป็นคำสั่งยัดข้อความไปในบล็อค div โดยจะเอา property (คุณสมบัติ) brandname กับ price มาใส่เป็นข้อความ
        ChildDiv.appendChild(temp);//ใส่ข้อความไปในบล็อค childdiv ที่มีตำแหน่งและค่าเท่ากับบล็อค subchilddiv

        //สองอันล่างจะเป็นแบบใหม่ แบบเว้นบรรทัดเฉยๆ เว้นบรรทัดชื่อแบรนด์กับราคา ถ้าอยากใช้ก็ลองดูได้
        
        // var temp_name = document.createElement("p");
        // temp_name.innerHTML = data[keys[i]].brandname;
        // ChildDiv.appendChild(temp_name);

        // var temp_price = document.createElement("p");
        // temp_price.innerHTML = "Price: " + data[keys[i]].price;
        // ChildDiv.appendChild(temp_price);
    }
}

