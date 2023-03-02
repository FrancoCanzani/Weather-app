const news = document.querySelector(".news");

function newsDate(date) {
  const pubDate = "2023-03-02 16:55:42";
  const now = new Date();
  const date = new Date(pubDate);
  const diff = (now.getTime() - date.getTime()) / 1000; // difference in seconds

  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else {
    return `${Math.floor(diff / 3600)} hours ago`;
  }
}

function getNews(data) {
  news.innerHTML = "";
  const sectionTitle = document.createElement("h1");
  sectionTitle.innerText = "TOP NEWS";
  news.appendChild(sectionTitle);

  for (let index = 0; index < 5; index++) {
    const newsTitle = document.createElement("a");
    const newsCategory = document.createElement("h3");
    const newsDescription = document.createElement("p");

    sectionTitle.classList.add("sectionTitle");
    newsTitle.classList.add("newsTitle");
    newsCategory.classList.add("newsCategory");
    newsDescription.classList.add("newsDescription");

    newsTitle.innerText = data[3].results[index].title;
    newsTitle.href = data[3].results[index].link;
    newsCategory.innerText = data[3].results[index].category[0];
    newsDescription.innerText = data[3].results[index].description;

    news.appendChild(newsTitle);
    news.appendChild(newsCategory);
    news.appendChild(newsDescription);
  }
}

export { getNews };
