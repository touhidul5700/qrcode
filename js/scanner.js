/*///////////////////////////
  QR code scanner 
 ////////////////////////////*/
// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(function (stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
        scanQRCode();
    })
    .catch(function (error) {
        console.error("Error accessing the camera: ", error);
    });

function scanQRCode() {
    qrcode.callback = function (result) {
        if (result) {
            // QR code detected, do something with the result
            alert('Please give the access of canera. ' + result);
        }
        // Continue scanning
        /* setTimeout(scanQRCode, 2000); */   /* set timeout */
    };

    // Capture a frame from the video stream and decode it
    var canvas = document.createElement('canvas');
    var video = document.getElementById('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    qrcode.decode(canvas.toDataURL());
}