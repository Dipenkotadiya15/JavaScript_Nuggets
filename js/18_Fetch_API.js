// Fetch API - Browser API for HTTP (AJAX) requests
// Default - GET Requests, supports other method as well
// Returns Promise

const url = 'https://course-api.com/react-tours-project'

// console.log(fetch(url));

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
 
const getTours = async () => {
    try {
        const respo = await fetch(url)
        const data =  respo.json()
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
}
getTours()
