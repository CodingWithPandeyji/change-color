const cColor=document.querySelector(" .chage-color");
const outer=document.querySelector(".outer");
const cShape=document.querySelector(".change-shape")
const inner=document.querySelector(".inner");

cColor.addEventListener("click",()=>{
    let random=["red","green","blue","pink","orange","purple"];
    let select=random[Math.floor(Math.random()*random.length)];
    outer.style.background=select;
})

cShape.addEventListener("click",()=>{
    let random=["triangle","trapezoid","rhombus","pentagon"];
    let select=random[Math.floor(Math.random()*random.length)];
    inner.classList.remove("triangle", "trapezoid", "rhombus", "pentagon");
    inner.classList.add(select);
})


