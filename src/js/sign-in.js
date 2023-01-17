function signIn(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == 'user@gmail.com' && password == 'password'){
        alert('You have succesfully signed in');
        // location.assign('../homepage.html');
        open('index.html')
    }else{
        alert('try again')
    }
}