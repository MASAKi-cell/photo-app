import 'reflect-metadata';
import { DiUtil } from '@/util/di.util';
import { testService } from '@/services/test';

describe(`testService`, (): void => {
  test(`testBook`, () => {
    const service = DiUtil.container.resolve(testService);
    const res = service.testBook(5);
    console.log(res);
  });
});
