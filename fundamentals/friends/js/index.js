const friends = [
  {
    firstName: "Austin",
    lastName: "Lawan",
    username: "Sewoyebaa",
    email: "lawan@gmail.com",
    number: 111111111,
    gender: "male",
    password: "1111",
    profession: "Software Engineer",
    experience: 4,
    Country: "Cameroon",
    status: "single",
    hobbies: ["coding", "swimming", "reading", "cooking", "driving"],
    footballClub: "Barcalona",
    role: "admin",
    image: "imgs/lawan.jpg",
  },
  {
    firstName: "Desmon",
    lastName: "Laiven",
    username: "Doc",
    email: "laiven@gmail.com",
    number: 222222222,
    gender: "male",
    password: "2222",
    profession: "Fullstack Developer",
    experience: 4,
    Country: "Cameroon",
    status: "single",
    hobbies: ["coding", "swimming", "reading"],
    footballClub: "Real Madrid",
    role: "member",
    image: "imgs/doc.jpg",
  },
  {
    firstName: "Kingsley",
    lastName: "Wirba",
    username: "Tardzenyuy",
    email: "wirba@gmail.com",
    number: 333333333,
    gender: "male",
    password: "3333",
    profession: "DevOps Engineer",
    experience: 4,
    Country: "Cameroon",
    status: "Married",
    hobbies: ["coding", "swimming", "reading", "cooking"],
    footballClub: "Real Madrid",
    role: "member",
    image: "imgs/game.jpg",
  },
  {
    firstName: "Capwell",
    lastName: "Forbang",
    username: "Echo",
    email: "echo@gmail.com",
    number: 444444444,
    gender: "male",
    password: "4444",
    profession: "Data Scientist",
    experience: 4,
    Country: "Belgium",
    status: "single",
    hobbies: ["swimming", "reading", "cooking", "clubbing"],
    footballClub: "Barcalona",
    role: "member",
    image: "imgs/echo.jpg",
  },
  {
    firstName: "Patrick",
    lastName: "Nyeanchi",
    username: "Ngum",
    email: "paddy@gmail.com",
    number: 555555555,
    gender: "male",
    password: "5555",
    profession: "Public Health Expert",
    experience: 4,
    Country: "USA",
    status: "Married",
    hobbies: ["dancing", "reading", "cooking", "clubbing"],
    footballClub: "Liverpool",
    role: "member",
    image: "imgs/paddy.jpg",
  },
  {
    firstName: "Thelma",
    lastName: "Nchila",
    username: "Joe",
    email: "joe@gmail.com",
    number: 666666666,
    gender: "male",
    password: "6666",
    profession: "Petroleum Engineer",
    experience: 4,
    Country: "Congo DR",
    status: "Married",
    hobbies: ["swimming", "reading", "clubbing", "travelling"],
    footballClub: "Barcalona",
    role: "member",
    image: "imgs/joe.jpg",
  },
  {
    firstName: "Joel",
    lastName: "Njodzeka",
    username: "Gha",
    email: "joel@gmail.com",
    number: 777777777,
    gender: "male",
    password: "7777",
    profession: "Computer Hardware Expert",
    experience: 6,
    Country: "Cameroon",
    status: "Single",
    hobbies: ["swimming", "reading", "clubbing", "footable"],
    footballClub: "Chelsea",
    role: "member",
    image: "imgs/joel.jpg",
  },
];

let tbody = document.getElementById("tbody");
let intro = document.querySelector(".intro");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let friend = document.querySelector(".friend");
let mainArea = document.querySelector(".content");
let loginBtn = document.querySelector("#loginBtn");

let html = friends.map(
  (friend) =>
    `<tr>
  <td>${friend.firstName}</td>
  <td>${friend.lastName}</td>
  <td>${friend.username}</td>
  <td>${friend.profession}</td>
  <td>${friend.Country}</td>
  <td>${friend.status}</td>
  </tr>`
);

tbody.outerHTML = html;

friends.map((friend) => {
  card = `<div class="card">
            <div class="card-img">
              <img src="${friend.image}" alt="Lawan" />
            </div>
            <div class="card-text">
              <div class="name"><span>Name:</span><span id="cname">${
                friend.username
              }</span></div>
              <div class="info">
                <p><span>Profession: </span><span id="prof"></span>${
                  friend.profession
                }</p>
                <p><span>Experience: </span><span id="exp"></span>${
                  friend.experience
                }</p>
                <p><span>Country: </span><span id="country"></span>${
                  friend.Country
                }</p>
                <p><span>Football Club: </span><span id="club">${
                  friend.footballClub
                }</span></p>
                <p><span>Hobbies: </span><span id="hobby">${friend.hobbies
                  .slice(0, 2)
                  .join(", ")}</span></p>
              </div>
            </div>
          </div>`;

  intro.innerHTML += card;
  //   console.log(card);
});

const renderSection = (section) => {
  mainArea.innerHTML = "";

  switch (section) {
    case "home":
      mainArea.innerHTML = friend.outerHTML;
      break;
    case "signup":
      mainArea.innerHTML = signup.outerHTML;
      break;
    case "login":
      mainArea.innerHTML = login.outerHTML;
      break;
    default:
      break;
  }
};

renderSection("home");

// LOGIN
const logIn = () => {
  let user = document.getElementById("lusername").value;
  let pass = document.getElementById("lpassword").value;

  if (!user || !pass) {
    console.log(`Invalid credentials`);
  } else {
    let member = friends.find((friend) => {
      return friend.password === pass && friend.username === user;
    });

    if (!member) {
      console.log(`Not Found!`);
    } else {
      console.log(`Found!`);
    }
  }
};
