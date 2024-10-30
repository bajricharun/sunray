import axios from "axios";

const returnRandom = (count: number = 10, min: number = 0, max: number = 100): number[] => {
    return Array.from({ length: count }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
      );
}


const isPrime = (number: number) => {
  if (number <= 1) return false;

  if (number % 2 == 0 && number > 2) return false;

  const s = Math.sqrt(number);

  for (let i = 3; i <= s; i+=2) {
    if (number % i === 0) return false;
  }

  return true;
}

const instance = axios.create({
  baseURL: "http://localhost:8080",
});


const getData = async (numbers: any, shouldFilter: any, filterToUse: any, filterBy: any) => {
  const filterToUseMap: any = {
    "<": "smallerThanN",
    ">": "greaterThanN",
    "=": "equalToN"
  }
  
  filterToUse = filterToUseMap[filterToUse];
  
  const res = await instance.post(`/api/sort-numbers`, {
    numbers, 
    shouldFilter, 
    filterToUse,
    filterBy
  });

  return res.data;
};


export {returnRandom, isPrime, getData};