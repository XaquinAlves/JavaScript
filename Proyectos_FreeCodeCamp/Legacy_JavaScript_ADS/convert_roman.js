function convertToRoman(num) {
    let numArray = Array.from(String(num,Number));
    console.log(numArray);
    let roman = "";

    while(numArray.length > 0){
        //Discriminamos Unidades, Decenas, Centenas y Millares por la longitud del array
        switch(numArray.length){
            case 1: { //Unidades
                if(numArray[0] == 9){
                    roman += "IX";
                } else if (numArray[0] > 5) {
                    roman += "V" + "I".repeat(numArray[0]-5);
                } else if (numArray[0] == 5) {
                    roman += "V";
                } else if (numArray[0] == 4){
                    roman += "IV";
                } else {
                    roman += "I".repeat(numArray[0]);
                }
                break;
            }
            case 2: { //Decenas
                if(numArray[0] == 9){
                    roman += "XC";
                } else if (numArray[0] > 5) {
                    roman += "L" + "X".repeat(numArray[0]-5);
                } else if (numArray[0] == 5) {
                    roman += "L";
                } else if (numArray[0] == 4){
                    roman += "XL";
                } else {
                    roman += "X".repeat(numArray[0]);
                }
                break;
            }
            case 3: { //Centenas
                if(numArray[0] == 9){
                    roman += "CM";
                } else if (numArray[0] > 5) {
                    roman += "D" + "C".repeat(numArray[0]-5);
                } else if (numArray[0] == 5) {
                    roman += "D";
                } else if (numArray[0] == 4){
                    roman += "CD";
                }  else {
                    roman += "C".repeat(numArray[0]);
                }
                break;
            }
            case 4: { //Millares
                roman += "M".repeat(numArray[0]);
                break;
            }
            default: {
                console.warn("Numero muy grande o negativo");
                numArray = [];
            }

        }
        //Desechamos el numero una vez está procesado
        numArray.shift();
        console.log(numArray);
    }

    console.log(roman);
}