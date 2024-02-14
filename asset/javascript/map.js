function Map(name, width, height, top, left) {
    var mapp = document.createElement('div')
    mapp.classList.add(name)
    mapp.classList.add('mapBassic')
    // var fullclassApp = document.querySelector("." + nameDad) //gọi biến qua Dom
    // fullclassApp.append(mapp); // chèn nhân vật vào dom trên
    document.body.append(mapp)
    // gọi class height ...
    this.height = height
    this.width = width
    this.class = name
    this.top = top
    this.left = left

    // xác định vị trí
    mapp.style.width = width + 'px'
    mapp.style.height = height + 'px'
    mapp.style.top = top + 'px'
    mapp.style.left = left + 'px'

    this.grossLeft = function(xx) {
        mapp.style.left = xx + 'px'
    }
    this.grossTop = function(yy) {
        mapp.style.top = yy + 'px'
    }
    // // hàm cho map, khi nhân vật qua phải
    // this.moveRight = function () {
    //     left -= 1.35
    //     this.left = left
    //     mapp.style.left = left + '%'
    // }

    // // hàm cho map, khi nhân vật qua trái
    // this.moveLeft = function () {
    //     left += 1.35
    //     this.left = left
    //     mapp.style.left = left + '%'
    // }


    // this.moveTop = function () {
    //     top += 1.1565
    //     this.top = top
        
    //     mapp.style.top = top + '%'
        
    // }
    // this.moveBottom = function () {
    //     top -= 1.1565
    //     this.top = top
        
    //     mapp.style.top = top + '%'
        
    // }

      // hàm cho map, khi nhân vật qua phải
    this.moveRight = function () {
        left -= 9
        mapp.left = left
        mapp.style.left = left + 'px'
    }

    // hàm cho map, khi nhân vật qua trái
    this.moveLeft = function () {
        left += 9
        mapp.left = left
        mapp.style.left = left + 'px'
    }


    this.moveTop = function () {
        top +=9
        mapp.top = top
        
        mapp.style.top = top + 'px'
        
    }
    this.moveBottom = function () {
        top -=9
        mapp.top = top
        
        mapp.style.top = top + 'px'
        
    }

    this.backgroundColor = function(color) {
        mapp.style.backgroundColor = color
         
    }
    this.position = function(color) {
        mapp.classList.add(color) 
         
    }

    this.x = function(color) {
        mapp.style.left = color + 'px'
    }

    this.y = function(color) {
        mapp.style.top = color + 'px'
    }

    this.top = top
    this.left = left

    // 2.1 hàm lấy giá trị top
    this.topp = function() {
        return Number(mapp.style.top.slice(0,-2))
    }
    // 2.2 hàm lấy giá trị left
    this.leftt = function() {
        return Number(mapp.style.left.slice(0,-2))
    }
}

function MapItem(name, nameDad, width, height, top, left) {
    var mapp = document.createElement('div')
    mapp.classList.add(name)
    mapp.classList.add('mapBassic')
    mapp.classList.add('ab')
    var fullclassApp = document.querySelector("." + nameDad) //gọi biến qua Dom
    fullclassApp.append(mapp); // chèn nhân vật vào dom trên
  
    // gọi class height ...
    this.height = height
    this.width = width
    this.class = name
    this.top = top
    this.left = left
    //  2.1 hàm lấy giá trị top
    this.topp = function() {
        return Number(mapp.style.top.slice(0,-2))
    }
    // 2.2 hàm lấy giá trị left
    this.leftt = function() {
        return Number(mapp.style.left.slice(0,-2))
    }

    // xác định vị trí
    mapp.style.width = width + 'px'
    mapp.style.height = height + 'px'
    mapp.style.top = top + 'px'
    mapp.style.left = left + 'px'

   
    this.backgroundColor = function(color) {
        mapp.style.backgroundColor = color
         
    }
    this.position = function(color) {
        mapp.classList.add(color) 
         
    }

    this.x = function(color) {
        mapp.style.left = color + 'px'
    }

    this.y = function(color) {
        mapp.style.top = color + 'px'
    }

    // 2.1 hàm lấy giá trị top
    this.topp = function() {
        return Number(mapp.style.top.slice(0,-2))
    }
    // 2.2 hàm lấy giá trị left
    this.leftt = function() {
        return Number(mapp.style.left.slice(0,-2))
    }
}

// đặt biến cho các map
var bassicMap = new Map('bassicMap', 3600, (1910 * 2),0,0)
var itembassicMap1 = new MapItem('itembassicMap1', "bassicMap", 300, 450,700,1300)
// var itembassicMap2 = new MapItem('itembassicMap2', "bassicMap", 300, 450,900,200)

var exit1 = new MapItem('exit1', "bassicMap", 100, 100,3550,2400)
var exit2 = new MapItem('exit2', "bassicMap", 100, 100,200,1800)
var exit3 = new MapItem('exit3', "bassicMap", 100, 100,3550,1000)
var exit4 = new MapItem('exit4', "bassicMap", 100, 100,1600,200)
var exit5 = new MapItem('exit5', "bassicMap", 100, 100,1600,3300)
var fullMap = [itembassicMap1]
// var fullMap = [itembassicMap1, itembassicMap2]
var oneMap = [bassicMap]
// var basiMapwidth = bassicMap.width
bassicMap.backgroundColor('#9f00ff52')
itembassicMap1.backgroundColor('#c2a41e')
// itembassicMap2.backgroundColor('#c2a41e')
exit1.backgroundColor('black')
exit2.backgroundColor('black')
exit3.backgroundColor('black')
exit4.backgroundColor('black')
exit5.backgroundColor('black')


document.querySelector(".app").style.width = '1050px'
document.querySelector(".app").style.height = '1910px'
var heightScreen = Number(document.querySelector(".app").style.height.slice(0,-2))
var widthScreen = Number(document.querySelector(".app").style.width.slice(0,-2))



// document.querySelector(".app").style.width = aScreen + 'px'
// document.querySelector(".app").style.height = bScreen + 'px'


function screenMeLeft() {
    var x = me.leftt()
    var y = me.topp()
    if (oneMap[0].width - x - me.width >= 460) {
        if (x - 460 >= 0)  {
            oneMap[0].grossLeft(-(x - 460))
        } else if (x - 460 < 0) { oneMap[0].grossLeft(0)}
    }
}



function screenMeRight() {
    var x = me.leftt()
    var y = me.topp()
    if (x - 460 >= 0) {
        if (oneMap[0].width - x - me.width >= 460) {  oneMap[0].grossLeft(-(x - 460))} else 
        if (oneMap[0].width - x - me.width < 460) { oneMap[0].grossLeft(-(oneMap[0].width - 1080))} 
    }
}

function screenMeTop() {
    var x = me.leftt()
    var y = me.topp()
    if (oneMap[0].height - y - me.height >= 840) {

        if (y - 840 >= 0)  {
            oneMap[0].grossTop(-(y - 840))
        } else if (y - 840 < 0) { oneMap[0].grossTop(0)}
    }
}



function screenMeBottom() {
    var x = me.leftt()
    var y = me.topp()
    if (y - 840 >= 0) {
        if (oneMap[0].height - y - me.height >= 840) {  oneMap[0].grossTop(-(y - 840))} else 
        if (oneMap[0].height - y - me.height < 840) { oneMap[0].grossTop(-(oneMap[0].height - 1940))} 
    }
}
