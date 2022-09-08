import { injectable } from 'inversify';

@injectable()
export class testService {
  constructor() {}

  /**
   * ランダムでbooleanを返す
   * @param {number} data
   * @return {boolean}
   */
  testBook(data: number): boolean {
    return Math.random() < data ? true : false;
  }
}
