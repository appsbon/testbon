const movies = [
    {
        id: "m-godfather",
        title: "The Godfather",
        year: "1972",
        genre: "Drama",
        poster: "https://via.placeholder.com/300x450",
        // Direct HTTPS stream with valid CORS headers
        video: "https://vjs.zencdn.net/v/oceans.mp4",
        synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: "m-avatar",
        title: "Avatar",
        year: "2009",
        genre: "Action",
        poster: "https://via.placeholder.com/300x450",
        // Internet Archive EMBED link (bypasses CORS restrictions)
        video: "https://archive.org/download/the.-crow.-2024/The.Crow.2024.mp4",
        synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    }
];
