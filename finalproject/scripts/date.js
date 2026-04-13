export async function getData() {
    try {
        const res = await fetch('../data/restaurants.json');
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}