var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tomando la próxima selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout( function()
    {
        img_id = "selfie1";
        takesnapshot();
        speak_data = "Tomando la próxima selfie en 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    }, 5000);
    setTimeout( function()
    {
        img_id = "selfie2";
        takesnapshot();
        speak_data = "Tomando la próxima selfie en 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    }, 10000);
    setTimeout( function()
    {
        img_id = "selfie3";
        takesnapshot();
        speak_data = "Tomando la próxima selfie en 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    }, 15000);
}



