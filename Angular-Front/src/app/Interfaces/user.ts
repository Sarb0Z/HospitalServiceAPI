export class User implements IUser {
    id?: number;
    username?: string | undefined;
    email_id?: string | undefined;
    cnic?: string | undefined;
    date_created?: Date;

    constructor(data?: IUser) {
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
            this.username = _data["username"];
            this.email_id = _data["email_id"];
            this.cnic = _data["cnic"];
            this.date_created = _data["date_created"] ? new Date(_data["date_created"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["username"] = this.username;
        data["email_id"] = this.email_id;
        data["cnic"] = this.cnic;
        data["date_created"] = this.date_created ? this.date_created.toISOString() : <any>undefined;
        return data;
    }
}

export interface IUser {
    id?: number;
    username?: string | undefined;
    email_id?: string | undefined;
    cnic?: string | undefined;
    date_created?: Date;
}
