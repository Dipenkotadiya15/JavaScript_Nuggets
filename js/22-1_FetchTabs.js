const fetchTabs = () => {
    return fetch('https://course-api.com/react-tabs-project')
    .then((respo) => respo.json());
};

export default fetchTabs