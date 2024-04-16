class Contacto{
    Contacto(){
        let boton = document.getElementById("botons");
        var correo = null;
    }
    getMail(){
        return this.correo;
    }
    setMail(){
        this.correo = correo;
    }
    validateMail(){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var siesValido = expReg.test(this.correo);
        return siesValido;
    }
}


