/* eslint-enable */                             //! Bu setirden Basyalaraq Butun fileni Yoxlasin
/* eslint-disable */                            //! Bu setirden Basyalaraq Butun fileni Yoxlamaqi dayandirsin
//eslint-disable-line                           //! Yazildiqi setrin Yoxlamaqini dayandirsin
/* eslint-enable */                             //! Yeniden yazmali oldum cunki 2ci sert deaktiv edir ESLint-i

function checkPositive(a, b, c, d) {            //! consistent-return and max-params
    let x = 'Hi';                               //! no-unused-vars
    if (a == 10) {                              //! eqeqeq
return true;                                    //! indent
    }
    console.log("Hello World");                 //! no-console and quotes
console.log("Hello World2")                     // eslint-disable-line     
console.log("Hello World2")                     // eslint-disable-line no-console, indent
    debugger;
    if(true){                                   //Todo: Nested 1 deep
        if(true){                               //Todo: Nested 2 deep
            if(true){                           //Todo: Nested 3 deep
                if(true){                       //Todo: Nested 4 deep
                    if(true){                   //! max-depth
                        return true;
                    }
                }
            }
        }
    }
}


                                                //! no-multiple-empty-lines
console.log(checkPositive(10, 12, 14, 16))      //! semi
















































































































































































































































































// MAX LINES REACHED                //! max-lines
