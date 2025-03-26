function volume_sphere(event) {
    event.preventDefault(); // Prevents page reload

    let radiusInput = document.getElementById("radius").value.trim();
    let volumeOutput = document.getElementById("volume");

    let radius = parseFloat(radiusInput);

    // If radius is not a valid number or is negative, return NaN
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // Calculate sphere volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeOutput.value = volume.toFixed(4); // Display with 4 decimal places
}

// Attach event listener properly
window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
