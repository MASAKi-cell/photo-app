import { BindingScopeEnum, Container } from 'inversify';

export class DiUtil {
  private static _container: Container;

  static get container(): Container {
    if (DiUtil._container === undefined) {
      DiUtil._container = new Container({
        autoBindInjectable: true,
        defaultScope: BindingScopeEnum.Singleton,
      });
    }
    return DiUtil._container;
  }
}
