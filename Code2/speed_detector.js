function checkSpeed() {
    const speed = Number(prompt("Enter the car's speed (km/h):"));

    if (isNaN(speed) || speed < 0) {
        alert("Invalid speed");
        return;
    }

    if (speed <= 70) {
        alert("Ok");
    }else {
        const points = Math.floor((speed - 70) / 5);
        alert('Points: ${points}');
    }    
}
checkSpeed()