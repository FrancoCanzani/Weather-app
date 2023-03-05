const news = document.querySelector(".news");

function newsDate(news_date) {
  const now = new Date();
  const date = new Date(news_date);
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
    const newsContainer = document.createElement("div");
    const newsTitle = document.createElement("a");
    const newsCategory = document.createElement("h3");
    // const newsDescription = document.createElement("p");
    const news__date = document.createElement("h3");

    newsContainer.classList.add("newsContainer");
    sectionTitle.classList.add("sectionTitle");
    newsTitle.classList.add("newsTitle");
    newsCategory.classList.add("newsCategory");
    // newsDescription.classList.add("newsDescription");
    news__date.classList.add("newsDate");

    newsTitle.innerText = data[3].results[index].title;
    newsTitle.href = data[3].results[index].link;
    newsTitle.setAttribute("target", "_blank");
    newsCategory.innerHTML = data[3].results[index].category[0];
    // newsDescription.innerText = data[3].results[index].description;
    news__date.innerText = newsDate(data[3].results[index].pubDate);

    news.appendChild(newsContainer);
    newsContainer.appendChild(newsCategory);
    newsContainer.appendChild(newsTitle);
    // news.appendChild(newsDescription);
    newsContainer.appendChild(news__date);
  }
}

export { getNews };
