let currentPage = 1;
let totalPages;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (dabrunebuliTextdad) {
      if (dabrunebuliTextdad.status !== 200) {
        throw dabrunebuliTextdad.status;
      }
      return dabrunebuliTextdad.json();
    })
    .then(function (dabrunebulirogorcJs) {
      const fragment = new DocumentFragment();
      dabrunebulirogorcJs.data.forEach((item) => {
        let li = document.createElement("li");
        // li.innerText = item.first_name + item.last_name;
        li.innerText = `${item.first_name} ${item.last_name}`;
        fragment.appendChild(li);
      });

      document.getElementById("ul-users").innerHTML = " ";
      document.getElementById("ul-users").appendChild(fragment);

      totalPages = dabrunebulirogorcJs.total_pages;
    })
    .catch(function (error) {
      if (error == 404) {
        let p = document.createElement("p");
        p.textContent = "Page Not FOund";
        document.getElementById("api-users").appendChild(p);
      } else if (error == 500) {
        let p = document.createElement("p");
        p.textContent = "Server Error";
        document.getElementById("api-users").appendChild(p);
      }
    });
}
document.getElementById("loadprevuser").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }
  // currentPage = currentPage - 1;
  // currentPage -= 1;
  currentPage--;
  getUsers(currentPage);
});

document.getElementById("loadnextuser").addEventListener("click", function () {
  if(currentPage == totalPages) {
      return;
  }
  // currentPage = currentPage + 1;
  // currentPage += 1;
  currentPage++;
  getUsers(currentPage);
});

getUsers(currentPage);