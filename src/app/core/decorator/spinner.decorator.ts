export function ShowLoader() {
  // tslint:disable-next-line:only-arrow-functions ban-types
  return function(clazz: Function) {
    Object.defineProperty(clazz.prototype, 'showLoader', {
      value: true
    });
  };
}

export function HideLoader(triggerAction: string) {
  // tslint:disable-next-line:only-arrow-functions ban-types
  return function(clazz: Function) {
    Object.defineProperty(clazz.prototype, 'triggerAction', {
      value: triggerAction
    });
  };
}

