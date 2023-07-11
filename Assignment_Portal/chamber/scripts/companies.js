document.addEventListener('DOMContentLoaded', () => {
    const url = "/wdd230/Assignment_Portal/chamber/json/data.json";
  
    async function getCompaniesData(url) {
            const response = await fetch(url);
            const data = await response.json();
            displayCompanies(data.companies);
            // return data.companies;
        }

    getCompaniesData(url);
  
    const displayCompanies = (companies) => {
        const cards = document.querySelector('div.grid-directory');
  
        companies.forEach((company) => {
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');

            name.innerHTML = `${company.name}`;
            address.innerHTML = `${company.address}`;
            phone.innerHTML = `${company.phone}`;
            website.innerHTML = `${company.website}`;
            website.href = `${company.website}`;

            logo.setAttribute('src', company.imageurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('loading', 'lazy');
            // logo.setAttribute('width', '140');
            // logo.setAttribute('height', '150');

            card.appendChild(logo);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            cards.appendChild(card);
        });
    }
  
    // getCompanyData(url)
    //     .then((companies) => {
    //     displayCompanies(companies);
    //   });
  
        const gridbutton = document.querySelector("#grid");
        const listbutton = document.querySelector("#list");
        const display = document.querySelector(".grid-directory");
  
        gridbutton.addEventListener("click", () => {
            display.classList.add("grid");
            display.classList.remove("list");
        });
    
        listbutton.addEventListener("click", () => {
            display.classList.remove("grid");
            display.classList.add("list");
        });
  });
