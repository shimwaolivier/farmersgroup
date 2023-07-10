function send(){
   let user=document.getElementById('name').value
   let pass=document.getElementById('pass').value
  
   localStorage.setItem('Username',user)
   localStorage.setItem('password',pass)
   
}
function check(){
   let use=document.getElementById('name').value
   let pas=document.getElementById('pass').value
   let a=localStorage.getItem('Username')
   let b =localStorage.getItem('password')
   if(use==a && pas == b && use != "" && use !=null){
      window.location.href="#"
   }else{
      alert('incorrect')
   }
}