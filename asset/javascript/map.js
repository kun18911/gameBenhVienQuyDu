function Map(name, width, height, top, left) {
    var mapp = document.createElement('div')
    mapp.classList.add(name)
    mapp.classList.add('mapBassic')
    var fullclassApp = document.querySelector(".app") //gọi biến qua Dom
    fullclassApp.append(mapp); // chèn nhân vật vào dom trên

    // gọi class height ...
    this.height = height
    this.width = width
    this.class = name

    // xác định vị trí
    mapp.style.width = width + 'px'
    mapp.style.height = height + 'px'
    mapp.style.top = top + 'px'
    mapp.style.left = left + 'px'

    // hàm cho map, khi nhân vật qua phải
    this.moveRight = function () {
        left -= 5
        this.left = left
        mapp.style.left = left + 'px'
    }

    // hàm cho map, khi nhân vật qua trái
    this.moveLeft = function () {
        left += 5
        this.left = left
        mapp.style.left = left + 'px'
    }


    this.moveTop = function () {
        top += 5 
        this.top = top
        
        mapp.style.top = top + 'px'
        
    }
    this.moveBottom = function () {
        top -= 5
        this.top = top
        
        mapp.style.top = top + 'px'
        
    }


    this.top = top
    this.left = left

    // 2.1 hàm lấy giá trị top
    // this.top = function() {
    //     return Number(mapp.style.top.slice(0,-2))
    // }
    // // 2.2 hàm lấy giá trị left
    // this.left = function() {
    //     return Number(mapp.style.left.slice(0,-2))
    // }
}

// đặt biến cho các map
var bassicMap = new Map('bassicMap', 620, 900,0,0)
var fullMap = [bassicMap]
// var basiMapwidth = bassicMap.width


document.querySelector(".app").style.width = '97.24%'
document.querySelector(".app").style.height = '98.454%'
var heightScreen = Number(document.querySelector(".app").style.height.slice(0,-2))
var widthScreen = Number(document.querySelector(".app").style.width.slice(0,-2))



// document.querySelector(".app").style.width = aScreen + 'px'
// document.querySelector(".app").style.height = bScreen + 'px'


