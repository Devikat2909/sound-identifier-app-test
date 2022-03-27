//https://teachablemachine.withgoogle.com/models/fgBoFsqew/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/fgBoFsqew/modal.json', modalReady);
}

function modalReady()
{
    classifier.classifiy(gotResults);
}

function gotResults(error, results)
{
    console.log("gotResult")
}