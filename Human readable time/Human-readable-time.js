/*
Write a function, which takes a non-negative integer (seconds) as input and returns the
time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/


function humanReadable (seconds) {

    let hour = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minute = Math.floor(seconds / 60);
    let second = seconds % 60;

    minute = String(minute).padStart(2, "0");
    hour = String(hour).padStart(2, "0");
    second = String(second).padStart(2, "0");

    return (hour + ":" + minute + ":" + second);
}
