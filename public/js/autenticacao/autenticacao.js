//MÁSCARA CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os primeiros 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os próximos 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere hífen após os últimos 3 dígitos
    return cpf;
}
document.getElementById("cpf").addEventListener('input',function(){
    var campoCPF = this
    setTimeout(function(){
        campoCPF.value = formatarCPF(campoCPF.value)
    }, 1)
})





//PASSANDO O VALOR DO INPUR CPF PARA O OUTRO INPUT DE UM PUTRO FORM QUE SERÁ SUBMITADO PARA BUSCA DO CPF NO BANCO
let cpfCopia = document.getElementById("cpfCopia")

let cpfBuscado = document.getElementById("cpf")
cpfBuscado.addEventListener('input', ()=>{
    let cpf1 = document.getElementById("cpf").value
    let cpf2 = document.getElementById("cpfCopia").value = cpf1
})




//SCRIPT BUSCAR CPF
function buscaCpf(){
    let cpf2 = document.getElementById("cpfCopia").value.replace('.','').replace('-','').replace('.','')
    let cpfEnviado = document.getElementById("cpfCopia")
    cpfEnviado.value = cpf2
   
    let formCpf2 = document.getElementById("formCpf2")
    formCpf2.submit()
}