const leftButton=document.querySelector(".leftButton");
const rightButton=document.querySelector(".rightButton");
const mainDiv=document.querySelector(".background");

var imageArray=["/slider/images/image1.jpg","/slider/images/image2.jpg","/slider/images/image3.jpg","/slider/images/image4.jpg","/slider/images/image5.jpg",
"/slider/images/image6.jpg","/slider/images/image7.jpg","/slider/images/image8.jpg", "/slider/images/image9.jpg", "/slider/images/image10.jpg",
"/slider/images/image11.jpg","/slider/images/image12.jpg"];

var relay = 0;
var styleOfSlider = "A";

/*Choose the type of slider*/

function choiseSlider() {
    if(mainDiv.offsetWidth > 940){
        return "A";
    }
    else if(mainDiv.offsetWidth > 630){
        return "B";
    }
    else return "C";
}


/*Initiating the first slider*/
styleOfSlider = choiseSlider();
paintSlider(imageArray, styleOfSlider);



function paintSlider(arr, sliderType) {
    switch(sliderType){
        case "A":
            var distance = (mainDiv.offsetWidth - 920) / 2;
            for(i = 0; i < 6; i++){
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i]);
                elem.classList.add("pos");
                elem.style.top = "10px";
                elem.style.left = 10 + 300*(i-1) + distance*(i-1) + "px";
                mainDiv.appendChild(elem);
            
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i + 6]);
                elem.classList.add("pos");
                elem.style.top = "300px";
                elem.style.left = 10 + 300*(i-1) + distance*(i-1) + "px";
                mainDiv.appendChild(elem);
             }
             break;
        case "B":
            var distance = mainDiv.offsetWidth - 620;
            for(i = 0; i < 4; i++){
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i]);
                elem.classList.add("pos");
                elem.style.top = "10px";
                elem.style.left = 10 + 300*(i-1) + distance*(i-1) + "px";
                mainDiv.appendChild(elem);
            
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i+4]);
                elem.classList.add("pos");
                elem.style.top = "300px";
                elem.style.left = 10 + 300*(i-1) + distance*(i-1) + "px";
                mainDiv.appendChild(elem);
                
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i+8]);
                elem.classList.add("pos");
                elem.style.top = "600px";
                elem.style.left = 10 + 300*(i-1) + distance*(i-1) + "px";
                mainDiv.appendChild(elem);
            }
            break;
        case "C": 
            var distance = (mainDiv.offsetWidth-300)/2;
            for(i = 0; i < 4; i++){
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i]);
                elem.classList.add("pos");
                elem.style.top = "10px";
                elem.style.left = 310*(i-1) + distance*i + "px";
                mainDiv.appendChild(elem);
            
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i+4]);
                elem.classList.add("pos");
                elem.style.top = "300px";
                elem.style.left = 310*(i-1) + distance*i + "px";
                mainDiv.appendChild(elem);
                
                var elem = document.createElement("img");
                elem.setAttribute("src", arr[i+8]);
                elem.classList.add("pos");
                elem.style.top = "600px";
                elem.style.left = 310*(i-1) + distance*i + "px";
                mainDiv.appendChild(elem);
            }
            break;
    }
}


function cleanSlider() {
    var imgs = document.querySelectorAll(".pos");
    
    for(i = 0; i < imgs.length; i++){
        mainDiv.removeChild(imgs[i]);
    }
}


window.addEventListener('resize',()=>{
    var newStyle = choiseSlider();
       
    if(newStyle === "B" && styleOfSlider === "A"){
        var newarray = imageArray.slice(0,3).concat(imageArray[4], imageArray[5], imageArray[3],imageArray[7], imageArray[6], imageArray[11], imageArray.slice(8,11));
        imageArray = newarray.slice(0);
        }

    else if(newStyle==="A" && styleOfSlider === "B"){
        var newarray=imageArray.slice(0,3).concat(imageArray[5], imageArray[3], imageArray[4],imageArray[7], imageArray[6],  imageArray.slice(9,12), imageArray[8]);
        imageArray=newarray.slice(0);
    }
        
    styleOfSlider=choiseSlider();
    cleanSlider();
    paintSlider(imageArray, styleOfSlider);
});


leftButton.addEventListener("click", ()=>{
    switch(styleOfSlider){
        case "A":
            if(relay == 1){

            }
            else{
                relay = 1;
                var distance = (mainDiv.offsetWidth - 940) / 2;
                var imgs = document.querySelectorAll(".pos");
            
                for(i = 0; i < imgs.length; i++){
                    imgs[i].style.left = imgs[i].offsetLeft - 310 - distance + "px";
                }

                var newarray = imageArray.slice(1,6).concat(imageArray[0],imageArray.slice(7,12), imageArray[6]);
                imageArray = newarray.slice(0);
                
                setTimeout(() => {
                    paintSlider(imageArray, styleOfSlider);
                    relay = 0;
                }, 2000);
            }
            break;
        case "B":
            if(relay == 1){ 

            }
            else{
                relay = 1;
            var distance = mainDiv.offsetWidth - 630;
            var imgs = document.querySelectorAll(".pos");
        
            for(i = 0; i < imgs.length; i++){
                imgs[i].style.left = imgs[i].offsetLeft - 310 - distance + "px";
            }
            
            var newarray = imageArray.slice(1,4).concat(imageArray[0],imageArray.slice(5,8), imageArray[4], imageArray.slice(9,12),imageArray[8]);
            imageArray = newarray.slice(0);
            
            setTimeout(() => {
                paintSlider(imageArray, styleOfSlider);
                relay = 0;
              }, 2000);
            }
            break;
        case "C":
            if(relay == 1){ }
            else{
                relay = 1;
            var distance = (mainDiv.offsetWidth - 300) / 2;
            var imgs = document.querySelectorAll(".pos");
        
            for(i = 0; i < imgs.length; i++){
                imgs[i].style.left = imgs[i].offsetLeft - 310 - distance + "px";
            }
            
            var newarray = imageArray.slice(1,4).concat(imageArray[0],imageArray.slice(5,8), imageArray[4], imageArray.slice(9,12),imageArray[8]);
            imageArray = newarray.slice(0);
            
            setTimeout(() => {
                paintSlider(imageArray, styleOfSlider);
                relay = 0;
              }, 2000);
            }
            break;
    }
})


rightButton.addEventListener("click", ()=>{
    switch(styleOfSlider){
        case "A":
            if(relay == 1){

            }
            else{
                relay = 1;
            var distance = (mainDiv.offsetWidth - 940) / 2;
            var imgs = document.querySelectorAll(".pos");

            for(i = 0; i < imgs.length; i++){
                imgs[i].style.left = imgs[i].offsetLeft + 310 + distance + "px";
            }
            
            var newarray2 = [];
            newarray2.push(imageArray[5]);
            newarray = newarray2.concat(imageArray.slice(0,5),imageArray[11],imageArray.slice(6,11));
            imageArray = newarray.slice(0);
            
            setTimeout(() => {
                paintSlider(imageArray, styleOfSlider);
                relay = 0;
            }, 2000);
            }
            break;
    case "B":
        if(relay == 1){

        }
        else{
            relay = 1;
        var distance= mainDiv.offsetWidth - 630;
        var imgs = document.querySelectorAll(".pos");
    
        for(i = 0; i < imgs.length; i++){
            imgs[i].style.left = imgs[i].offsetLeft + 310 + distance + "px";
        }
        
        var newarray2 = [];
        newarray2.push(imageArray[3]);
        newarray = newarray2.concat(imageArray.slice(0,3),imageArray[7],imageArray.slice(4,7), imageArray[11], imageArray.slice(8,11));
        imageArray = newarray.slice(0);
      
        setTimeout(() => {
            paintSlider(imageArray, styleOfSlider);
            relay = 0;
        }, 2000);
        }
        break;
    case "C":    
        if(relay == 1){

        }
        else{
            relay = 1;
        var distance = (mainDiv.offsetWidth - 300) / 2;
        var imgs = document.querySelectorAll(".pos");

        for(i = 0; i < imgs.length; i++){
            imgs[i].style.left = imgs[i].offsetLeft + 310 + distance + "px";
        }
        
        var newarray2 = [];
        newarray2.push(imageArray[3]);
        newarray = newarray2.concat(imageArray.slice(0,3),imageArray[7],imageArray.slice(4,7), imageArray[11], imageArray.slice(8,11));
        imageArray = newarray.slice(0);
       
        setTimeout(() => {
            paintSlider(imageArray, styleOfSlider);
            relay = 0;
        }, 2000);
        }
        break;
    }
})
