//https://teachablemachine.withgoogle.com/models/pHoeM0mP-/
Webcam.set({

width:350,

height:300,

imageFormat:"png",pngQuality:90

});

 camera=document.getElementById("camera");

 Webcam.attach("#camera"); 

function take_snapshot(){
    
Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML='<img id="img_capturado" src="'+data_uri+'"'
});

}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pHoeM0mP-/model.json",modelLoaded
);

function modelLoaded(){
    console.log ("modelo carregado")
}