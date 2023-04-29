window.addEventListener("hashchange",(e)=>{
    switch(location.hash){
        case "#home":
            console.log("home")
            render({title : "HOME" , color :"red" , titleId : "home"})
            break
        case "#search":
            render({title : "Search" , color : "blue" , titleId : "search"})
            break;
        case "#likes":
            render({title : "Likes" , color : "yellow" , titleId : "likes"})
            break;
        default :
        render({title : "title" , color : "pink" , titleId :"profile"})
        break;
    }
})


function render(data){
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelector("h1").innerText = data.title;
    document.querySelectorAll("i").forEach(e=>{
        e.style.color = "#666"
    })
    document.querySelector(`i[title-id = ${data.titleId}]`).style.color = "black";

}

