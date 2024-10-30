import { Request } from "express";

export default class IndexService {
  public sortNumbers = async (req: Request) => {
    const { numbers, shouldFilter, filterToUse, filterBy } = req.body;
    const filterFunction: {
      [key: string]: (arr: number[], N: number) => number[];
    } = {
      smallerThanN: this.filterSmallerThanN,
      greaterThanN: this.filterGreaterThanN,
      equalToN: this.filterEqualToN,
    };

    let sortedNumbers = this.sort(numbers);

    if (shouldFilter && filterToUse) {
      const functionCall = filterFunction[filterToUse];

      if (!filterFunction) {
        return {
          message: "filter function not present",
          status: 500,
        };
      }
      console.log(functionCall(sortedNumbers, filterBy));
      sortedNumbers = functionCall(sortedNumbers, filterBy);
    }

    return {
      message: sortedNumbers,
      status: 200,
    };
  };

  public sort = (numbers: any) => {
    const sortedNumbers = numbers.sort((a: any, b: any) => a - b);

    return sortedNumbers;
  };

  public filterSmallerThanN(numbers: any, N: any): any {
    return numbers.filter((num: any) => num < N);
  }

  public filterGreaterThanN(numbers: any, N: any): any {
    return numbers.filter((num: any) => num > N);
  }

  public filterEqualToN(numbers: any, N: any): any {
    return numbers.filter((num: any) => num === N);
  }
}
