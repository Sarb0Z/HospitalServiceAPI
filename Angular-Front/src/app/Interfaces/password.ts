export class Passwords implements IPasswords {
    id?: number;
    _password?: string | undefined;

    constructor(data?: IPasswords) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this._password = _data["_password"];
        }
    }

    static fromJS(data: any): Passwords {
        data = typeof data === 'object' ? data : {};
        let result = new Passwords();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["_password"] = this._password;
        return data;
    }
}

export interface IPasswords {
    id?: number;
    _password?: string | undefined;
}