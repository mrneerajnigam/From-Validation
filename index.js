function validate() {
    document.querySelector('form.form').addEventListener('submit', function (e) {
        e.preventDefault();
        let x = document.querySelector('form.form').elements;
        console.log("Name: ", x['name'].value);
        console.log("Email: ", x['mail'].value);
        console.log("Confirm Password: ", x['pw2'].value);
    });



}


var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('pw2').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Not Matching';
    }
}