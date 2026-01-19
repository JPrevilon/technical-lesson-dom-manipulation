const userInfo = {
  username: "flatUser123",
  description: "Hi, welcome to my webpage! Just a new user of this website!",
  theme: "red",
};

function displayUser(userInfo) {
  // 1) SELECT: grab the header that already exists in the HTML
  const header = document.querySelector("#main");

  // 2) CHANGE: update the header text and style using userInfo
  header.textContent = userInfo.username + "'s Personal Webpage";
  header.className = userInfo.theme;

  // 3) CREATE: make a brand new <p> tag (not on the page yet)
  const description = document.createElement("p");

  // 4) CUSTOMIZE: give the new <p> text + a class for styling
  description.textContent = userInfo.description;
  description.className = userInfo.theme;

  // 5) APPEND: attach the <p> to the page so the user can see it
  const body = document.querySelector("body");
  body.append(description);
}

displayUser(userInfo);


