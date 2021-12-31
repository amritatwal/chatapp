const url = "";


async function getUserInfo() {
    const response = await fetch(`${url}/profile`);
    const { payload } = await response.json();
}