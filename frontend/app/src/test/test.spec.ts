import 'reflect-metadata';
import { DiUtil } from '/Users/takahashimasaki/Desktop/studay/laravel/photo-app/frontend/app/src/util/di.util';
import { testService } from '/Users/takahashimasaki/Desktop/studay/laravel/photo-app/frontend/app/src/services/test';

describe(`testService`, (): void =>{
    test(`testBook`,() => {
        const service = DiUtil.container.resolve(testService);
        const res = service.testBook(5);
        console.log(res);
    })
});
