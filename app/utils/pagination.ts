import { DEFAULT_PAGE_SIZE } from "../constants";

/**
 * generate pagination config
 * @param limit
 * @param skip 
 * @param total 
 * @param defaultPageSize 
 * @returns pagination config with calculated limit and skip values
 */
export const generatedPaginationConfig = (limit: number, skip: number, total: number, defaultPageSize: number = DEFAULT_PAGE_SIZE) => {
    if(total === 0){
      return {
        limit: DEFAULT_PAGE_SIZE,
        skip: 0
      }
    }
    let calculatedLimit = limit + DEFAULT_PAGE_SIZE;
    if(calculatedLimit > total) {
      calculatedLimit = total;
    }
    return {
      limit: calculatedLimit,
      skip: skip + DEFAULT_PAGE_SIZE
    }
  }