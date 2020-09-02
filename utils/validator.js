module.exports = {

    users:(app, req, res) =>{

        req.assert('name','Nome é obrigatório').notEmpty();
        req.assert('email','Email inválido!').notEmpty().isEmail();

        let erros = req.validationErrors();

        if(erros){
            app.utils.error.send(erros, req, res);
            return false;
        }else  {
            return true;
        }
    }
}