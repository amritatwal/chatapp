const url = "";

async function getUserInfo() {
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(session)
    });
    const data = await response.json();
    console.log(data);
    return data;
}
console.log("sfsfsd")
getUserInfo() 