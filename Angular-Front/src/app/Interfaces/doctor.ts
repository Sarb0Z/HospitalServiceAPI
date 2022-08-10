export class Doctor implements IDoctor {
    id?: number;
    doctor_name?: string | undefined;
    title?: string | undefined;

    constructor(data?: IDoctor) {
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
            this.doctor_name = _data["doctor_name"];
            this.title = _data["title"];
        }
    }

    static fromJS(data: any): Doctor {
        data = typeof data === 'object' ? data : {};
        let result = new Doctor();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["doctor_name"] = this.doctor_name;
        data["title"] = this.title;
        return data;
    }
}

export interface IDoctor {
    id?: number;
    doctor_name?: string | undefined;
    title?: string | undefined;
}
