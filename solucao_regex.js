// 1) Crie uma expressão regular para validar se uma string contém apenas letras minúsculas. 
let regexLetrasMinusculas = /^[a-z]+$/;


// 2) Crie uma expressão regular para validar se uma string contém apenas dígitos numéricos.
let regexDigitos = /^\d+$/;


// 3) Crie uma expressão regular que remova todos os espaços em branco duplicados de uma string.
let regexEspacos = /\s+/g;
let textoSemEspacosDuplicados = texto.replace(regexEspacos, ' ');


// 4) Crie uma expressão regular que encontre no texto o padrao de um CEP: 99999-999
let regexCEP = /\b\d{5}-\d{3}\b/g;


// 5) Escreva uma expressão regular que encontre números de telefone no formato "(999) 99999-9999" em um texto.
let regexTelefone = /\(\d{3}\) \d{5}-\d{4}/g;


// 6) Crie uma expressão regular que encontre no texto o padrao utilizado em um CPF: 999.999.999.99
let regexCPF = /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g;


// 7) Escreva uma expressão regular para validar endereços de e-mail simples no formato "nome@dominio.com".
let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


// 8) Crie uma expressão regular para validar datas no formato "dd/mm/aaaa".
let regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
