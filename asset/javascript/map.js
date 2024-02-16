function Map(name, width, height, top, left) {
    var mapp = document.createElement('div')
    mapp.classList.add(name)
    mapp.classList.add('mapBassic')
    var fullclassApp = document.querySelector(".wrap") //gọi biến qua Dom
    fullclassApp.append(mapp); // chèn nhân vật vào dom trên
    // document.body.append(mapp)
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

    this.backgroundImage = function(xx) {
        mapp.style.backgroundImage = xx
    }
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

function MapItem(name, nameDad, text, width, height, top, left) {
    var mapp = document.createElement('div')
    mapp.classList.add(name)
    mapp.classList.add('exit')
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
    mapp.style.minWidth = width + 'px'
    mapp.style.height = height + 'px'
    mapp.style.top = top + 'px'
    mapp.style.left = left + 'px'
    mapp.innerHTML = text

   
    this.backgroundColor = function(color) {
        mapp.style.backgroundColor = color
         
    }
    this.position = function(color) {
        mapp.classList.add(color) 
         
    }
}

// function MapItem(name, top, left) {
//     var mapp = document.createElement('div')
//     mapp.classList.add(name)
//     mapp.classList.add('exit')
//     mapp.classList.add('ab')
//     var fullclassApp = document.querySelector(".wrap") //gọi biến qua Dom
//     fullclassApp.append(mapp); // chèn nhân vật vào dom trên
  
//     // gọi class height ...
 
//     this.class = name
//     this.top = top
//     this.left = left
//     //  2.1 hàm lấy giá trị top
//     this.topp = function() {
//         return Number(mapp.style.top.slice(0,-2))
//     }
//     // 2.2 hàm lấy giá trị left
//     this.leftt = function() {
//         return Number(mapp.style.left.slice(0,-2))
//     }

//     // xác định vị trí

//     mapp.style.top = top + 'px'
//     mapp.style.left = left + 'px'

   
//     this.backgroundColor = function(color) {
//         mapp.style.backgroundColor = color
         
//     }
//     this.position = function(color) {
//         mapp.classList.add(color) 
         
//     }
// }
// var b = new MapItem("hi", 3600, 200)

// đặt biến cho các map
// var itembassicMap1 = new MapItem('itembassicMap1', "bassicMap", 300, 450,700,1300)
// var itembassicMap2 = new MapItem('itembassicMap2', "bassicMap", 300, 450,900,200)

// var exit1 = new MapItem('exit1', "bassicMap", 100, 100,3550,2400)
// var exit2 = new MapItem('exit2', "bassicMap", 100, 100,200,1800)
// var exit3 = new MapItem('exit3', "bassicMap", 100, 100,3550,1000)
// var exit4 = new MapItem('exit4', "bassicMap", 100, 100,1600,200)
// var exit5 = new MapItem('exit5', "bassicMap", 100, 100,1600,3300)
// // var fullMap = [itembassicMap1]
// var fullMap = [itembassicMap1, itembassicMap2]
// // var basiMapwidth = bassicMap.width
// bassicMap.backgroundColor('#9f00ff52')
// itembassicMap1.backgroundColor('#c2a41e')
// itembassicMap2.backgroundColor('#c2a41e')
// exit1.backgroundColor('black')
// exit2.backgroundColor('black')
// exit3.backgroundColor('black')
// exit4.backgroundColor('black')
// exit5.backgroundColor('black')


document.querySelector(".app").style.width = '1050px'
document.querySelector(".app").style.height = '1910px'
var heightScreen = Number(document.querySelector(".app").style.height.slice(0,-2))
var widthScreen = Number(document.querySelector(".app").style.width.slice(0,-2))



// document.querySelector(".app").style.width = aScreen + 'px'
// document.querySelector(".app").style.height = bScreen + 'px'




var bassicMap
var me
var allItem
var fullMap = []
var positionMe = []

function Character2(name,  nameDad) {
    var character = document.createElement('div') // tạo nhân vật
    character.classList.add(name) //thêm class cho nhân vật 

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
// bassicMap = new Map('bassicMap', 3600, (1910 * 2),0,0)
// var oneMap = [bassicMap]
var thisMap = thisMap1

var thisMap1 = function() {
    bassicMap = new Map('bassicMap', 3600, 3820,0,0)
    bassicMap.backgroundColor('none')
    bassicMap.backgroundImage("url('asset/img/nền_map1.png')")
    
       
       
        var exit1 = new MapItem('exit1', "bassicMap", "Cửa 1", 100, 100,3550,2400)
        var exit2 = new MapItem('exit2', "bassicMap", "Cửa 2", 100, 100,200,1800)
        var exit3 = new MapItem('exit3', "bassicMap", "Cửa 3", 100, 100,3550,1000)
        var exit4 = new MapItem('exit4', "bassicMap", "Cửa 4", 100, 100,1600,200)
        var exit5 = new MapItem('exit5', "bassicMap", "Cửa 5", 100, 100,1600,3300)
        allItem = [exit1,exit2,exit3,exit4,exit5]

        // bassicMap.backgroundColor('#9f00ff52')

        // itembassicMap1.backgroundColor('#c2a41e')
        // itembassicMap2.backgroundColor('#c2a41e')
        
        var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit1.left + exit1.width) <= 100 && exit1.top - (me.height + me.topp()) <= 100 && me.topp() - exit1.top - exit1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap2; 
                positionMe = [200, 900];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2.left + exit2.width) <= 100 && exit2.top - (me.height + me.topp()) <= 100 && me.topp() - exit2.top - exit2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap6
                positionMe = [2150, 2100];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
            }
        } else if (exit3.left - me.leftt() - me.width <= 100 && me.leftt() - (exit3.left + exit3.width) <= 100 && exit3.top - (me.height + me.topp()) <= 100 && me.topp() - exit3.top - exit3.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap3
                positionMe = [200, 2500];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
            }
        } else if (exit4.left - me.leftt() - me.width <= 100 && me.leftt() - (exit4.left + exit4.width) <= 100 && exit4.top - (me.height + me.topp()) <= 100 && me.topp() - exit4.top - exit4.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap4
                positionMe = [1500, 3650];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
            }
        } else if (exit5.left - me.leftt() - me.width <= 100 && me.leftt() - (exit5.left + exit5.width) <= 100 && exit5.top - (me.height + me.topp()) <= 100 && me.topp() - exit5.top - exit5.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap5
                positionMe = [1400, 200];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
            }
        }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
                xy()
                startMap()
            },500)
            
        }
        
       

        document.querySelector(".exit3").addEventListener("click", function() {
            thisMap = thisMap3
            document.querySelector(".bassicMap").parentNode.removeChild(document.querySelector(".bassicMap"))
            startMap()
        })
        document.querySelector(".exit4").addEventListener("click", function() {
            thisMap = thisMap4
            document.querySelector(".bassicMap").parentNode.removeChild(document.querySelector(".bassicMap"))
            startMap()
        })

        document.querySelector(".exit5").addEventListener("click", function() {
            thisMap = thisMap5
            document.querySelector(".bassicMap").parentNode.removeChild(document.querySelector(".bassicMap"))
            startMap()
        })


        var itembassicMap1 = new MapItem('itembassicMap1', "bassicMap", '', 300, 450,700,1300)
        var itembassicMap2 = new MapItem('itembassicMap2', "bassicMap", '', 300, 450,900,200)

        fullMap = [itembassicMap1, itembassicMap2]

        itembassicMap1.backgroundColor('#c2a41e')
        itembassicMap2.backgroundColor('#c2a41e')


}
var thisMap2 = function() {
    bassicMap = new Map('bassicMap', 3600, 3200,0,0)
    bassicMap.backgroundColor('rgb(78 40 135 / 85%)')
    
        exit1_1 = new MapItem('exit1_1', "bassicMap", "Cửa 1_1", 100, 100, 200, 900)
        exit3_2 = new MapItem('exit3_2', "bassicMap", "Cửa 3_2", 100, 100, 1500, 200)
        exit5_2 = new MapItem('exit5_2', "bassicMap", "Cửa 5_2", 100, 100, 200, 2600)
        allItem = [exit1_1, exit3_2, exit5_2]

        var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit1_1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit1_1.left + exit1_1.width) <= 100 && exit1_1.top - (me.height + me.topp()) <= 100 && me.topp() - exit1_1.top - exit1_1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap1; positionMe = [3550,2400];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit5_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit5_2.left + exit5_2.width) <= 100 && exit5_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit5_2.top - exit5_2.eight <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap5; positionMe = [2250, 1800];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
        }
         else if (exit3_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit3_2.left + exit3_2.width) <= 100 && exit3_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit3_2.top - exit3_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap3; positionMe = [1500, 3650];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
         }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
           
                xy()
                startMap()
            },500)
            
        }

    
}

var thisMap3 = function() {
    bassicMap = new Map('bassicMap', 4000, 2500,0,0)
    bassicMap.backgroundColor('#e5e53c')
    
        exit4_2 = new MapItem('exit4_2', "bassicMap", "Cửa 4_2", 100, 100,200, 1200)
        exit3_1 = new MapItem('exit3_1', "bassicMap", "Cửa 3_1", 100, 100,200, 2500)
        exit3_2 = new MapItem('exit3_2', "bassicMap", "Cửa 3_2", 100, 100,1500, 3650)
        allItem = [exit4_2, exit3_1, exit3_2]

        var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit4_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit4_2.left + exit4_2.width) <= 100 && exit4_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit4_2.top - exit4_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap4; positionMe = [2200, 2000];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit3_1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit3_1.left + exit3_1.width) <= 100 && exit3_1.top - (me.height + me.topp()) <= 100 && me.topp() - exit3_1.top - exit3_1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap1; positionMe = [3550,1000];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
        }
         else if (exit3_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit3_2.left + exit3_2.width) <= 100 && exit3_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit3_2.top - exit3_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap2; positionMe = [1500, 200];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
         }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
           
                xy()
                startMap()
            },500)
            
        }

       
        
}

var thisMap4 = function() {
    bassicMap = new Map('bassicMap', 4000, 2500,0,0)
    bassicMap.backgroundColor('#e5e53c')
    
        exit2_3 = new MapItem('exit2_3', "bassicMap", "Cửa 2_3", 100, 100, 200, 2000)
        exit4_1 = new MapItem('exit4_1', "bassicMap", "Cửa 4_1", 100, 100, 1500, 3650)
        exit4_2 = new MapItem('exit4_2', "bassicMap", "Cửa 4_2", 100, 100, 2200, 2000)
        allItem = [exit2_3, exit4_1, exit4_2]

        var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit2_3.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2_3.left + exit2_3.width) <= 100 && exit2_3.top - (me.height + me.topp()) <= 100 && me.topp() - exit2_3.top - exit2_3.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap6; positionMe = [2150, 700];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit4_1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit4_1.left + exit4_1.width) <= 100 && exit4_1.top - (me.height + me.topp()) <= 100 && me.topp() - exit4_1.top - exit4_1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap1; positionMe = [1600,200];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
        }
         else if (exit4_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit4_2.left + exit4_2.width) <= 100 && exit4_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit4_2.top - exit4_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap3; positionMe = [200, 1200];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
         }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
           
                xy()
                startMap()
            },500)
            
        }
       
        
}
var thisMap5 = function() {
    bassicMap = new Map('bassicMap', 4000, 2500,0,0)
    bassicMap.backgroundColor('#3ce5b6')
    
        exit2_2 = new MapItem('exit2_2', "bassicMap", "Cửa 2_2", 100, 100, 200, 1800)
        exit5_1 = new MapItem('exit5_1', "bassicMap", "Cửa 5_1", 100, 100, 1400, 200)
        exit5_2 = new MapItem('exit5_2', "bassicMap", "Cửa 5_2", 100, 100, 2250, 1800)
        allItem = [exit2_2, exit5_1, exit5_2]

         var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit2_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2_2.left + exit2_2.width) <= 100 && exit2_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit2_2.top - exit2_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap6; positionMe = [2150, 3500]
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit5_1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit5_1.left + exit5_1.width) <= 100 && exit5_1.top - (me.height + me.topp()) <= 100 && me.topp() - exit5_1.top - exit5_1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap1; positionMe = [1600,3300]
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
        }
         else if (exit5_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit5_2.left + exit5_2.width) <= 100 && exit5_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit5_2.top - exit5_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap2; positionMe = [200, 2600];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
         }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
           
                xy()
                startMap()
            },500)
            
        }
       
        
}
var thisMap6 = function() {
    bassicMap = new Map('bassicMap', 4600, 2400,0,0)
    bassicMap.backgroundColor('#e5e53c')
    
        exit2_3 = new MapItem('exit2_3', "bassicMap", "Cửa 2_3", 100, 100, 2150, 700)
        exit2_1 = new MapItem('exit2_1', "bassicMap", "Cửa 2_1", 100, 100, 2150, 2100)
        exit2_2 = new MapItem('exit2_2', "bassicMap", "Cửa 2_2", 100, 100, 2150, 3500)
        allItem = [exit2_3, exit2_1, exit2_2]





        var xy = function() {
            console.log("hi")
        }
        var id = setInterval(function () {

            if (exit2_1.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2_1.left + exit2_1.width) <= 100 && exit2_1.top - (me.height + me.topp()) <= 100 && me.topp() - exit2_1.top - exit2_1.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap1; positionMe = [200,1800];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }

        } else if (exit2_2.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2_2.left + exit2_2.width) <= 100 && exit2_2.top - (me.height + me.topp()) <= 100 && me.topp() - exit2_2.top - exit2_2.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap5; positionMe = [ 200, 1800];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
        }
         else if (exit2_3.left - me.leftt() - me.width <= 100 && me.leftt() - (exit2_3.left + exit2_3.width) <= 100 && exit2_3.top - (me.height + me.topp()) <= 100 && me.topp() - exit2_3.top - exit2_3.height <= 100) {
            document.querySelector(".aa").classList.remove("none")
            xy = function() {  fullMap = [];thisMap = thisMap4; positionMe = [200, 2000];
                screenMeLeft = []
                screenMeRight = []
                screenMeTop = []
                screenMeBottom = []
                
            }
         }
              
            else {document.querySelector(".aa").classList.add("none")}
    },100)

    document.querySelector(".aa").addEventListener("click", mami)
        function mami() {
            clearInterval(id)
            cancel = true
            document.querySelector(".aa").removeEventListener("click", mami)
            setTimeout(function() {
                document.querySelector(".aa").classList.add("none")
           
                xy()
                startMap()
            },500)
            
        }

     
        
}

var thisMap = thisMap1
var screenMeLeft
var screenMeRight
var screenMeTop
var screenMeBottom
// document.querySelector(".body").classList.add("none")
{/* <div class = "a"></div> */}
startMap()
var cancel = false
function startMap() {
    thisMap()
    var oneMap = [bassicMap]
    function Character(name, top, left,width, height) {
    
        var character = document.createElement('div') // tạo nhân vật
        character.classList.add(name) //thêm class cho nhân vật 
        character.classList.add('me') //thêm class me, để có được css tạo sẵn
        this.height = height
        this.width = width
        this.class = name //gọi class
        // this.top = top
        // this.left = left"
        var fullclassApp = document.querySelector("." + oneMap[0].class) //gọi biến qua Dom
        fullclassApp.append(character); // chèn nhân vật vào dom trên
    
    
        character.style.width = width + 'px' //nhân vật có width là
        character.style.height = height + 'px' //nhân vật có height là
        this.class = name //dùng để truy xuất class của nhân vật
        this.background = function (color) {  //hàm đổi màu nền
            character.style.background = color
        }
        character.style.top = top + 'px' //nhân vật sẽ đứng ở ...
        character.style.left = left + 'px'
    
        // 2.1 hàm lấy giá trị top
        this.topp = function() {
            return  Number(character.style.top.slice(0,-2))
        }
        // 2.2 hàm lấy giá trị left
        this.leftt = function() {
            return Number(character.style.left.slice(0,-2))
        }
    
        // 1.1 hàm tạo nút đi xuống
        this.moveBottom = function () {
                top = this.topp()
                top += 9
                character.style.top = top + 'px'
                screenMeBottom()
                if (fullMap.length != 0) {
                for (var i = 0; i < fullMap.length; i++) {
                    
                    if (me.topp() + me.height >= fullMap[i].top && me.topp() < fullMap[i].top + fullMap[i].height && me.leftt() +160 > fullMap[i].left && me.leftt()  < fullMap[i].left + fullMap[i].width) {
                        character.style.top = fullMap[i].top - 260 + 'px'
                        move = true; clearInterval(id)
                    }
                }}
        }
        // 1.2 hàm tạo nút đi lên
        this.moveTop = function () {
                top = this.topp()
                top -= 9
                // this.top = top
                character.style.top = top + 'px'
                screenMeTop()
                if (fullMap.length != 0) {
                for (var i = 0; i < fullMap.length; i++) {
                    
                    if (me.topp() <= fullMap[i].top + fullMap[i].height && me.topp() > fullMap[i].top && me.topp() <= fullMap[i].top + fullMap[i].height && me.leftt() +160 > fullMap[i].left && me.leftt()  < fullMap[i].left + fullMap[i].width) {
                        character.style.top = fullMap[i].top + fullMap[i].height + 'px'
                        move = true; clearInterval(id)
                    }
                }}
             
        }
        // 1.3 hàm tạo nút đi qua trái
        this.moveLeft = function () {
                left = this.leftt()
                left -= 9
                character.style.left = left + 'px'
                screenMeLeft()
                if (fullMap.length != 0) {
                for (var i = 0; i < fullMap.length; i++) {
                    console.log(fullMap[i].leftt())
                    if (me.leftt() <= fullMap[i].left + fullMap[i].width && me.leftt() > fullMap[i].left && me.topp() +260 > fullMap[i].topp() && me.topp() < fullMap[i].topp() + fullMap[i].height) {
                        character.style.left = fullMap[i].left + fullMap[i].width  + 'px'
                        move = true; clearInterval(id)
                    }
                }}
               
        }
        // 1.4 hàm tạo nút đi qua phải
        this.moveRight = function () {
                left = this.leftt()
                left += 9
                character.style.left = left + 'px'
                screenMeRight()
                if (fullMap.length != 0) {
                for (var i = 0; i < fullMap.length; i++) {
                    // console.log(fullMap[i].leftt())
                    if (me.leftt() + 160 >= fullMap[i].leftt() && me.leftt() < fullMap[i].left + fullMap[i].width && me.topp() +260 > fullMap[i].topp() && me.topp() < fullMap[i].topp() + fullMap[i].height) {
                        character.style.left = fullMap[i].leftt() -160 + 'px'
                        move = true; clearInterval(id)
                    }
                }}
        }
    
    
        
    }
    if (positionMe.length == 0) {
        me = new Character('meJs',1044,693,160,260)
    } else {
        me = new Character('meJs',positionMe[0],positionMe[1],160,260)
    }
    
    // Hàm căn giữa camera

        screenMeLeft = function() {
        var x = me.leftt()
        var y = me.topp()
        if (oneMap[0].width - x - me.width >= 460) {
            if (x - 460 >= 0)  {
                oneMap[0].grossLeft(-(x - 460))
            } else if (x - 460 < 0) { oneMap[0].grossLeft(0)}
        }
        }
    
        screenMeRight = function() {
        var x = me.leftt()
        var y = me.topp()
        if (x - 460 >= 0) {
            if (oneMap[0].width - x - me.width >= 460) {  oneMap[0].grossLeft(-(x - 460))} else 
            if (oneMap[0].width - x - me.width < 460) { oneMap[0].grossLeft(-(oneMap[0].width - 1080))} 
        }
        }
    
        screenMeTop = function() {
        var x = me.leftt()
        var y = me.topp()
        if (oneMap[0].height - y - me.height >= 840) {
    
            if (y - 840 >= 0)  {
                oneMap[0].grossTop(-(y - 840))
            } else if (y - 840 < 0) { oneMap[0].grossTop(0)}
        }
        }
    
        screenMeBottom = function() {
        var x = me.leftt()
        var y = me.topp()
        if (y - 840 >= 0) {
            if (oneMap[0].height - y - me.height >= 840) {  oneMap[0].grossTop(-(y - 840))} else 
            if (oneMap[0].height - y - me.height < 840) { oneMap[0].grossTop(-(oneMap[0].height - 1940))} 
        }
        }
    me.background('none')
    screenMeLeft()
    screenMeTop()
    screenMeTop()
    screenMeBottom()

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
                if (me.topp() >= oneMap[0].height - me.height ) { move = true; 
                    document.querySelector("." + me.class).style.top = oneMap[0].height - me.height + 'px'
                    clearInterval(id)}
      
            }
        },25)
        } else {  move = true; clearInterval(id); moveBottomButton()}
    }
    document.querySelector(".downKey").addEventListener('click', moveBottomButton)
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
                if (me.topp() <= 0) { move = true; 
                    document.querySelector("." + me.class).style.top = 0 + 'px'
                    clearInterval(id)}
      
            }
        },25)
        } else {  move = true; clearInterval(id); moveTopButton()}
    }
    document.querySelector(".upKey").addEventListener('click', moveTopButton)

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
                
                if (me.leftt() >= oneMap[0].width - me.width ) { move = true; document.querySelector('.' + me.class).style.left = oneMap[0].width - me.width + 'px'
                clearInterval(id)}
            }
        },25)
    } else {  move = true; clearInterval(id); moveRightButton()}
    }
    document.querySelector(".rightKey").addEventListener('click', moveRightButton)

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
                if (me.leftt() <= 0) { move = true; document.querySelector('.' + me.class).style.left = 0 + 'px'
                clearInterval(id)}
            }
        },25)
    } else {  move = true; clearInterval(id); moveLeftButton()}
    }
    document.querySelector(".leftKey").addEventListener('click', moveLeftButton)





    // Phần hình ảnh nhân vật

    // itembassicMap1.backgroundColor('#c2a41e')
    // itembassicMap2.backgroundColor('#c2a41e')
var meSha = new Character2('meSha','meJs')

meSha.backgroundColor("none")
meSha.backgroundImage("url('https://scontent.xx.fbcdn.net/v/t1.15752-9/415736587_754339319384647_5030219501129618554_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=S0CVj2Z4VFkAX_5NsfQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ_af9M562nI_8OYN7mDP0cZYgs-NdKOxQouQzncvM3uA&oe=65EAEDAB')", '80px 69px', 'no-repeat','253px',
'meMe')
    
    var ud = setInterval(function() {if (cancel == true) {cancel = false;
         clearInterval(ud); 
         document.querySelector(".upKey").removeEventListener('click', moveTopButton)
         document.querySelector(".downKey").removeEventListener('click', moveBottomButton)
     
         document.querySelector(".rightKey").removeEventListener('click', moveRightButton)
         document.querySelector(".leftKey").removeEventListener('click', moveLeftButton)
         document.querySelector(".bassicMap").parentNode.removeChild(document.querySelector(".bassicMap"))
        }},100)
   
}