describe('Pagina',function(){
    it('Esta es la primer prueba',function(){
        var prueba = new Prueba();
            size = 3;
        expect(prueba.getSize()).toBe(size);
    });
    it('Debe verificar que sea un correo valido',function(){
        var contacto = new Contacto();
            correo = "johan@mail.escuelaing.edu.co"
            contacto.setMail(correo);
        expect(contacto.validateMail()).toBe(true);
    });
});