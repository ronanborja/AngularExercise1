export const testFunction = () => {
    console.log("Hello to Typescript")
}

testFunction();

console.log("Exercise 1");

export const searchCity = (searchKey:string) => {
    console.log("Searching... " + searchKey);
    var searchCity = cityList.filter(c => (c.cityName.indexOf(searchKey.toUpperCase()) >=0 || c.country.indexOf(searchKey.toUpperCase()) >= 0));
    displayCities(searchCity);
}

interface City {
    cityName:string;
    country:string;
    population:number;
}

var cityList:City[] = [];

export const addCity = (cityName:string, country:string, population:number) => {
    var newCity:City = {cityName:cityName, country:country, population:population}
    cityList.push(newCity)
    localStorage.setItem("City", JSON.stringify(cityList));
    displayCities(cityList);
}

export const displayCities = (checkList:City[]) => {
    let list = document.getElementById('cityList')
    if (list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    checkList.forEach((city) => {
        let li = document.createElement("li");
        li.innerText = city.cityName + ", " + city.country + ", " + city.population;
        list?.appendChild(li);
    })
}



var cat:City[] = [];
export const addCat = (name:City) => {
    cat.push(name);
}

export const loopCats = () => {
    cat.forEach(c => console.log(c));
}

var myCat: City = {  
    cityName:"hello",
    country:"m",
    population: 5
};


console.log("Number 1");


console.log("Number 2");

export const validateISBN = (isbn:string) => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    isbn = isbn.toUpperCase();
    if (isbn.length != 10) {
        console.log(isbn + " -> " + "false because it has invalid length");
    }
    for (let i=0; i < alphabet.length; i++) {
        if (isbn.indexOf(alphabet[i]) > -1) {
            console.log(isbn + " -> " + "false because it contains invalid characters");
        }
    }
    if (isbn.indexOf('X') > -1 ) {
        if (isbn.indexOf('X') != 9) {
            console.log(isbn + " -> false because X has placed in invalid position");
        }
    }
    let total = 0;
    for (let j=0; j<isbn.length; j++) {
        if (isbn[j] === 'X') {
            total += 10 * (j + 1);
        } else {
            total += parseInt(isbn[j]) * (j + 1);
        }
    }
    (total % 11 == 0) ? console.log(isbn + " -> true"): console.log(isbn + " -> false");
}

validateISBN('1112223339');
validateISBN('111222333');
validateISBN('1112223339X');
validateISBN('1234554321');
validateISBN('1234512345'); 
validateISBN('048665088X'); 
validateISBN('X123456788'); 

console.log("Number 3")

var c = "Catz30";
var checkList = "AabcdEefghIijklmnOopqrstUuvwxyz";
var newString = c.replace(/[a-z]/gi, (s:any) => checkList[(checkList.indexOf(s.toLowerCase()) + 1) % checkList.length ]);
console.log("Initial: " + c);
console.log("Final: " + newString);

var a = [false,0, true, 0, "Hello", 0, 0, "World"];
console.log("Number 4\n" + "Initial: " + a + "\n" + "Converted: " + a.filter(s => s !== 0).concat(a.filter(k => k==0)));