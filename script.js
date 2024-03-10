var form= document.getElementById("form")
var username=document.getElementById("name")
var phone=document.getElementById("phone")
var email=document.getElementById("email")
var password=document.getElementById("password")
var password2=document.getElementById("password2")


    form.addEventListener('submit',function(e){
        e.preventDefault()
        const formData = {
            username: document.getElementById("name").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            confirmPassword: document.getElementById("password2").value.trim()
        };
        console.log(formData)
        checkInput()
        
    } )

  
 

    function setError(input,message){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small")
        formControl.className='form-control error'
        small.innerText= message;
    }

     function setSuccess(input){
        const formControl=input.parentElement
        const small = formControl.querySelector("small")
        formControl.className='form-control success'
        small.innerText=" "
    }
   

 

    function checkInput(){
        const nameValue=username.value.trim()
        const phoneValue=phone.value.trim()
        const emailValue=email.value.trim()
        const passwordValue=password.value.trim()
        const password2Value=password2.value.trim()

        if(nameValue === ''){
            setError(username,"username cannot be empty");
        }else{
            setSuccess(username);
        }
        
        if(phoneValue === ''){
            setError(phone,"phone cannot be empty");
        }else{
            setSuccess(phone);
        }
        if(emailValue ===''){
            setError(email,"email cannot be empty");
        }else{
            setSuccess(email);
        }
        if(passwordValue === ''){
            setError(password,"password cannot be empty");
        }else{
            setSuccess(password);
        }
        if(password2Value ===''){
            setError(password2,"confirm password cannot be empty");
        }else if(passwordValue == password2Value){
            setSuccess(password2);
        }
        else if(passwordValue !== password2Value){
            setError(password2,"Password Mismatches");
        }
        else{
            setSuccess(password2);
        }
    }    

   
        

       
    


  