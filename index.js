let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger-container')
let close = document.querySelector('.close')
hamburger.addEventListener('click',function(){
    navbar.style.right = 0;
})
close.addEventListener('click',function(){
    navbar.style.right = "100%";
})

// const form = document.querySelector('.form');

// // bd5f7d48-01d4-4bcc-84ac-7c6479f48229 
// function sendmsg(e){
//     e.preventDefault();
//     const name = document.querySelector('.nameof'),
//     email = document.querySelector('.emailof'),
//     message = document.querySelector('.messageof');
//     Email.send({
//         Host : "bd5f7d48-01d4-4bcc-84ac-7c6479f48229",
//         To : 'ankitech23@gmail.com',
//         From : email.value,
//         Body : message.value
//     }).then(
//       message => alert(message)
//     );
    
// }

// form.addEventListener("submit",sendmsg);