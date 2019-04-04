function List() {
  function remove() {
    var elem = document.getElementById("anchor_button");
    body.removeChild(elem);
    return false;
  }

  function ele_creator(element) {
    return document.createElement(element);
  }

  function adder(parent, daughter) {
    return parent.appendChild(daughter);
  }

  function checkkey(key) {
    if (key.keyCode == "13") {
      lister();
    }
  }

  function lister() {
    if (input.value != "") {
      let li = ele_creator("li");
      let check_box = ele_creator("input");
      let del = ele_creator("button");

      li.innerHTML = input.value;
      input.value = "";
      del.innerHTML = "X";
      del.className = "del_button";
      check_box.type = "checkbox";

      adder(li, check_box);
      adder(li, del);
      adder(order_list, li);

      del.onclick = function() {
        order_list.removeChild(li);
      };
      check_box.onchange = function() {
        if (check_box.checked == true) {
          li.style.textDecoration = "line-through";
        } else {
          li.style.textDecoration = "none";
        }
      };
    }
  }

  let main = document.getElementById("main");
  let body = document.getElementsByTagName("body")[0];
  body.className = "bodyback";

  let heading = ele_creator("h1");
  heading.innerHTML = "ToDo   List";
  heading.className = "style_heading";

  let input = ele_creator("input");
  input.className = "style_input";

  let button = ele_creator("button");
  button.className = "add_button";
  button.innerHTML = "+";

  let order_list = ele_creator("ol");
  order_list.className = "style_list";

  adder(main, heading);
  adder(main, input);
  adder(main, button);
  adder(main, order_list);

  button.addEventListener("click", lister);
  main.addEventListener("keypress", checkkey);

  remove();
}
