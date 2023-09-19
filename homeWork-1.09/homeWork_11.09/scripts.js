async function fetchAsyncData(id) {
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    const response = await fetch(url);
    const data = await response.json();
    return cardUsers(data);
}

let id = 1;

function cardUsers(elem) {
    const div_root = document.querySelector("#root");
    div_root.innerHTML = "";

    const btn_left = document.createElement("button");
    const btn_rigth = document.createElement("button");

    btn_left.className = 'btnClick';
    btn_rigth.className = 'btnClick';

    btn_left.innerText = "<";
    btn_rigth.innerText = ">";

    const div_user = document.createElement("div");

    let p_name = document.createElement("p");
    let p_email = document.createElement("p");
    let p_website = document.createElement("p");

    let input_name = document.createElement("input");
    let input_email = document.createElement("input");
    let input_web = document.createElement("input");

    input_name.value = elem.name;
    input_email.value = elem.email;
    input_web.value = elem.website;

    let pencil_name = document.createElement("button");
    let pencil_email = document.createElement("button");
    let pencil_web = document.createElement("button");

    div_user.className = "usersCard";
    p_name.innerText = "NAME : ";
    p_email.innerText = "EMAIL : ";
    p_website.innerText = "WEBSITE : ";

    p_name.className = 'p_class'
    p_email.className = 'p_class'
    p_website.className = 'p_class'

    div_user.append(
        p_name,
        input_name,
        pencil_name,
        p_email,
        input_email,
        pencil_email,
        p_website,
        input_web,
        pencil_web,
        btn_left,
        btn_rigth
    );

    pencil_name.className = "btnPencil";
    pencil_email.className = "btnPencil";
    pencil_web.className = "btnPencil";

    pencil_name.onclick = () => {
        input_name.value = " ";
    };

    pencil_email.onclick = () => {
        input_email.value = " ";
    };

    pencil_web.onclick = () => {
        input_web.value = " ";
    };

    div_root.append(div_user);

    btn_left.onclick = () => {
        if (id <= 1) {
            return;
        }
        id = id - 1;
        fetchAsyncData(id);
    };

    btn_rigth.onclick = () => {
        if (id >= 10) {
            return;
        }
        id = id + 1;
        fetchAsyncData(id);
    };
}

fetchAsyncData(id);