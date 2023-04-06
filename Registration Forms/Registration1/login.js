
// $(document).ready(function(){

//     $('#check').change(function(){

//     let checked = $('check').attr('checked')
//          if(checked =='checked'){
//         $('#test-input').attr('type','text')
//     }
//     else{
//         $('#test-input').attr('type','password')
//     }

//     })
// })

// $(document).ready(function(){

//     $('#check').change(function(){

//     let check = $('check').attr('checked')
//     let input = $('testinput')
//         //  check=='checked' ? $('#testinput').attr('type','text') : $('#testinput').attr('type','password')
//         if(input.attr('type')=='password'){
//             input.attr('type','text')
//         }
//         else{
//             input.attr('type','password')
//         }

//     })
// })

function display(){
    let check = document.getElementById("check");
    let input = document.getElementById('testinput');
    if(input.type=='password'){
        input.type='text'
    }
    else{
        input.type='password'
    }
}