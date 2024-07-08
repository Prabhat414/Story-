var arrr =[
    {name:"harshita", dp:"https://images.unsplash.com/photo-1679097480076-bffce8d14adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8", image:"https://images.unsplash.com/photo-1659999463470-8d01d61cf9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:"sashi", dp:"https://cdn.pixabay.com/photo/2024/07/03/03/05/lamb-8868711_640.jpg", image:"https://images.unsplash.com/photo-1651626503107-5bdbf7b66e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"},
    {name:"harshi", dp:"https://images.unsplash.com/photo-1718890064259-b31f2c64fe7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8", image:"https://images.unsplash.com/photo-1659596356998-1e8fbfd66cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"},
    {name:"john", dp:"https://images.unsplash.com/photo-1584762290346-2ba1158341eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8", image:"https://images.unsplash.com/photo-1716428325370-c3f667316f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"},
    {name:"ram", dp:"https://plus.unsplash.com/premium_photo-1676955432796-226f504a560b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", image:"https://images.unsplash.com/photo-1674707828933-0afdd1b70726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
];


var story = document.querySelector(".story");
var stor = document.querySelector(".stor");
var overlay = document.querySelector(".overlay");
var close = document.querySelector("#close");
var overlayImage = document.querySelector(".overlay-image");




 var clutter = "";
 arrr.forEach((elem,idx)=>{
    clutter += `
    
               <div class="stor"  data-index="${idx}">
            <div class="stories">
                <img src="${elem.dp}" alt="">
            </div>
            <p>${elem.name}</p>
        </div>
               
    `

 });
story.innerHTML = clutter;

document.querySelectorAll('.stor').forEach(item => {
    item.addEventListener('click', function(event) {
        var index = item.getAttribute('data-index');
        overlayImage.src = arrr[index].image;
        overlay.style.display = "block";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 2000);
    });
});



close.addEventListener("click",function(){
    overlay.style.display = "none"
})
