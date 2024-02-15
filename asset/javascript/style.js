// 1. Hàm tạo nhân vật
// function Characterr(name, top, left,width, height) {
//     var character = document.createElement('div') // tạo nhân vật
//     character.classList.add(name) //thêm class cho nhân vật 
//     character.classList.add('me') //thêm class me, để có được css tạo sẵn
//     this.height = height
//     this.width = width
//     this.class = name //gọi class
//     // this.top = top
//     // this.left = left"
//     var fullclassApp = document.querySelector("." + oneMap[0].class) //gọi biến qua Dom
//     fullclassApp.append(character); // chèn nhân vật vào dom trên


//     character.style.width = width + 'px' //nhân vật có width là
//     character.style.height = height + 'px' //nhân vật có height là
//     this.class = name //dùng để truy xuất class của nhân vật
//     this.background = function (color) {  //hàm đổi màu nền
//         character.style.background = color
//     }
//     character.style.top = top + 'px' //nhân vật sẽ đứng ở ...
//     character.style.left = left + 'px'

//     // 2.1 hàm lấy giá trị top
//     this.topp = function() {
//         return Number(character.style.top.slice(0,-2))
//     }
//     // 2.2 hàm lấy giá trị left
//     this.leftt = function() {
//         return Number(character.style.left.slice(0,-2))
//     }

//     // 1.1 hàm tạo nút đi xuống
//     this.moveBottom = function () {
//         if (me.topp() < 1260 ) {
//             top += 9
//             this.top = top
//             character.style.top = top + 'px'
            
//         } else if (me.topp() >= 1260  && Math.abs(bassicMap.topp()) <  bassicMap.height - heightScreen) {
//             console.log('rớt')
//             bassicMap.moveBottom()
            
//             if (Math.abs(bassicMap.topp()) >=  bassicMap.height - heightScreen) {
//                 document.querySelector('.' + bassicMap.class).style.top = '-' + (bassicMap.height - heightScreen ) +'px'
//             }

//         } else {
//             top += 9
//             this.top = top
//             character.style.top = top + 'px'
//         }
//     }
//     // 1.2 hàm tạo nút đi lên
//     this.moveTop = function () {
//         if (me.topp() > 320) {
//             top -= 9
//             this.top = top
//             character.style.top = top + 'px'
            
//         } else if (me.topp() <= 320 && bassicMap.topp() < 0) {
//             console.log('rớt')
//             bassicMap.moveTop()
//             if (bassicMap.topp() >= 0) {
//                 document.querySelector('.' + bassicMap.class).style.top = 0 + 'px'
//             }


//         } else {
//             top -= 9
//             this.top = top
//             character.style.top = top + 'px'
//         }
//     }
//     // 1.3 hàm tạo nút đi qua trái
//     this.moveLeft = function () {
//         if (me.leftt() >  140 ) {
//             left -= 9
//             this.left = left
//             character.style.left = left + 'px'
            
//         } else if (me.leftt() <= 140  && bassicMap.leftt() < 0) {
//             bassicMap.moveLeft()
//             // console.log(bassicMap.leftt())
//             if (bassicMap.leftt() >= 0) {
//                 document.querySelector('.' + bassicMap.class).style.left = 0 + 'px'
//             }


//         } else {
//             left -= 9
//             this.left = left
//             character.style.left = left + 'px'
//         }
//     }
//     // 1.4 hàm tạo nút đi qua phải
//     this.moveRight = function () {
//         if (me.leftt() < 690) {
//             left += 9
//             character.style.left = left + 'px'
            
//         } else if (me.leftt() >= 690 && Math.abs(bassicMap.leftt()) <  bassicMap.width - widthScreen) {
//             bassicMap.moveRight()
//             for (var i = 0; i <= fullMap.length; i++) {
//                 if (Math.abs(bassicMap.leftt()) >= fullMap[0].left - 690 - 160 && me.topp() + 260 > fullMap[0].top  && me.topp() < fullMap[0].top + fullMap[0].height ) {
//                     clearInterval(id)
//                 }
//             }
//             if (Math.abs(bassicMap.leftt()) >=  bassicMap.width - widthScreen) {
//                 document.querySelector('.' + bassicMap.class).style.left = '-' + (bassicMap.width - widthScreen) + 'px'
//             }


//         } else {
//             left += 9
//             character.style.left = left + 'px'
//         }
//     }


//     // 2.1 hàm lấy giá trị top
//     this.top = function() {
//         return Number(character.style.top.slice(0,-2))
//     }
//     // 2.2 hàm lấy giá trị left
//     this.left = function() {
//         return Number(character.style.left.slice(0,-2))
//     }
    
// }


// 2. khai báo nhân vật và quái
var id = 0 // dùng cho setInterval ở moveButton


// var monster1 = new Character('mst1',80,12,160,260)
// var monster2 = new Character('mst2',67,70,160,260)
// var monster3 = new Character('mst3',61,30,160,260)
// var fullMonster = [monster1, monster2, monster3]
// monster1.background('none')
// monster2.background('none')
// monster3.background('none')

// thêm màu cho quái vật
// for (var i = 0; i < fullMonster.length; i++) {
//     fullMonster[i].background('#4865f2')
// }


// function Character2(name,  nameDad) {
//     var character = document.createElement('div') // tạo nhân vật
//     character.classList.add(name) //thêm class cho nhân vật 

//     // this.top = top
//     // this.left = left
//     var fullclassApp = document.querySelector("." + nameDad) //gọi biến qua Dom
//     fullclassApp.append(character); // chèn nhân vật vào dom trên


   
//     this.backgroundImage = function (src, po,re,size,nameClasse) {  //hàm đổi màu nền
//         character.style.backgroundImage = src 
//         character.style.backgroundPosition = po 
//         character.style.backgroundRepeat = re 
//         character.style.backgroundSize = size 
//         character.classList.add(nameClasse)

//     }

//     this.class = function (nameClass) {  //hàm đổi màu nền
//         character.classList.add(nameClass)

//     }

//     this.backgroundColor = function (color) {  //hàm đổi màu nền
//         character.style.background = color
//     }
   
// }
// var meSha = new Character2('meSha','meJs')
// var mst1Sha = new Character2('mstt1', 'mst1')
// var mst2Sha = new Character2('mstt2', 'mst2')
// var mst3Sha = new Character2('mstt3', 'mst3')
// meSha.backgroundColor("none")
// meSha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/415736587_754339319384647_5030219501129618554_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=S0CVj2Z4VFkAX_5NsfQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ_af9M562nI_8OYN7mDP0cZYgs-NdKOxQouQzncvM3uA&oe=65EAEDAB')", '80px 69px', 'no-repeat','253px',
// 'meMe')
// // mst1Sha.class("meMe")

// mst1Sha.backgroundColor("none")
// mst1Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
// 'meMe')

// mst2Sha.backgroundColor("none")
// mst2Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
// 'meMe')

// mst3Sha.backgroundColor("none")
// mst3Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
// 'meMe')

