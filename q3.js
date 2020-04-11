function changeColor() {
  var c_1 = document.getElementById("choice_1");
  var c_2 = document.getElementById("choice_2");
  var c_3 = document.getElementById("choice_3");
  var c_1Default = c_1.style.backgroundColor;
  var c_2Default = c_2.style.backgroundColor;
  var c_3Default = c_3.style.backgroundColor;

  c_1.addEventListener("click", function() {
    c_1.style.backgroundColor = "tomato";
    c_2.style.backgroundColor = c_2Default;
    c_3.style.backgroundColor = c_3Default;
});

    c_2.addEventListener("click", function() {
      c_2.style.backgroundColor = "tomato";
      c_1.style.backgroundColor = c_1Default;
      c_3.style.backgroundColor = c_3Default;
});

      c_3.addEventListener("click", function() {
        c_3.style.backgroundColor = "tomato";
        c_1.style.backgroundColor = c_1Default;
        c_2.style.backgroundColor = c_2Default;
})};
