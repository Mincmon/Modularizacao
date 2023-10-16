let estado = function(a){
    if(a=='SP' || a=='RJ'){
        return "Autorizado pelo Estado"
    } else{
        return "Negado pelo Estado"
    }
}

module.exports = estado