       function triangulo (var1, var2, var3){

        var lado1 = var1;
        var lado2 = var2;
        var lado3 = var3;

        if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2)){
            
            if(lado1 == lado2 && lado2 == lado3){
                return "Equilátero";
            }else if(lado1==lado2 || lado1 == lado3 || lado3 == lado2){
                return "Isósceles";
            }else {
                return "Escaleno";
            }

        }else {
            return "Não forma triangulo";
        }

    }

    triangulo (2,2,2);
    triangulo (2,2,4);
    triangulo (2,3,3);
    triangulo (2,5,4);