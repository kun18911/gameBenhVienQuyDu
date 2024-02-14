function checkClass(){
    var allChess = document.querySelectorAll(".ch-Chess")
    for (var piece of allChess) {
        switch(piece.src) {
            case yinyang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                break;
            }
            case melon: {
                piece.classList.replace(piece.classList[0],"melon")
                break;
            }
            case star: {

                piece.classList.replace(piece.classList[0],"star")
                break;
            }
            case heart: {
                piece.classList.replace(piece.classList[0],"heart")
                break;
            }
            case water: {
                piece.classList.replace(piece.classList[0],"water")

                break;
            }
            case sword: {
                piece.classList.replace(piece.classList[0],"sword")
                break;
            }



            //block 5
            case block5x5: {
              piece.classList.replace(piece.classList[0],"haha")
                piece.classList.replace(piece.classList[2],"block5x5") 
                break;
            }

            //block 3
            case melon3x3: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melon3x3") 
                break;
            }
            case heart3x3: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heart3x3") 
                break;
            }
            case sword3x3: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"sword3x3") 
                break;
            }
            case yinyang3x3: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyang3x3") 
                break;
            }
            case star3x3: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"star3x3") 
                break;
            }
            case water3x3: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"water3x3") 
                break;
            }


            //block Ngang

            case melonNgang: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonNgang") 
                break;
            }
            case heartNgang: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartNgang") 
                break;
            }
            case swordNgang: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordNgang") 
                break;
            }
            case yinyangNgang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangNgang") 
                break;
            }
            case starNgang: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starNgang") 
                break;
            }
            case waterNgang: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterNgang") 
                break;
            }

            //block Dọc

            case melonDoc: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonDoc") 
                break;
            }
            case heartDoc: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartDoc") 
                break;
            }
            case swordDoc: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordDoc") 
                break;
            }
            case yinyangDoc: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangDoc") 
                break;
            }
            case starDoc: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starDoc") 
                break;
            }
            case waterDoc: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterDoc") 
                break;
            }




        }
    }
    let i = checkValid()
    if (i == true) {

        crushCandy()
    } else {
        switch(piece.src) {
            case yinyang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case melon: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case star: {

                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case heart: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case water: {
                piece.classList.replace(piece.classList[0],"water")

                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case sword: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }



            //block 5
            case block5x5: {
              piece.classList.replace(piece.classList[0],"haha")
                piece.classList.replace(piece.classList[2],"block5x5") 
                break;
            }

            //block 3
            case melon3x3: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melon3x3") 
                break;
            }
            case heart3x3: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heart3x3") 
                break;
            }
            case sword3x3: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"sword3x3") 
                break;
            }
            case yinyang3x3: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyang3x3") 
                break;
            }
            case star3x3: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"star3x3") 
                break;
            }
            case water3x3: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"water3x3") 
                break;
            }


            //block Ngang

            case melonNgang: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonNgang") 
                break;
            }
            case heartNgang: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartNgang") 
                break;
            }
            case swordNgang: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordNgang") 
                break;
            }
            case yinyangNgang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangNgang") 
                break;
            }
            case starNgang: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starNgang") 
                break;
            }
            case waterNgang: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterNgang") 
                break;
            }

            //block Dọc

            case melonDoc: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonDoc") 
                break;
            }
            case heartDoc: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartDoc") 
                break;
            }
            case swordDoc: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordDoc") 
                break;
            }
            case yinyangDoc: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangDoc") 
                break;
            }
            case starDoc: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starDoc") 
                break;
            }
            case waterDoc: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterDoc") 
                break;
            }




        }
    }
}


function checkClass2() {
    var allChess = document.querySelectorAll(".ch-Chess")
    for (var piece of allChess) {
        switch(piece.src) {
            case yinyang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case melon: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case star: {

                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case heart: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case water: {
                piece.classList.replace(piece.classList[0],"water")

                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }
            case sword: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"Xclass") 
                break;
            }



            //block 5
            case block5x5: {
              piece.classList.replace(piece.classList[0],"haha")
                piece.classList.replace(piece.classList[2],"block5x5") 
                break;
            }

            //block 3
            case melon3x3: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melon3x3") 
                break;
            }
            case heart3x3: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heart3x3") 
                break;
            }
            case sword3x3: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"sword3x3") 
                break;
            }
            case yinyang3x3: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyang3x3") 
                break;
            }
            case star3x3: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"star3x3") 
                break;
            }
            case water3x3: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"water3x3") 
                break;
            }


            //block Ngang

            case melonNgang: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonNgang") 
                break;
            }
            case heartNgang: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartNgang") 
                break;
            }
            case swordNgang: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordNgang") 
                break;
            }
            case yinyangNgang: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangNgang") 
                break;
            }
            case starNgang: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starNgang") 
                break;
            }
            case waterNgang: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterNgang") 
                break;
            }
            

            //block Dọc

            case melonDoc: {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonDoc") 
                break;
            }
            case heartDoc: {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartDoc") 
                break;
            }
            case swordDoc: {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordDoc") 
                break;
            }
            case yinyangDoc: {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangDoc") 
                break;
            }
            case starDoc: {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starDoc") 
                break;
            }
            case waterDoc: {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterDoc") 
                break;
            }




        }
    }
    slideCandy()
}



function change() {
   
    if (currTile.src == 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779252_1687735858419026_1279514988863500876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=SxeoFnD9X1EAX-m6hr6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRdIIyjqU_qOKrLVLTbPh7nuEi3FnLjNFgbY3qnvw6Z8Q&oe=65E3AB82' &&  otherTile.classList[2] == 'Xclass') {
        
    
        currTile.src = blank
        var allChess = document.querySelectorAll("." + otherTile.classList[0]);
        // var allChess = document.querySelectorAll("." + otherTile.classList[0]);
        for (let piece of allChess) {
            piece.src = blank
        }
        
        setTimeout(function() {slideCandy()
        
            var id = setInterval(function() {
                if (drag == true) {
                    clearInterval(id)
                    dragEnd()}},100)
        },300)


        
    } 
    else if (otherTile.src == 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779252_1687735858419026_1279514988863500876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=SxeoFnD9X1EAX-m6hr6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRdIIyjqU_qOKrLVLTbPh7nuEi3FnLjNFgbY3qnvw6Z8Q&oe=65E3AB82' &&  currTile.classList[2] == 'Xclass') {
        
    
        otherTile.src = blank
        var allChess = document.querySelectorAll("." + currTile.classList[0]);
        // var allChess = document.querySelectorAll("." + otherTile.classList[0]);
        for (let piece of allChess) {
            piece.src = blank
        }
       
        setTimeout(function() {slideCandy()
        
            var id = setInterval(function() {
                if (drag == true) {
                    clearInterval(id)
                    dragEnd()}},100)
        },300)
        
        
    } 

        if ( (currTile.src == melonNgang ||
            currTile.src == yinyangNgang ||
            currTile.src == heartNgang ||
            currTile.src == waterNgang ||
            currTile.src == swordNgang ||
            currTile.src == starNgang ||
            
            currTile.src == melonDoc ||
            currTile.src == yinyangDoc ||
            currTile.src == heartDoc ||
            currTile.src == waterDoc ||
            currTile.src == swordDoc ||
            currTile.src == starDoc ) && (otherTile.src == melonNgang ||
                otherTile.src == yinyangNgang ||
                otherTile.src == heartNgang ||
                otherTile.src == waterNgang ||
                otherTile.src == swordNgang ||
                otherTile.src == starNgang ||
                
                otherTile.src == melonDoc ||
                otherTile.src == yinyangDoc ||
                otherTile.src == heartDoc ||
                otherTile.src == waterDoc ||
                otherTile.src == swordDoc ||
                otherTile.src == starDoc ) ) {
            var k = otherTile.id.split("-")
            a = Number(k[0])
            b  = Number(k[1])
            board[a][0].src = blank
            board[a][1].src = blank
            board[a][2].src = blank
            board[a][3].src = blank
            board[a][4].src = blank
            board[a][5].src = blank
            board[a][6].src = blank
            board[a][7].src = blank
            board[a][8].src = blank
    
    
            board[0][b].src = blank
            board[1][b].src = blank
            board[2][b].src = blank
            board[3][b].src = blank
            board[4][b].src = blank
            board[5][b].src = blank
            board[6][b].src = blank
            board[7][b].src = blank
            board[8][b].src = blank


            setTimeout(function() {slideCandy()
        
                var id = setInterval(function() {
                    if (drag == true) {
                        clearInterval(id)
                        dragEnd()}},100)
            },300)
        }
    
    
        if ( (
            currTile.src == melon3x3 ||
            currTile.src == yinyang3x3 ||
            currTile.src == heart3x3 ||
            currTile.src == water3x3 ||
            currTile.src == sword3x3 ||
            currTile.src == star3x3  ) && (otherTile.src == melonNgang ||
                otherTile.src == yinyangNgang ||
                otherTile.src == heartNgang ||
                otherTile.src == waterNgang ||
                otherTile.src == swordNgang ||
                otherTile.src == starNgang ||
                
                otherTile.src == melonDoc ||
                otherTile.src == yinyangDoc ||
                otherTile.src == heartDoc ||
                otherTile.src == waterDoc ||
                otherTile.src == swordDoc ||
                otherTile.src == starDoc ) ) {
            var k = otherTile.id.split("-")
            a = Number(k[0])
            b  = Number(k[1])
            board[a][0].src = blank
            board[a][1].src = blank
            board[a][2].src = blank
            board[a][3].src = blank
            board[a][4].src = blank
            board[a][5].src = blank
            board[a][6].src = blank
            board[a][7].src = blank
            board[a][8].src = blank
    
    
            board[0][b].src = blank
            board[1][b].src = blank
            board[2][b].src = blank
            board[3][b].src = blank
            board[4][b].src = blank
            board[5][b].src = blank
            board[6][b].src = blank
            board[7][b].src = blank
            board[8][b].src = blank
    
    
            if (b - 1 >= 0) {
    
                board[0][b-1].src = blank
                board[1][b-1].src = blank
                board[2][b-1].src = blank
                board[3][b-1].src = blank
                board[4][b-1].src = blank
                board[5][b-1].src = blank
                board[6][b-1].src = blank
                board[7][b-1].src = blank
                board[8][b-1].src = blank
            }
    
            if (b + 1 <= 8) {
    
                board[0][b+1].src = blank
                board[1][b+1].src = blank
                board[2][b+1].src = blank
                board[3][b+1].src = blank
                board[4][b+1].src = blank
                board[5][b+1].src = blank
                board[6][b+1].src = blank
                board[7][b+1].src = blank
                board[8][b+1].src = blank
            }
    
    
            if (a - 1 >= 0) {
    
                board[a -1 ][0].src = blank
                board[a -1 ][1].src = blank
                board[a -1 ][2].src = blank
                board[a -1 ][3].src = blank
                board[a -1 ][4].src = blank
                board[a -1 ][5].src = blank
                board[a -1 ][6].src = blank
                board[a -1 ][7].src = blank
                board[a -1 ][8].src = blank
            }
    
            if (a + 1 <= 8) {
    
                board[a+1][0].src = blank
                board[a+1][1].src = blank
                board[a+1][2].src = blank
                board[a+1][3].src = blank
                board[a+1][4].src = blank
                board[a+1][5].src = blank
                board[a+1][6].src = blank
                board[a+1][7].src = blank
                board[a+1][8].src = blank

                
            }

            setTimeout(function() {slideCandy()
        
                var id = setInterval(function() {
                    if (drag == true) {
                        clearInterval(id)
                        dragEnd()}},100)
            },300)
        }
     else   if ( (
        otherTile.src == melon3x3 ||
        otherTile.src == yinyang3x3 ||
        otherTile.src == heart3x3 ||
        otherTile.src == water3x3 ||
        otherTile.src == sword3x3 ||
        otherTile.src == star3x3  ) && (currTile.src == melonNgang ||
            currTile.src == yinyangNgang ||
            currTile.src == heartNgang ||
            currTile.src == waterNgang ||
            currTile.src == swordNgang ||
            currTile.src == starNgang ||
            
            currTile.src == melonDoc ||
            currTile.src == yinyangDoc ||
            currTile.src == heartDoc ||
            currTile.src == waterDoc ||
            currTile.src == swordDoc ||
            currTile.src == starDoc ) ) {
        var k = otherTile.id.split("-")
        a = Number(k[0])
        b  = Number(k[1])
        board[a][0].src = blank
        board[a][1].src = blank
        board[a][2].src = blank
        board[a][3].src = blank
        board[a][4].src = blank
        board[a][5].src = blank
        board[a][6].src = blank
        board[a][7].src = blank
        board[a][8].src = blank


        board[0][b].src = blank
        board[1][b].src = blank
        board[2][b].src = blank
        board[3][b].src = blank
        board[4][b].src = blank
        board[5][b].src = blank
        board[6][b].src = blank
        board[7][b].src = blank
        board[8][b].src = blank


        if (b - 1 >= 0) {

            board[0][b-1].src = blank
            board[1][b-1].src = blank
            board[2][b-1].src = blank
            board[3][b-1].src = blank
            board[4][b-1].src = blank
            board[5][b-1].src = blank
            board[6][b-1].src = blank
            board[7][b-1].src = blank
            board[8][b-1].src = blank
        }

        if (b + 1 <= 8) {

            board[0][b+1].src = blank
            board[1][b+1].src = blank
            board[2][b+1].src = blank
            board[3][b+1].src = blank
            board[4][b+1].src = blank
            board[5][b+1].src = blank
            board[6][b+1].src = blank
            board[7][b+1].src = blank
            board[8][b+1].src = blank
        }


        if (a - 1 >= 0) {

            board[a -1 ][0].src = blank
            board[a -1 ][1].src = blank
            board[a -1 ][2].src = blank
            board[a -1 ][3].src = blank
            board[a -1 ][4].src = blank
            board[a -1 ][5].src = blank
            board[a -1 ][6].src = blank
            board[a -1 ][7].src = blank
            board[a -1 ][8].src = blank
        }

        if (a + 1 <= 8) {

            board[a+1][0].src = blank
            board[a+1][1].src = blank
            board[a+1][2].src = blank
            board[a+1][3].src = blank
            board[a+1][4].src = blank
            board[a+1][5].src = blank
            board[a+1][6].src = blank
            board[a+1][7].src = blank
            board[a+1][8].src = blank

          
        }

        setTimeout(function() {slideCandy()
        
            var id = setInterval(function() {
                if (drag == true) {
                    clearInterval(id)
                    dragEnd()}},100)
        },300)
    }

    else {

        dragEnd()
    }
    



}
   