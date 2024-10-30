"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class IndexService {
    constructor() {
        this.sortNumbers = (req) => __awaiter(this, void 0, void 0, function* () {
            const { numbers, shouldFilter, filterToUse, filterBy } = req.body;
            const filterFunction = {
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
        });
        this.sort = (numbers) => {
            const sortedNumbers = numbers.sort((a, b) => a - b);
            return sortedNumbers;
        };
    }
    filterSmallerThanN(numbers, N) {
        return numbers.filter((num) => num < N);
    }
    filterGreaterThanN(numbers, N) {
        return numbers.filter((num) => num > N);
    }
    filterEqualToN(numbers, N) {
        return numbers.filter((num) => num === N);
    }
}
exports.default = IndexService;
