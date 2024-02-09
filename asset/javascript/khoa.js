
function checkClass(){
    var allChess = document.querySelectorAll(".ch-Chess")
    for (var piece of allChess) {
        switch(piece.src) {
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421809701_762220595931845_8704852172982755247_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=r-ppQ8ZqNZEAX9gj9E1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRcKuF7a7Wh0dagmI9ra4JE0eRYLux7p9zh62zfgP4tIQ&oe=65EBD782': {
                piece.classList.replace(piece.classList[0],"yinyang")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411115202_1093865118414101_2848535251316015944_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFJkE4r9uN9EiwFFT1CNEOA1T_6-6Ys0QLVP_r7pizRAryQy9j2zsbyXlvbzwuqu0FYyphbPkRbYyqN47gzzAhH&_nc_ohc=7eSuLHCSB9EAX-cwgjq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQijKji0Kpzufe6KqusF9rfca5llaJ2kcC3WxoXf_vGgA&oe=65CA1360': {
                piece.classList.replace(piece.classList[0],"melon")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421316821_2352999254897558_8375811345163435152_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=O5FUURn4WeoAX9W2QQ6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSBW0UFmtiadJ7GuarUUpakgNge4ky3EzNyKP7uXb_TzQ&oe=65EBE62C': {

                piece.classList.replace(piece.classList[0],"star")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411123765_2126178954425450_6024970361687618085_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEZf-AHXm51KqKJom7F1uGSFiVFwQarLloWJUXBBqsuWlGDkB4n2gCD40zNhXs1_SzSI9_Nm0GG5wUpq1OkVtJa&_nc_ohc=ki_gTn4hcTgAX-_bf5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxSSSnNhw4Y5QlTV7pMyiByc6VtBo7qKebyp0xXLM8qQ&oe=65C388B5': {
                piece.classList.replace(piece.classList[0],"heart")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411019611_815782587019913_6541505757016858131_n.png?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFyAt4juRnbweOjSyd9ivQCyGhgOjmkcPLIaGA6OaRw8t7Z2ArbXJIflqVssXdiLb9yBpPOPklIkjTfxvyX3Rrq&_nc_ohc=kFfABs56aisAX_47PPR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQJSWowquSeXCWt6fb6jchDgMl44nXZaRZBH1rSxdkuTA&oe=65C38326': {
                piece.classList.replace(piece.classList[0],"water")

                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/413466115_1362946924340719_5660391729943672205_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHEiWxKXVd9SW_EUfkts6WyOxW-HxD0qak7Fb4fEPSpqfsQakeLRHSHxN_0lZdS4w86PVkDKuR1eBb1mxc3OtsJ&_nc_ohc=G8U3Rb3lL-0AX-15bUs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRkeGn56wJPtSxkw0XjVzhyUrnpY3TLblDw60Igm29xQw&oe=65C3A9A0': {
                piece.classList.replace(piece.classList[0],"sword")
                break;
            }



            //block 5
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779252_1687735858419026_1279514988863500876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=SxeoFnD9X1EAX-m6hr6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRdIIyjqU_qOKrLVLTbPh7nuEi3FnLjNFgbY3qnvw6Z8Q&oe=65E3AB82': {
              piece.classList.replace(piece.classList[0],"haha")
                piece.classList.replace(piece.classList[2],"block5x5") 
                break;
            }

            //block 3
            case 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/415552276_883417743329290_5760261224251872829_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=8NF8a_aiVbcAX86q6JL&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdQZoVaR70aeGrSyLEcghGvdV67MPMsKTdMYOIToCIz6Gg&oe=65E3C6B1'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melon3x3") 
                break;
            }
            case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416524379_1641029899638859_1410628571081637374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=tBVoqCQOi8gAX8qHJ73&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdRBXHfwFKtf0g_6ql89aUvs8eHA6CjqwzX5x2ZiCXX_UA&oe=65E3B7F0'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heart3x3") 
                break;
            }
            case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/414387768_1136974081050216_8682184307687342785_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=ZIjHU_AbGtAAX858yDK&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdQKL7ihjWIOnFK6m8pOWWC3ho3Kh2Tj5-FOwx28UUQyLw&oe=65E3D988'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"sword3x3") 
                break;
            }
            case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/416228814_1390538054919469_5190161884989550427_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=jT2EUdSIr0gAX9wsDdD&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdRNA6vnztozngAu1UNa1jYRNLfqOSO-v7GQ6Fs8VQWUcg&oe=65E3B4C4'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyang3x3") 
                break;
            }
            case 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/420550326_2278116259051056_8008465044323889736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=rgp8erPpXrQAX9OpxOM&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdT3WQC_qb2jUGQEc_DyyaRzDF7gxpJ4hM6Q9-folpJ7Pw&oe=65E3E365'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"star3x3") 
                break;
            }
            case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416038977_839885894494298_8979224047729924987_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=lOb4iv8XZywAX_g_GuJ&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdQVi3R3hpYW1NJr5PIEgBk9MDTbQ2XSRU3sqlBt-CFloQ&oe=65E3D737'
            : {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"water3x3") 
                break;
            }


            //block Ngang

            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415993670_769521041900568_2442095872604535659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFMOPwPax4wsjeTxGgGxBxZNaYehiZIgrQ1ph6GJkiCtO-3kTPRPjOqJo6p4N67lwczysveVFl3yg-UhfqJ-EDw&_nc_ohc=9MLuVr3M17YAX-2R2LW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSCG42qDfy-dXuRlMBPNWLvHbiFzfDATZQ_PCfymIgRNw&oe=65DFD24E'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415794754_923409869191203_4595247974034810682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGgVhnv6GNpFdZKf3sliaItIH-bz6QlSTMgf5vPpCVJM4wn53hO9yglA6RpyyPGdcpR_oDcHTMAadsEFnpySSGX&_nc_ohc=l8UCi-fCLHsAX8R8yK5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQlPis96MKsg70L1HLHL8O4H99FeMUX9Fotcz0MbxLfTQ&oe=65DFCD68'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416029877_363793416407930_2323911269152227459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ9B_SaQKfKvYdP3mZhDfao5cYX6fIvw-jlxhfp8i_D4ZUYJ-vJ30zJN70ya6mSr-XmI53IzaUsqzLeyhfuvxG&_nc_ohc=4_AM-j0SZ44AX8_xSwx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdShuVYyzoknDPQd14bMOjEkeNjXOQYepEDYixD0B6XX8A&oe=65DFB68D'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415715895_1768078597004579_7008160831722332772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE-YMgZWVFduPxSSusnMMXxFmnRxW0SKcoWadHFbRIpyr9hs45A0imJBh4yjVM-UGZAtlm--Sgz76pFTrzwE6vY&_nc_ohc=1WQkJdGDHIoAX-a182w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT_vM_vrnf_wdm2grZ7AKSTZ7n9CHE85XeB6uVDlZdobQ&oe=65DFC2A6'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/400746102_193895663815033_4369722486619850039_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGstk-sfPz8uuna578r0IdISPohC5bRfQRI-iELltF9BM-S2zYhy8uJi2Me-V6X2OvCea42tcxJavi-mClpQmUt&_nc_ohc=YF_VGaR2WgQAX-cOeEm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRXYUpPkAlA6QlRlfc57nTxWgKq9LftJjRHZKBs4mXVNQ&oe=65DFE5EA'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415989087_1776678422801290_6885139645347593040_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHdshmxJGZGPl2_LiznpgaXZzch0dZAPO9nNyHR1kA877Aoy34OBxlUzrt89md-giTIPnsl7GJ3y7uYU7WP7ORi&_nc_ohc=sHTIn5HRxo0AX_wMu0i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT46sSut5nRxVDG9lRaruQq8FwQiszDiYjh-9-UeLdnLA&oe=65DFC4C9'
            : {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterNgang") 
                break;
            }

            //block Dọc

            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415666478_2381529852032691_4816161594463510263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGC7oXGUnJo0-a9QDXEL8u3VWAjC5WjDIlVYCMLlaMMiQfddsD3EWFctpmacj8QTK-ahllmV-7cKhCBmrsmBxav&_nc_ohc=mlmsYeZ1i5cAX_v-up9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSaXAfGvUzeCJXbgSyazEGCDHZxDfOV2pJX9W4BtGfc9w&oe=65DFD06A'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415813686_915190029846803_1819786914000242028_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFux4AQVS5Xu9VZtDOCkmALDff0o8e3zRAN9_Sjx7fNEDX666o2uFc02oQt3u5OO_xT8laprEHweA2B2ODueMbd&_nc_ohc=yy3p1kt_CscAX-loCVb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQHYOwDy30yo8gaaYH-sk1ifr_EyLXThjTBJnai8AmOsQ&oe=65DFDFB6'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416103839_924678375676745_5133161537133660389_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHYjaYmpTQFd1rxiSJA8poZCvgdxfHFqocK-B3F8cWqh2_KzJO1gsiW3Se19Uqq5Jj0RG1iA5iVQBFX8MciJZSG&_nc_ohc=vQolQCyaibEAX9dkK8h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSKdlNSOO_grC5FglQaF5SJ97UVUMOcN6aGWW5hpLgcFQ&oe=65DFD6CB'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779259_719829696614819_7075938053816391292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ-q-gNPmgDzeIrwppjwVLyjoqKv_13L_KOioq__Xcv4gdtqrWTTHkD2Bqp5qouWoEcK7My9RfbFrGem4VIKBU&_nc_ohc=GvaNxBf-WS4AX96AlLp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPiFLBlGo7rwRaO-VZM85AyQ5iEUly9l2qdbVaobJE5w&oe=65DFDC78'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416106092_705540598333758_9087815939519609496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGKaMSyIvWBKUmOCnsKYPWxE20i7s53hKYTbSLuzneEphHZwYk6gxB7fQBr2YRTHGupMHUL86udTBf8Ug-OnxmF&_nc_ohc=7O-KG9P3CZ4AX88SdDt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-wKDCrq8x8MCsbjyi9jN7zZ_hfSg2pfPfslzX0PFXbQ&oe=65DFC20F'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416042263_233312559825122_1520062130367640108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGvjPLspXgXcuae4P0qok8aWBSKVzFJXe1YFIpXMUld7dxhojZIRBPnps-yRZBcr-4lYEcCfyY1rdJrRJBClJ57&_nc_ohc=2ejjl7RSpesAX97yQFC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRldRKc1DST7xkkgsoXPVG6T5k4gfDfLavcFnEMc1FTUw&oe=65DFEB58'
            : {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterDoc") 
                break;
            }




        }
    }
    // let i = checkValid()
    // if (i == true) {

    //     crushCandy()
    // } 
    // else {
    //     switch(piece.src) {
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421809701_762220595931845_8704852172982755247_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=r-ppQ8ZqNZEAX9gj9E1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRcKuF7a7Wh0dagmI9ra4JE0eRYLux7p9zh62zfgP4tIQ&oe=65EBD782': {
    //             piece.classList.replace(piece.classList[0],"yinyang")
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411115202_1093865118414101_2848535251316015944_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFJkE4r9uN9EiwFFT1CNEOA1T_6-6Ys0QLVP_r7pizRAryQy9j2zsbyXlvbzwuqu0FYyphbPkRbYyqN47gzzAhH&_nc_ohc=7eSuLHCSB9EAX-cwgjq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQijKji0Kpzufe6KqusF9rfca5llaJ2kcC3WxoXf_vGgA&oe=65CA1360': {
    //             piece.classList.replace(piece.classList[0],"melon")
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421316821_2352999254897558_8375811345163435152_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=O5FUURn4WeoAX9W2QQ6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSBW0UFmtiadJ7GuarUUpakgNge4ky3EzNyKP7uXb_TzQ&oe=65EBE62C': {

    //             piece.classList.replace(piece.classList[0],"star")
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411123765_2126178954425450_6024970361687618085_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEZf-AHXm51KqKJom7F1uGSFiVFwQarLloWJUXBBqsuWlGDkB4n2gCD40zNhXs1_SzSI9_Nm0GG5wUpq1OkVtJa&_nc_ohc=ki_gTn4hcTgAX-_bf5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxSSSnNhw4Y5QlTV7pMyiByc6VtBo7qKebyp0xXLM8qQ&oe=65C388B5': {
    //             piece.classList.replace(piece.classList[0],"heart")
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411019611_815782587019913_6541505757016858131_n.png?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFyAt4juRnbweOjSyd9ivQCyGhgOjmkcPLIaGA6OaRw8t7Z2ArbXJIflqVssXdiLb9yBpPOPklIkjTfxvyX3Rrq&_nc_ohc=kFfABs56aisAX_47PPR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQJSWowquSeXCWt6fb6jchDgMl44nXZaRZBH1rSxdkuTA&oe=65C38326': {
    //             piece.classList.replace(piece.classList[0],"water")

    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/413466115_1362946924340719_5660391729943672205_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHEiWxKXVd9SW_EUfkts6WyOxW-HxD0qak7Fb4fEPSpqfsQakeLRHSHxN_0lZdS4w86PVkDKuR1eBb1mxc3OtsJ&_nc_ohc=G8U3Rb3lL-0AX-15bUs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRkeGn56wJPtSxkw0XjVzhyUrnpY3TLblDw60Igm29xQw&oe=65C3A9A0': {
    //             piece.classList.replace(piece.classList[0],"sword")
    //             break;
    //         }



    //         //block 5
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779252_1687735858419026_1279514988863500876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=SxeoFnD9X1EAX-m6hr6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRdIIyjqU_qOKrLVLTbPh7nuEi3FnLjNFgbY3qnvw6Z8Q&oe=65E3AB82': {
    //           piece.classList.replace(piece.classList[0],"haha")
    //             piece.classList.replace(piece.classList[2],"block5x5") 
    //             break;
    //         }

    //         //block 3
    //         case 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/415552276_883417743329290_5760261224251872829_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=8NF8a_aiVbcAX86q6JL&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdQZoVaR70aeGrSyLEcghGvdV67MPMsKTdMYOIToCIz6Gg&oe=65E3C6B1'
    //         : {
    //             piece.classList.replace(piece.classList[0],"melon")
    //             piece.classList.replace(piece.classList[2],"melon3x3") 
    //             break;
    //         }
    //         case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416524379_1641029899638859_1410628571081637374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=tBVoqCQOi8gAX8qHJ73&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdRBXHfwFKtf0g_6ql89aUvs8eHA6CjqwzX5x2ZiCXX_UA&oe=65E3B7F0'
    //         : {
    //             piece.classList.replace(piece.classList[0],"heart")
    //             piece.classList.replace(piece.classList[2],"heart3x3") 
    //             break;
    //         }
    //         case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/414387768_1136974081050216_8682184307687342785_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=ZIjHU_AbGtAAX858yDK&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdQKL7ihjWIOnFK6m8pOWWC3ho3Kh2Tj5-FOwx28UUQyLw&oe=65E3D988'
    //         : {
    //             piece.classList.replace(piece.classList[0],"sword")
    //             piece.classList.replace(piece.classList[2],"sword3x3") 
    //             break;
    //         }
    //         case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/416228814_1390538054919469_5190161884989550427_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=jT2EUdSIr0gAX9wsDdD&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdRNA6vnztozngAu1UNa1jYRNLfqOSO-v7GQ6Fs8VQWUcg&oe=65E3B4C4'
    //         : {
    //             piece.classList.replace(piece.classList[0],"yinyang")
    //             piece.classList.replace(piece.classList[2],"yinyang3x3") 
    //             break;
    //         }
    //         case 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/420550326_2278116259051056_8008465044323889736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=rgp8erPpXrQAX9OpxOM&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdT3WQC_qb2jUGQEc_DyyaRzDF7gxpJ4hM6Q9-folpJ7Pw&oe=65E3E365'
    //         : {
    //             piece.classList.replace(piece.classList[0],"star")
    //             piece.classList.replace(piece.classList[2],"star3x3") 
    //             break;
    //         }
    //         case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416038977_839885894494298_8979224047729924987_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=lOb4iv8XZywAX_g_GuJ&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdQVi3R3hpYW1NJr5PIEgBk9MDTbQ2XSRU3sqlBt-CFloQ&oe=65E3D737'
    //         : {
    //             piece.classList.replace(piece.classList[0],"water")
    //             piece.classList.replace(piece.classList[2],"water3x3") 
    //             break;
    //         }


    //         //block Ngang

    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415993670_769521041900568_2442095872604535659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFMOPwPax4wsjeTxGgGxBxZNaYehiZIgrQ1ph6GJkiCtO-3kTPRPjOqJo6p4N67lwczysveVFl3yg-UhfqJ-EDw&_nc_ohc=9MLuVr3M17YAX-2R2LW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSCG42qDfy-dXuRlMBPNWLvHbiFzfDATZQ_PCfymIgRNw&oe=65DFD24E'
    //         : {
    //             piece.classList.replace(piece.classList[0],"melon")
    //             piece.classList.replace(piece.classList[2],"melonNgang") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415794754_923409869191203_4595247974034810682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGgVhnv6GNpFdZKf3sliaItIH-bz6QlSTMgf5vPpCVJM4wn53hO9yglA6RpyyPGdcpR_oDcHTMAadsEFnpySSGX&_nc_ohc=l8UCi-fCLHsAX8R8yK5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQlPis96MKsg70L1HLHL8O4H99FeMUX9Fotcz0MbxLfTQ&oe=65DFCD68'
    //         : {
    //             piece.classList.replace(piece.classList[0],"heart")
    //             piece.classList.replace(piece.classList[2],"heartNgang") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416029877_363793416407930_2323911269152227459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ9B_SaQKfKvYdP3mZhDfao5cYX6fIvw-jlxhfp8i_D4ZUYJ-vJ30zJN70ya6mSr-XmI53IzaUsqzLeyhfuvxG&_nc_ohc=4_AM-j0SZ44AX8_xSwx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdShuVYyzoknDPQd14bMOjEkeNjXOQYepEDYixD0B6XX8A&oe=65DFB68D'
    //         : {
    //             piece.classList.replace(piece.classList[0],"sword")
    //             piece.classList.replace(piece.classList[2],"swordNgang") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415715895_1768078597004579_7008160831722332772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE-YMgZWVFduPxSSusnMMXxFmnRxW0SKcoWadHFbRIpyr9hs45A0imJBh4yjVM-UGZAtlm--Sgz76pFTrzwE6vY&_nc_ohc=1WQkJdGDHIoAX-a182w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT_vM_vrnf_wdm2grZ7AKSTZ7n9CHE85XeB6uVDlZdobQ&oe=65DFC2A6'
    //         : {
    //             piece.classList.replace(piece.classList[0],"yinyang")
    //             piece.classList.replace(piece.classList[2],"yinyangNgang") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/400746102_193895663815033_4369722486619850039_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGstk-sfPz8uuna578r0IdISPohC5bRfQRI-iELltF9BM-S2zYhy8uJi2Me-V6X2OvCea42tcxJavi-mClpQmUt&_nc_ohc=YF_VGaR2WgQAX-cOeEm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRXYUpPkAlA6QlRlfc57nTxWgKq9LftJjRHZKBs4mXVNQ&oe=65DFE5EA'
    //         : {
    //             piece.classList.replace(piece.classList[0],"star")
    //             piece.classList.replace(piece.classList[2],"starNgang") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415989087_1776678422801290_6885139645347593040_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHdshmxJGZGPl2_LiznpgaXZzch0dZAPO9nNyHR1kA877Aoy34OBxlUzrt89md-giTIPnsl7GJ3y7uYU7WP7ORi&_nc_ohc=sHTIn5HRxo0AX_wMu0i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT46sSut5nRxVDG9lRaruQq8FwQiszDiYjh-9-UeLdnLA&oe=65DFC4C9'
    //         : {
    //             piece.classList.replace(piece.classList[0],"water")
    //             piece.classList.replace(piece.classList[2],"waterNgang") 
    //             break;
    //         }

    //         //block Dọc

    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415666478_2381529852032691_4816161594463510263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGC7oXGUnJo0-a9QDXEL8u3VWAjC5WjDIlVYCMLlaMMiQfddsD3EWFctpmacj8QTK-ahllmV-7cKhCBmrsmBxav&_nc_ohc=mlmsYeZ1i5cAX_v-up9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSaXAfGvUzeCJXbgSyazEGCDHZxDfOV2pJX9W4BtGfc9w&oe=65DFD06A'
    //         : {
    //             piece.classList.replace(piece.classList[0],"melon")
    //             piece.classList.replace(piece.classList[2],"melonDoc") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415813686_915190029846803_1819786914000242028_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFux4AQVS5Xu9VZtDOCkmALDff0o8e3zRAN9_Sjx7fNEDX666o2uFc02oQt3u5OO_xT8laprEHweA2B2ODueMbd&_nc_ohc=yy3p1kt_CscAX-loCVb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQHYOwDy30yo8gaaYH-sk1ifr_EyLXThjTBJnai8AmOsQ&oe=65DFDFB6'
    //         : {
    //             piece.classList.replace(piece.classList[0],"heart")
    //             piece.classList.replace(piece.classList[2],"heartDoc") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416103839_924678375676745_5133161537133660389_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHYjaYmpTQFd1rxiSJA8poZCvgdxfHFqocK-B3F8cWqh2_KzJO1gsiW3Se19Uqq5Jj0RG1iA5iVQBFX8MciJZSG&_nc_ohc=vQolQCyaibEAX9dkK8h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSKdlNSOO_grC5FglQaF5SJ97UVUMOcN6aGWW5hpLgcFQ&oe=65DFD6CB'
    //         : {
    //             piece.classList.replace(piece.classList[0],"sword")
    //             piece.classList.replace(piece.classList[2],"swordDoc") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779259_719829696614819_7075938053816391292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ-q-gNPmgDzeIrwppjwVLyjoqKv_13L_KOioq__Xcv4gdtqrWTTHkD2Bqp5qouWoEcK7My9RfbFrGem4VIKBU&_nc_ohc=GvaNxBf-WS4AX96AlLp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPiFLBlGo7rwRaO-VZM85AyQ5iEUly9l2qdbVaobJE5w&oe=65DFDC78'
    //         : {
    //             piece.classList.replace(piece.classList[0],"yinyang")
    //             piece.classList.replace(piece.classList[2],"yinyangDoc") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416106092_705540598333758_9087815939519609496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGKaMSyIvWBKUmOCnsKYPWxE20i7s53hKYTbSLuzneEphHZwYk6gxB7fQBr2YRTHGupMHUL86udTBf8Ug-OnxmF&_nc_ohc=7O-KG9P3CZ4AX88SdDt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-wKDCrq8x8MCsbjyi9jN7zZ_hfSg2pfPfslzX0PFXbQ&oe=65DFC20F'
    //         : {
    //             piece.classList.replace(piece.classList[0],"star")
    //             piece.classList.replace(piece.classList[2],"starDoc") 
    //             break;
    //         }
    //         case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416042263_233312559825122_1520062130367640108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGvjPLspXgXcuae4P0qok8aWBSKVzFJXe1YFIpXMUld7dxhojZIRBPnps-yRZBcr-4lYEcCfyY1rdJrRJBClJ57&_nc_ohc=2ejjl7RSpesAX97yQFC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRldRKc1DST7xkkgsoXPVG6T5k4gfDfLavcFnEMc1FTUw&oe=65DFEB58'
    //         : {
    //             piece.classList.replace(piece.classList[0],"water")
    //             piece.classList.replace(piece.classList[2],"waterDoc") 
    //             break;
    //         }




    //     }
    // }
    crushCandy()
}


function checkClass2() {
    var allChess = document.querySelectorAll(".ch-Chess")
    for (var piece of allChess) {
        switch(piece.src) {
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421809701_762220595931845_8704852172982755247_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=r-ppQ8ZqNZEAX9gj9E1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRcKuF7a7Wh0dagmI9ra4JE0eRYLux7p9zh62zfgP4tIQ&oe=65EBD782': {
                piece.classList.replace(piece.classList[0],"yinyang")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411115202_1093865118414101_2848535251316015944_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFJkE4r9uN9EiwFFT1CNEOA1T_6-6Ys0QLVP_r7pizRAryQy9j2zsbyXlvbzwuqu0FYyphbPkRbYyqN47gzzAhH&_nc_ohc=7eSuLHCSB9EAX-cwgjq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQijKji0Kpzufe6KqusF9rfca5llaJ2kcC3WxoXf_vGgA&oe=65CA1360': {
                piece.classList.replace(piece.classList[0],"melon")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/421316821_2352999254897558_8375811345163435152_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=O5FUURn4WeoAX9W2QQ6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSBW0UFmtiadJ7GuarUUpakgNge4ky3EzNyKP7uXb_TzQ&oe=65EBE62C': {

                piece.classList.replace(piece.classList[0],"star")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411123765_2126178954425450_6024970361687618085_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEZf-AHXm51KqKJom7F1uGSFiVFwQarLloWJUXBBqsuWlGDkB4n2gCD40zNhXs1_SzSI9_Nm0GG5wUpq1OkVtJa&_nc_ohc=ki_gTn4hcTgAX-_bf5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxSSSnNhw4Y5QlTV7pMyiByc6VtBo7qKebyp0xXLM8qQ&oe=65C388B5': {
                piece.classList.replace(piece.classList[0],"heart")
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411019611_815782587019913_6541505757016858131_n.png?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFyAt4juRnbweOjSyd9ivQCyGhgOjmkcPLIaGA6OaRw8t7Z2ArbXJIflqVssXdiLb9yBpPOPklIkjTfxvyX3Rrq&_nc_ohc=kFfABs56aisAX_47PPR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQJSWowquSeXCWt6fb6jchDgMl44nXZaRZBH1rSxdkuTA&oe=65C38326': {
                piece.classList.replace(piece.classList[0],"water")

                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/413466115_1362946924340719_5660391729943672205_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHEiWxKXVd9SW_EUfkts6WyOxW-HxD0qak7Fb4fEPSpqfsQakeLRHSHxN_0lZdS4w86PVkDKuR1eBb1mxc3OtsJ&_nc_ohc=G8U3Rb3lL-0AX-15bUs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRkeGn56wJPtSxkw0XjVzhyUrnpY3TLblDw60Igm29xQw&oe=65C3A9A0': {
                piece.classList.replace(piece.classList[0],"sword")
                break;
            }



            //block 5
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779252_1687735858419026_1279514988863500876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=SxeoFnD9X1EAX-m6hr6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRdIIyjqU_qOKrLVLTbPh7nuEi3FnLjNFgbY3qnvw6Z8Q&oe=65E3AB82': {
              piece.classList.replace(piece.classList[0],"haha")
                piece.classList.replace(piece.classList[2],"block5x5") 
                break;
            }

            //block 3
            case 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/415552276_883417743329290_5760261224251872829_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=8NF8a_aiVbcAX86q6JL&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdQZoVaR70aeGrSyLEcghGvdV67MPMsKTdMYOIToCIz6Gg&oe=65E3C6B1'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melon3x3") 
                break;
            }
            case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416524379_1641029899638859_1410628571081637374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=tBVoqCQOi8gAX8qHJ73&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdRBXHfwFKtf0g_6ql89aUvs8eHA6CjqwzX5x2ZiCXX_UA&oe=65E3B7F0'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heart3x3") 
                break;
            }
            case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/414387768_1136974081050216_8682184307687342785_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=ZIjHU_AbGtAAX858yDK&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdQKL7ihjWIOnFK6m8pOWWC3ho3Kh2Tj5-FOwx28UUQyLw&oe=65E3D988'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"sword3x3") 
                break;
            }
            case 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/416228814_1390538054919469_5190161884989550427_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=jT2EUdSIr0gAX9wsDdD&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdRNA6vnztozngAu1UNa1jYRNLfqOSO-v7GQ6Fs8VQWUcg&oe=65E3B4C4'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyang3x3") 
                break;
            }
            case 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/420550326_2278116259051056_8008465044323889736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=rgp8erPpXrQAX9OpxOM&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdT3WQC_qb2jUGQEc_DyyaRzDF7gxpJ4hM6Q9-folpJ7Pw&oe=65E3E365'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"star3x3") 
                break;
            }
            case 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/416038977_839885894494298_8979224047729924987_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=lOb4iv8XZywAX_g_GuJ&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdQVi3R3hpYW1NJr5PIEgBk9MDTbQ2XSRU3sqlBt-CFloQ&oe=65E3D737'
            : {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"water3x3") 
                break;
            }


            //block Ngang

            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415993670_769521041900568_2442095872604535659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFMOPwPax4wsjeTxGgGxBxZNaYehiZIgrQ1ph6GJkiCtO-3kTPRPjOqJo6p4N67lwczysveVFl3yg-UhfqJ-EDw&_nc_ohc=9MLuVr3M17YAX-2R2LW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSCG42qDfy-dXuRlMBPNWLvHbiFzfDATZQ_PCfymIgRNw&oe=65DFD24E'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415794754_923409869191203_4595247974034810682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGgVhnv6GNpFdZKf3sliaItIH-bz6QlSTMgf5vPpCVJM4wn53hO9yglA6RpyyPGdcpR_oDcHTMAadsEFnpySSGX&_nc_ohc=l8UCi-fCLHsAX8R8yK5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQlPis96MKsg70L1HLHL8O4H99FeMUX9Fotcz0MbxLfTQ&oe=65DFCD68'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416029877_363793416407930_2323911269152227459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ9B_SaQKfKvYdP3mZhDfao5cYX6fIvw-jlxhfp8i_D4ZUYJ-vJ30zJN70ya6mSr-XmI53IzaUsqzLeyhfuvxG&_nc_ohc=4_AM-j0SZ44AX8_xSwx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdShuVYyzoknDPQd14bMOjEkeNjXOQYepEDYixD0B6XX8A&oe=65DFB68D'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415715895_1768078597004579_7008160831722332772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE-YMgZWVFduPxSSusnMMXxFmnRxW0SKcoWadHFbRIpyr9hs45A0imJBh4yjVM-UGZAtlm--Sgz76pFTrzwE6vY&_nc_ohc=1WQkJdGDHIoAX-a182w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT_vM_vrnf_wdm2grZ7AKSTZ7n9CHE85XeB6uVDlZdobQ&oe=65DFC2A6'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/400746102_193895663815033_4369722486619850039_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGstk-sfPz8uuna578r0IdISPohC5bRfQRI-iELltF9BM-S2zYhy8uJi2Me-V6X2OvCea42tcxJavi-mClpQmUt&_nc_ohc=YF_VGaR2WgQAX-cOeEm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRXYUpPkAlA6QlRlfc57nTxWgKq9LftJjRHZKBs4mXVNQ&oe=65DFE5EA'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starNgang") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415989087_1776678422801290_6885139645347593040_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHdshmxJGZGPl2_LiznpgaXZzch0dZAPO9nNyHR1kA877Aoy34OBxlUzrt89md-giTIPnsl7GJ3y7uYU7WP7ORi&_nc_ohc=sHTIn5HRxo0AX_wMu0i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT46sSut5nRxVDG9lRaruQq8FwQiszDiYjh-9-UeLdnLA&oe=65DFC4C9'
            : {
                piece.classList.replace(piece.classList[0],"water")
                piece.classList.replace(piece.classList[2],"waterNgang") 
                break;
            }

            //block Dọc

            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415666478_2381529852032691_4816161594463510263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGC7oXGUnJo0-a9QDXEL8u3VWAjC5WjDIlVYCMLlaMMiQfddsD3EWFctpmacj8QTK-ahllmV-7cKhCBmrsmBxav&_nc_ohc=mlmsYeZ1i5cAX_v-up9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSaXAfGvUzeCJXbgSyazEGCDHZxDfOV2pJX9W4BtGfc9w&oe=65DFD06A'
            : {
                piece.classList.replace(piece.classList[0],"melon")
                piece.classList.replace(piece.classList[2],"melonDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415813686_915190029846803_1819786914000242028_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFux4AQVS5Xu9VZtDOCkmALDff0o8e3zRAN9_Sjx7fNEDX666o2uFc02oQt3u5OO_xT8laprEHweA2B2ODueMbd&_nc_ohc=yy3p1kt_CscAX-loCVb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQHYOwDy30yo8gaaYH-sk1ifr_EyLXThjTBJnai8AmOsQ&oe=65DFDFB6'
            : {
                piece.classList.replace(piece.classList[0],"heart")
                piece.classList.replace(piece.classList[2],"heartDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416103839_924678375676745_5133161537133660389_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHYjaYmpTQFd1rxiSJA8poZCvgdxfHFqocK-B3F8cWqh2_KzJO1gsiW3Se19Uqq5Jj0RG1iA5iVQBFX8MciJZSG&_nc_ohc=vQolQCyaibEAX9dkK8h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSKdlNSOO_grC5FglQaF5SJ97UVUMOcN6aGWW5hpLgcFQ&oe=65DFD6CB'
            : {
                piece.classList.replace(piece.classList[0],"sword")
                piece.classList.replace(piece.classList[2],"swordDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/415779259_719829696614819_7075938053816391292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFQ-q-gNPmgDzeIrwppjwVLyjoqKv_13L_KOioq__Xcv4gdtqrWTTHkD2Bqp5qouWoEcK7My9RfbFrGem4VIKBU&_nc_ohc=GvaNxBf-WS4AX96AlLp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPiFLBlGo7rwRaO-VZM85AyQ5iEUly9l2qdbVaobJE5w&oe=65DFDC78'
            : {
                piece.classList.replace(piece.classList[0],"yinyang")
                piece.classList.replace(piece.classList[2],"yinyangDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416106092_705540598333758_9087815939519609496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGKaMSyIvWBKUmOCnsKYPWxE20i7s53hKYTbSLuzneEphHZwYk6gxB7fQBr2YRTHGupMHUL86udTBf8Ug-OnxmF&_nc_ohc=7O-KG9P3CZ4AX88SdDt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-wKDCrq8x8MCsbjyi9jN7zZ_hfSg2pfPfslzX0PFXbQ&oe=65DFC20F'
            : {
                piece.classList.replace(piece.classList[0],"star")
                piece.classList.replace(piece.classList[2],"starDoc") 
                break;
            }
            case 'https://scontent.xx.fbcdn.net/v/t1.15752-9/416042263_233312559825122_1520062130367640108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGvjPLspXgXcuae4P0qok8aWBSKVzFJXe1YFIpXMUld7dxhojZIRBPnps-yRZBcr-4lYEcCfyY1rdJrRJBClJ57&_nc_ohc=2ejjl7RSpesAX97yQFC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRldRKc1DST7xkkgsoXPVG6T5k4gfDfLavcFnEMc1FTUw&oe=65DFEB58'
            : {
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
   