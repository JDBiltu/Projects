var bt1 = document.getElementById("choose_chaper_1");
var bt2 = document.getElementById("choose_chaper_2");

var bt3 = document.getElementById("choose_chaper_3");

var bt4 = document.getElementById("choose_chaper_4");



bt1.addEventListener("click" , function() {
    window.open("http://127.0.0.1:5500/Time_work.html" );         //Adders to Time and work question....
    
});

bt2.addEventListener("click" , function() {
    window.open("http://127.0.0.1:5500/probability_html.html" );       //Adders to probability question....
    
});

bt3.addEventListener("click" , function() {
    window.open("http://127.0.0.1:5500/Age_html.html" );           //Adders to age question....
     
});

bt4.addEventListener("click" , function() {
    window.open("http://127.0.0.1:5500/Profit_and_loss_html.html" );         //Adders to  Profit and loss question....
    
});



function getName() {
    const inputName = document.getElementById("inputName").value;
    localStorage.setItem("name", inputName);

}
