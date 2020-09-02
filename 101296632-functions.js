//function one
function function1(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){ 
            if((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z") || (str[i] >= 0 && str[i] <= 9 && str[i] != " ")){
                count++;
            } 
            else{
                continue;
            }
        }
    return count;
}

//function two
function function2(str, num){
    let count = "", newStr = "", mainStr = "";
    for(let i = 0; i < num; i++){                    // get how many stars to add
        count += "*";
    }
    newStr = count;
    mainStr = newStr + str + newStr;                // add stars at the beginning and at the end of the string
    return mainStr;
}

//function three
function function3(str, char){
    let mainStr = "", charStr = "",checkChar = "", upChar = "", lowChar = "", newChar = "";
    let num = 0, numChar = 0;
    charStr = "" + char;
    checkChar = charStr.charCodeAt(0);                  // for checking char is uppercase or lowercase
    if(checkChar > 64 && checkChar < 91){               // if char is uppercase
            upChar = char;
            lowChar = String.fromCharCode(upChar + 32);     // convert to lowercase
    }
    else{                                               // if char is lowercase
        lowChar = char;
        numChar = lowChar.charCodeAt();
        upChar = String.fromCharCode(numChar & 223);    // convert to uppercase
    }
    for(let i = 0; i < str.length; i++){                 // for checking character(second argument) in the string
        if(str[i] === upChar || str[i] === lowChar){     // if character is found in the string
            num = str.charCodeAt(i);                     // get the code number of the character
            if(num > 64 && num < 91){                    // change to the opposite character
                newChar = String.fromCharCode(num + 32);
                mainStr = mainStr + newChar;
            }
            else{
                newChar = String.fromCharCode(num & 223);
                mainStr = mainStr + newChar;
            }
        }
        else{                                    // if character is not found 
                mainStr = mainStr + str[i];
        }
    }
    return mainStr;
}

//function four
function function4(arr, str){
    let num, newStr = "";
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        if(num > 0 && num <= 10000){
            if(str === "odd"){
                if(num % 2 != 0){
                    if((i != arr.length -1) && ((i + 1) != arr.length - 1)){
                        newStr += "" + arr[i + 1];
                    newStr += "-";
                    i++;
                    }
                    else{
                        newStr += "" + arr[i + 1];
                        i++;
                    }
                }
                else{
                    if((i != arr.length -1) && ((i + 1) != arr.length - 1)){
                        newStr += "" + arr[i];
                    newStr += "-";
                    }
                    else{
                        newStr += "" + arr[i];
                    }
                }
            }else if(str === "even"){
                if(num % 2 === 0){
                    if((i != arr.length) && ((i + 1) != arr.length)){
                        newStr += "" + arr[i + 1];
                    newStr += "-";
                    i++;
                    }
                    else{
                        newStr += "" + arr[i];
                    }
                }
                else{
                    if((i != arr.length) && ((i + 1) != arr.length)){
                        newStr += "" + arr[i];
                    newStr += "-";
                    }
                    else{
                        newStr += "" + arr[i];
                    }
                }
            }else{
                newStr += "" + arr[i];
            }
        }else{
            if((i != arr.length) && ((i + 1) != arr.length)){
                newStr += "" + arr[i];
            newStr += "-";
            }
            else{
                newStr += "" + arr[i];
            }
        }
        
    }
    return newStr;
}
    
//function five
function function5(arr, num){
    let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(sum <= num){
                sum += arr[i];
                if(sum >= num){
                    break;
                }
            }
            else{
                continue;
            }
        }
        return sum;
    }

// function six
function function6(arr){
    let str = "", num, newStr = "", total = 0;
    for(let i = 0; i < arr.length; i++){                    // change array to string
        let sum = 0;
        str = arr[i];
        newStr = "" + str;
        for(let j = 0; j < newStr.length; j++){            // get the code number of the element
            num = newStr.charCodeAt(j);
            sum += num;
        }
       total += sum;
    }
    return total;
}

//function seven
function function7(arr, char){
    let newStr = "", mainStr = "", str = "";
    let charStr = "", checkChar = "", newChar = "", numCode, upChar = "", lowChar = "";
    charStr = "" + char;                                   // change the character to the string to get the code number of the character
    checkChar = charStr.charCodeAt(0);
    if(checkChar > 64 && checkChar < 91){                  // check the character is uppercase
        upChar = char;
        lowChar = String.fromCharCode(checkChar + 32);     // change the uppercase to lowercase
    }
    else{                                 // the character is lowercase
        lowChar = char;
        upChar = String.fromCharCode(checkChar & 223);      // change the lowercase to uppercase
    }

    for(let i = 0; i < arr.length; i++){
        str = arr[i];
        for(let j = 0; j < str.length; j++){           // for finding the character in the string
            if(str[j] === upChar || str[j] === lowChar){    
                if(j === 0){              // checking if the character is the first place of the string
                    if(str[j + 1] === upChar || str[j + 1] === lowChar){
                    newChar = str[j + 2];                           // remove the character from the string and replace the second character
                    numCode = newChar.charCodeAt(); 
                    newStr += String.fromCharCode(numCode & 223);    //changing the second place character to uppercase
                    j++;
                    } 
                    else {newChar = str[j + 1];                           // remove the character from the string and replace the second character
                        numCode = newChar.charCodeAt(); 
                        newStr += String.fromCharCode(numCode & 223);    //changing the second place character to uppercase
                        j++;                                           // adding 1 to the value of j because that place is already added in the string
                    }
                }
                else if(j != str.length - 1){                //if the character is not the first place
                    if(str[j + 1] === upChar || str[j + 1] === lowChar){
                        newStr += str[j + 2];
                        j += 2;
                    }else {
                        newStr += str[j + 1];                    // remove the character and replace the next character in the string
                        j++;                                     // adding 1 to the value of j because that place is already added in the string
                    }
                }
            }
            else{                         // if the value of the array is not the same with the character
                newStr += str[j];
            }
        }
        if(i != arr.length - 1){          // checking the array to add ", "
            mainStr += newStr + ",";
        }
        else{
            mainStr += newStr;
        }
        newStr = "";
    }
    return mainStr;
}

//function eight
function function8(arr, char){
    let count = 0, num = 0, str = "", display = "", charStr = "", checkChar = "", upChar = "", lowChar = "", numChar = "";
    charStr = "" + char;                         // change the character to the string
    checkChar = charStr.charCodeAt(0);           // getting the character code 
    if(checkChar > 64 && checkChar < 91){        // checking the character is uppercase or lowercase
        upChar = char;
        lowChar = String.fromCharCode(checkChar + 32);
    }
    else{
        lowChar = char;
        numChar = lowChar.charCodeAt();
        upChar = String.fromCharCode(numChar & 223);
    }
    for(let i = 0; i < arr.length; i++){              // for finding the character in the string and count it
        str = "" + arr[i];
        for(let j = 1; j < arr[i].length; j++){
            if(str[j] === upChar || str[j] === lowChar){
                if(j % 2 != 0){                      // checking the index number is odd
                    count++;
                }
                else{
                    continue;
                }
            }
            else{
                continue;
            }
        }
        num = count;
        if(i === arr.length - 1){                     // checking the array to add "-"
            display += num;
        }
        else{
            display += num + "-";
        }
        count = 0;
    }
    return display;
}

//function nine
function function9(arr){
    let str = "", newStr = "", mainStr = "";
    for(let i = 0; i < arr.length; i++){
        str = arr[i];
        newStr = "" + str;
        mainStr += String.fromCharCode(newStr);          //changing character from the code number
    }
    return mainStr;
}