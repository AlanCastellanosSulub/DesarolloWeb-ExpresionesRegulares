


function validacion() {
  
  valor1=document.getElementById("Texto1").value;
  valor2=document.getElementById("Texto2").value;
   if(!(/^\d{2}\d[39]\d{4}$/.test(valor1))){
    alert(" Numero de COntrol NO VAlido");
   }
   else{
    alert(" Numero de COntrol VAlido");
  if(!(/^\d[A-Z]\d[A|E|I|O|U]\d[A-Z]{2}\d[0-9]{2}\d[01-12]\d[01-31]\d[H||M] [AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE]\d[B-DF-HJ-NP-TV-Z]{3}\d[0-9|A-Z]\d[0-9]$/.test(valor2))){
      alert(" CURP NO VAlido");
     }
     else{
      alert(" CURP VAlido");
     }

   }

  }