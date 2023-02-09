// excerpt shouldn't be less than 40 chnaracters and more than 60 characters and should have ellipisis at the end(3 dots)
// body shouldn't be more than 500 characters, depends on you though
// updatedBy should be your name
// updatedAt should be the date of the post
// readingTime should be the time it takes to read the post

const post = [
  {
    title: "My first post",
    excerpt: "This is my first blog post, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod.webp",
  },
  {
    title: "Drinking water is good for you",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod (1).webp",
  },
  {
    title: "FIFA 21: The Best Young Players to Sign",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "2 min read",
    image: "../../src/assets/cod2.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "3 min read",
    image: "../../src/assets/image.webp",
  },
  {
    title: "The Best VR Games of 2033",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "3 min read",
    image: "../../src/assets/images.webp",
  },
  {
    title: "Call Of Duty 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "2 min read",
    image: "../../src/assets/cod.webp",
  },
  {
    title: "Save The Best For Last",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "4 min read",
    image: "../../src/assets/cod2.webp",
  },
  {
    title: "My first post",
    excerpt: "This is my first blog post, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod.webp",
  },
  {
    title: "Drinking water is good for you",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod (1).webp",
  },
  {
    title: "FIFA 21: The Best Young Players to Sign",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "2 min read",
    image: "../../src/assets/cod2.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "3 min read",
    image: "../../src/assets/image.webp",
  },
  {
    title: "The Best VR Games of 2033",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "3 min read",
    image: "../../src/assets/images.webp",
  },
  {
    title: "Call Of Duty 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "2 min read",
    image: "../../src/assets/cod.webp",
  },
];

// Render the blog posts to the DOM
const blogPosts = document.querySelector(".flex-wrapper");
const totalPosts = post.slice(0, 6);
const blogPostsHTML = totalPosts
  .map((post) => {
    return `
    <div class="flex-item">
      <div class="flex-img">
        <img src="${post.image}" alt="Featured Article thumbnail" class="flex-img" loading="lazy">
      </div>
      <div class="article-texts">
      <p class="article-title">${post.title}</p>
      <div class="article-subtitle">
          <span>${post.updatedAt}</span>
          <span> - </span>
          <span>${post.readingTime}</span>
      </div>
        <p class="article-description">${post.excerpt}</p>
        <a href="${post.link}" class="gradient-text" target="_blank"
          rel="noopener noreferrer">Read more</a>
      </div>
    </div>
    `;
  })
  .join("");
blogPosts.innerHTML = blogPostsHTML;

// Load more button
const loadMoreBtn = document.querySelector(".load-more"); 
post.length > 6 ? loadMoreBtn.classList.remove("hidden") : null;
loadMoreBtn.addEventListener("click", () => {
  const displayPosts = totalPosts.length + 3;
  const blogPostsHTML = post
    .slice(0, displayPosts)
    .map((post) => {
      return `  
      <div class="flex-item">
      <div class="flex-img">
        <img src="${post.image}" alt="Featured Article thumbnail" class="flex-img" loading="lazy">
      </div>
      <div class="article-texts">
      <p class="article-title">${post.title}</p>
      <div class="article-subtitle">
          <span>${post.updatedAt}</span>
          <span> - </span>
          <span>${post.readingTime}</span>
      </div>
        <p class="article-description">${post.excerpt}</p>
        <a href="${post.link}" class="gradient-text" target="_blank"
          rel="noopener noreferrer">Read more</a>
      </div>
    </div>
      `;
    })
    .join(""); 
    if (totalPosts.length < post.length) {
      totalPosts.push(...post.slice(totalPosts.length, displayPosts));
    }
    if (totalPosts.length === post.length) {
      loadMoreBtn.classList.add("hidden");
    }
  blogPosts.innerHTML = blogPostsHTML;
  console.log(displayPosts, post.length, totalPosts.length);
});
