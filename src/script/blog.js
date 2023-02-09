// excerpt shouldn't be less than 40 chnaracters and more than 60 characters and should have ellipisis at the end(3 dots)
// body shouldn't be more than 500 characters, depends on you though
// updatedBy should be your name
// updatedAt should be the date of the post
// readingTime should be the time it takes to read the post

const post = [
  {
    title: "My first post",
    excerpt: "This is my first blog post, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod (1).webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod2.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/image.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/images.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod.webp",
  },
  {
    title: "The Best VR Games of 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio dignissimos corrupti officiis accusantium molestias, quidem expedita error aut minus...",
    updatedBy: "Ixartz",
    updatedAt: "April 24, 2022",
    readingTime: "5 min read",
    image: "../../src/assets/cod2.webp",
  },
];

const blogPosts = document.querySelector(".flex-wrapper");
const blogPostsHTML = post
  .map((post) => {
    return `
    <div class="flex-item">
      <div class="flex-img">
        <img src="${post.image}" alt="Featured Article thumbnail" class="flex-img" loading="lzy">
      </div>
      <div class="article-texts">
      <p class="article-title">${post.title}</p>
      <div class="article-subtitle">
          <span>${post.updatedAt}</span>
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

