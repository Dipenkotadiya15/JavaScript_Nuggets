// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500) 

const url = 'https://course-api.com/react-tours-projects'

const getTours = async () => {
    try {
        const respo = await fetch(url)
        if(!respo.ok) {
            const msg = `There was an error "${respo.status}, ${respo.statusText}"`
            throw new Error(msg)
        }
        // console.log(respo);
        const tours = await respo.json()
        console.log(tours); 
    } catch (error) {
        console.log(error);
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)