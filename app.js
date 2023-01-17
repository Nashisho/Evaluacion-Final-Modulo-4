class UserManager {
    constructor() {
      this.data = null;
      this.getData();
    }
  
    getData() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.data = JSON.parse(xhr.responseText);
        } else {
          console.log('Error al cargar los datos');
        }
      }
      xhr.send();
    }
  
    listUsers() {
      this.data.forEach(user => console.log(user.name));
    }
  
    getUserInfo(username) {
      const user = this.data.find(u => u.username === username);
      if (user) {
        console.log(`Username: ${user.username}\nEmail: ${user.email}`);
      } else {
        console.log(`No se encontró al usuario con nombre de usuario ${username}`);
      }
    }
  
    getUserAddress(username) {
      const user = this.data.find(u => u.username === username);
      if (user) {
        const { street, suite, city, zipcode, geo } = user.address;
        console.log(`Street: ${street}\nSuite: ${suite}\nCity: ${city}\nZipcode: ${zipcode}\nGeo: ${JSON.stringify(geo)}`);
      } else {
        console.log(`No se encontró al usuario con nombre de usuario ${username}`);
      }
    }
  
    getUserAdvancedInfo(username) {
      const user = this.data.find(u => u.username === username);
      if (user) {
        const { phone, website, company } = user;
        console.log(`Phone: ${phone}\nWebsite: ${website}\nCompany: ${JSON.stringify(company)}`);
      } else {
        console.log(`No se encontró al usuario con nombre de usuario ${username}`);
      }
    }
  
    listCompanies() {
      const companies = this.data.map(user => user.company);
      companies.forEach(company => console.log(`Name: ${company.name}\nCatchphrase: ${company.catchPhrase}`));
    }
  
    listUsersAlphabetically() {
      const sortedUsers = this.data.sort((a, b) => a.name.localeCompare(b.name));
      sortedUsers.forEach(user => console.log(user.name));
    }
  }
  

  const userManager = new UserManager();
