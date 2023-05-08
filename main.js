webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_qualify:90
});

camera = document.getElementById("camera");

webcam.attach(  '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And second prediction is " + prediction_2;
    var uttetThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}