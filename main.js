document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            id: 1,
            title: "My First Dog",
            image: "images/dog1.webp",
            date: "2024-05-01",
            content: "This is a post about my first dog."
        },
        {
            id: 2,
            title: "Dog at the Park",
            image: "images/dog2.jpg",
            date: "2024-05-15",
            content: "A fun day at the park with my dog."
        }
    ];

    const blogPosts = [
        {
            id: 1,
            title: "Welcome to My Blog",
            date: "2024-05-01",
            content: "This is the first post on my blog about my dogs."
        }
    ];

    const postsSection = document.getElementById("posts");
    const blogPostsSection = document.getElementById("blog-posts");

    function renderPosts(posts, container) {
        container.innerHTML = posts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.content}</p>
                <small>${post.date}</small>
            </div>
        `).join('');
    }

    function renderBlogPosts(blogPosts, container) {
        container.innerHTML = blogPosts.map(post => `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>${post.date}</small>
            </div>
        `).join('');
    }

    function showPasswordPrompt() {
        const password = prompt("Enter the password to post:");
        if (password === "yourSecretPassword") {
            alert("Password correct! You can now post.");
            // Code to enable posting functionality
        } else {
            alert("Incorrect password!");
        }
    }

    if (postsSection) {
        renderPosts(posts, postsSection);
    }

    if (blogPostsSection) {
        renderBlogPosts(blogPosts, blogPostsSection);
    }
});
