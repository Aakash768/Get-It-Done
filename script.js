const input_section = document.getElementById("input-section");
const addBtn = document.getElementById("add-btn");
const main_list = document.getElementsByClassName("list")[0];

addBtn.addEventListener("click", () => {
    const empty = input_section.value.trim();
    if (empty) {
        

        const litag = document.createElement("li");

        const label = document.createElement("label");
        label.classList.add("custom-checkbox");

        const inp = document.createElement("input")
        inp.type = "checkbox";

        const span = document.createElement("span");
        span.classList.add("checkmark");

        label.appendChild(inp);
        label.appendChild(span);

        const list_item = document.createElement("div");
        list_item.classList.add("list-item-text");
        list_item.textContent = empty;


        const delete_icon = document.createElement("div");
        delete_icon.classList.add("delete-icon");
        
        const icon = document.createElement("i");
        icon.classList.add("ri-delete-bin-line");
        delete_icon.appendChild(icon);

        litag.appendChild(label);
        litag.appendChild(list_item);
        litag.appendChild(delete_icon);

        main_list.appendChild(litag);

        delete_icon.addEventListener("click", () => {
            litag.remove();
        })

        
        inp.addEventListener("click", () => {
            if(inp.checked){
            list_item.style.textDecoration = "line-through";
            }

            else{
                list_item.style.textDecoration = "none";
            }
        })

        


        input_section.value = "";
    }

   
    else{
        alert("Please enter a task")
    }




})