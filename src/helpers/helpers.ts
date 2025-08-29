export function getCurrentDate() {
    let d = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Guatemala"})).toISOString();
    return d;
}