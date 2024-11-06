const change = document.getElementById('change')

function change_all(){
    if(document.getElementById("issued").innerText==='GU of the MIA of Russia in Moscow'){
        document.getElementById("issued").innerText==='ГУ МВД ПО Г. МОСКВЕ';
        document.getElementById("surname").innerText==='Нгуен';
        document.getElementById("name").innerText==='Ча Ми';
        document.getElementById("gender").innerText==='Жен';
        document.getElementById("birthplace").innerText==='Москва';
    }
    else{
        if(document.getElementById("issued").innerText==='ГУ МВД ПО Г. МОСКВЕ'){
            document.getElementById("surname").innerText==='Nguyen';
            document.getElementById("name").innerText==='Tra My';
            document.getElementById("gender").innerText==='Female';
            document.getElementById("birthplace").innerText==='Moscow';

    }
 
    }
}
change.addEventListener("click", change_all)