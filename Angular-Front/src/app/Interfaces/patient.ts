
export class Patient implements IPatient {
    id?: number;
    patient_name?: string | undefined;
    cnic?: string | undefined;
    dob?: Date;

    constructor(data?: IPatient) {
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
            this.patient_name = _data["patient_name"];
            this.cnic = _data["cnic"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Patient {
        data = typeof data === 'object' ? data : {};
        let result = new Patient();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["patient_name"] = this.patient_name;
        data["cnic"] = this.cnic;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        return data;
    }
}

export interface IPatient {
    id?: number;
    patient_name?: string | undefined;
    cnic?: string | undefined;
    dob?: Date;
}
