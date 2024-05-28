function showPasswordPrompt() {
    const password = prompt("Enter the password to post:");
    if (password === "yourSecretPassword") {
        alert("Password correct! You can now post.");
        document.getElementById("post-form").style.display = "block";
        document.getElementById("blog-post-form").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [
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

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
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
        container.innerHTML = posts.sort((a, b) => b.id - a.id).map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.content}</p>
                <small>${post.date}</small>
            </div>
        `).join('');
    }

    function renderBlogPosts(blogPosts, container) {
        container.innerHTML = blogPosts.sort((a, b) => b.id - a.id).map(post => `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>${post.date}</small>
            </div>
        `).join('');
    }

    if (postsSection) {
        renderPosts(posts, postsSection);
    }

    if (blogPostsSection) {
        renderBlogPosts(blogPosts, blogPostsSection);
    }

    window.handlePostSubmit = function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const image = document.getElementById("image").value;
        const content = document.getElementById("content").value;
        const date = new Date().toISOString().split('T')[0];
        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            title,
            image,
            date,
            content
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts(posts, postsSection);
        document.getElementById("post-form").reset();
        document.getElementById("post-form").style.display = "none";
    };

    window.handleBlogPostSubmit = function(event) {
        event.preventDefault();
        const title = document.getElementById("blog-title").value;
        const content = document.getElementById("blog-content").value;
        const date = new Date().toISOString().split('T')[0];
        const newPost = {
            id: blogPosts.length ? blogPosts[blogPosts.length - 1].id + 1 : 1,
            title,
            date,
            content
        };
        blogPosts.push(newPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        renderBlogPosts(blogPosts, blogPostsSection);
        document.getElementById("blog-post-form").reset();
        document.getElementById("blog-post-form").style.display = "none";
    };
});
