export const getBooksByCategory = category => {
    return fetch(`http://localhost:3000/api/books/${category}`)
        .then(response => {
            return response.json();
        })
        .then(books => {
            return books;
        });
};
