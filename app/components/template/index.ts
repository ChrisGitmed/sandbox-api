export class Template {
  static get = async () => {
    console.log('get');
    return 'get';
  };

  static create = async (payload: object) => {
    console.log('create');
    return 'create';
  };

  static update = async (uuid: string, payload: object) => {
    console.log('update');
    return 'update';
  };

  static destroy = async (uuid: string) => {
    console.log('delete');
    return 'delete';
  };
}

