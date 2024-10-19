const throttleFunction=(func, delay)=>{
    let prev=0;
    return(...args)=>{
        let now = new Date().getTime();
        console.log(now-prev, delay);
        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    var div =  document.createElement("div");
    div.classList.add("imagediv");
    div.style.left=dets.clientX+'px';
    div.style.left=dets.clientY+'px';
    var img=document.createElement("img");
    img.setAttribute("src","https://img.freepik.com/free-photo/vertical-view-delicious-fresh-juices-fruits-wooden-tray-brown-background_140725-94794.jpg?ga=GA1.1.717884210.1715318662&semt=ais_hybrid")
    div.appendChild(img);


    document.body.appendChild(div);
    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration: .3,
    })
    gsap.to(img,{
        y:"100%",
        delay:.5,
        ease: Power2,
    })

    setTimeout(function(){
        div.remove();
    },1000)
},500));