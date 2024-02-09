// 1. Hàm tạo nhân vật
function Character(name, top, left,width, height) {
    var character = document.createElement('div') // tạo nhân vật
    character.classList.add(name) //thêm class cho nhân vật 
    character.classList.add('me') //thêm class me, để có được css tạo sẵn
    this.height = height
    this.width = width
    this.class = name //gọi class
    // this.top = top
    // this.left = left
    var fullclassApp = document.querySelector(".app") //gọi biến qua Dom
    fullclassApp.append(character); // chèn nhân vật vào dom trên


    character.style.width = width + '%' //nhân vật có width là
    character.style.height = height + '%' //nhân vật có height là
    this.class = name //dùng để truy xuất class của nhân vật
    this.background = function (color) {  //hàm đổi màu nền
        character.style.background = color
    }
    character.style.top = top + '%' //nhân vật sẽ đứng ở ...
    character.style.left = left + '%'

    // 1.1 hàm tạo nút đi xuống
    this.moveBottom = function () {
        // if (top < Math.floor(heightScreen * 60 / 100)) {
            top += 0.2577
            this.top = top
            character.style.top = top + '%'
            console.log(top)
            
        // } else if (top >= Math.floor(heightScreen * 60 / 100) && Math.abs(bassicMap.top) <  bassicMap.height - heightScreen) {
        //     console.log('rớt')
        //     bassicMap.moveBottom()
        //     if (Math.abs(bassicMap.top) >=  bassicMap.height - heightScreen) {
        //         document.querySelector('.' + bassicMap.class).style.top = '-' + (bassicMap.height - heightScreen) + '%'
        //     }

        // } else {
        //     top += 0.2577
        //     this.top = top
        //     character.style.top = top + '%'
        // }
    }
    // 1.2 hàm tạo nút đi lên
    this.moveTop = function () {
        // if (top > Math.floor(heightScreen * 30 / 100)) {
            top -= 0.2577
            this.top = top
            character.style.top = top + '%'
            console.log(top)
            
        // } else if (top <= Math.floor(heightScreen * 30 / 100) && bassicMap.top < 0) {
        //     console.log('rớt')
        //     bassicMap.moveTop()
        //     if (bassicMap.top >= 0) {
        //         document.querySelector('.' + bassicMap.class).style.top = 0 + 'px'
        //     }


        // } else {
        //     top -= 5
        //     this.top = top
        //     character.style.top = top + 'px'
        // }
    }
    // 1.3 hàm tạo nút đi qua trái
    this.moveLeft = function () {
        // if (left > Math.floor(widthScreen * 30 / 100)) {
            left -= 0.45 
            this.left = left
            character.style.left = left + '%'
            
        // } else if (left <= Math.floor(widthScreen * 30 / 100) && bassicMap.left < 0) {
        //     bassicMap.moveLeft()
        //     if (bassicMap.left >= 0) {
        //         document.querySelector('.' + bassicMap.class).style.left = 0 + 'px'
        //     }


        // } else {
        //     left -= 5     
        //     this.left = left
        //     character.style.left = left + 'px'
        // }
    }
    // 1.4 hàm tạo nút đi qua phải
    this.moveRight = function () {
        // if (left < Math.floor(widthScreen * 60 / 100)) {
            left += 0.45  
            this.left = left
            character.style.left = left + '%'
            
        // } else if (left >= Math.floor(widthScreen * 60 / 100) && Math.abs(bassicMap.left) <  bassicMap.width - widthScreen) {
        //     bassicMap.moveRight()
        //     if (Math.abs(bassicMap.left) >=  bassicMap.width - widthScreen) {
        //         document.querySelector('.' + bassicMap.class).style.left = '-' + (bassicMap.width - widthScreen) + 'px'
        //     }


        // } else {
        //     left += 5     
        //     this.left = left
        //     character.style.left = left + 'px'
        // }
    }


    // 2.1 hàm lấy giá trị top
    this.top = function() {
        return Number(character.style.top.slice(0,-2))
    }
    // 2.2 hàm lấy giá trị left
    this.left = function() {
        return Number(character.style.left.slice(0,-2))
    }
    
}
// 2. khai báo nhân vật và quái
var id = 0 // dùng cho setInterval ở moveButton
var me = new Character('meJs',0,0,14.817,13.4)

me.background('none')
var monster1 = new Character('mst1',43,12,14.817,13.4)
var monster2 = new Character('mst2',67,70,14.817,13.4)
var monster3 = new Character('mst3',61,30,14.817,13.4)
var fullMonster = [monster1, monster2, monster3]
monster1.background('none')
monster2.background('none')
monster3.background('none')

// thêm màu cho quái vật
// for (var i = 0; i < fullMonster.length; i++) {
//     fullMonster[i].background('#4865f2')
// }


function Character2(name,  nameDad) {
    var character = document.createElement('div') // tạo nhân vật
    character.classList.add(name) //thêm class cho nhân vật 

    // this.top = top
    // this.left = left
    var fullclassApp = document.querySelector("." + nameDad) //gọi biến qua Dom
    fullclassApp.append(character); // chèn nhân vật vào dom trên


   
    this.backgroundImage = function (src, po,re,size,nameClasse) {  //hàm đổi màu nền
        character.style.backgroundImage = src 
        character.style.backgroundPosition = po 
        character.style.backgroundRepeat = re 
        character.style.backgroundSize = size 
        character.classList.add(nameClasse)

    }

    this.class = function (nameClass) {  //hàm đổi màu nền
        character.classList.add(nameClass)

    }

    this.backgroundColor = function (color) {  //hàm đổi màu nền
        character.style.background = color
    }
   
}
var meSha = new Character2('meSha','meJs')
var mst1Sha = new Character2('mstt1', 'mst1')
var mst2Sha = new Character2('mstt2', 'mst2')
var mst3Sha = new Character2('mstt3', 'mst3')
meSha.backgroundColor("none")
meSha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/415736587_754339319384647_5030219501129618554_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=S0CVj2Z4VFkAX_5NsfQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ_af9M562nI_8OYN7mDP0cZYgs-NdKOxQouQzncvM3uA&oe=65EAEDAB')", '80px 69px', 'no-repeat','253px',
'meMe')
// mst1Sha.class("meMe")

mst1Sha.backgroundColor("none")
mst1Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
'meMe')

mst2Sha.backgroundColor("none")
mst2Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
'meMe')

mst3Sha.backgroundColor("none")
mst3Sha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/423422463_933916594760102_2739779803329589334_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=c3Q6JhZ40mMAX-kcuOF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk2N7D2X2od-yTl3LW-2eKFPIh9Za92_lGPn37H6wXtg&oe=65EB24F2')", '60px 61px', 'no-repeat','279px',
'meMe')

var move = true
var y = Math.floor(heightScreen - me.height)
var z = Math.floor(widthScreen - me.width)
// 3.1 nút đi xuống
function moveBottomButton() {
    if (move == true) {
        move = false
        // 1. tạo nút downKey
        var x = document.querySelector('.downKey')

        // 2. thêm hiệu ứng khi ấn nút
        x.classList.add("focusButton")
        setTimeout(function() {x.classList.remove("focusButton")},400)

        // 3. cho setInterval để di chuyển auto
    id = setInterval(function() {
        if (move == false) {
            me.moveBottom()

            // 4. lúc này nhấn nút lần 2, sẽ hủy di chuyển
            x.addEventListener('click', mami)
            function mami() {
                move = true
                clearInterval(id)
                x.removeEventListener('click', mami)
            }
            // 5. kiểm tra đụng đáy chưa
            // ps: sao ko ()
            if (me.top >= y + 1) { move = true; 
                document.querySelector("." + me.class).style.top = (y +1)+ '%'
                clearInterval(id)}
  
        }
    },25)
    } else {  move = true; clearInterval(id); moveBottomButton()}
}
// 3.2 nút đi lên
function moveTopButton() {
    if (move == true) {
        move = false
        // 1. tạo nút downKey
        var x = document.querySelector('.upKey')

        // 2. thêm hiệu ứng khi ấn nút
        x.classList.add("focusButton")
        setTimeout(function() {x.classList.remove("focusButton")},400)

        // 3. cho setInterval để di chuyển auto
    id = setInterval(function() {
        if (move == false) {
            me.moveTop()

            // 4. lúc này nhấn nút lần 2, sẽ hủy di chuyển
            x.addEventListener('click', mami)
            function mami() {
                move = true
                clearInterval(id)
                x.removeEventListener('click', mami)
            }
            // 5. kiểm tra đụng đỉnh chưa
            // ps: sao ko ()
            if (me.top <= 0) { move = true; 
                document.querySelector("." + me.class).style.top = 0 + '%'
                clearInterval(id)}
  
        }
    },25)
    } else {  move = true; clearInterval(id); moveTopButton()}
}
// 3.3 nút đi qua phải
function moveRightButton() {
    if (move == true) {
        move = false
         // 1. tạo nút downKey
         var x = document.querySelector('.rightKey')

         // 2. thêm hiệu ứng khi ấn nút
         x.classList.add("focusButton")
         setTimeout(function() {x.classList.remove("focusButton")},400)

        // 3. cho setInterval để di chuyển auto
        id = setInterval(function() {
        if (move == false) {
            me.moveRight()

            // 4. lúc này nhấn nút lần 2, sẽ hủy di chuyển
            x.addEventListener('click', mami)
            function mami() {
                move = true
                clearInterval(id)
                x.removeEventListener('click', mami)
            }
           
            // 5. kiểm tra đụng bên phải chưa
            if (me.left >= z + 3) { move = true; document.querySelector('.' + me.class).style.left = (z +3 )+ '%'
            clearInterval(id)}
        }
    },25)
} else {  move = true; clearInterval(id); moveRightButton()}
}
// 3.4 nút đi qua trái
function moveLeftButton() {
    if (move == true) {
        move = false
         // 1. tạo nút leftKey
         var x = document.querySelector('.leftKey')

         // 2. thêm hiệu ứng khi ấn nút
         x.classList.add("focusButton")
         setTimeout(function() {x.classList.remove("focusButton")},400)

        // 3. cho setInterval để di chuyển auto
        id = setInterval(function() {
        if (move == false) {
            me.moveLeft()

            // 4. lúc này nhấn nút lần 2, sẽ hủy di chuyển
            x.addEventListener('click', mami)
            function mami() {
                move = true
                clearInterval(id)
                x.removeEventListener('click', mami)
            }
           
            // 5. kiểm tra đụng bên phải chưa
            if (me.left <= 0) { move = true; document.querySelector('.' + me.class).style.left = 0 + '%'
            clearInterval(id)}
        }
    },25)
} else {  move = true; clearInterval(id); moveLeftButton()}
}