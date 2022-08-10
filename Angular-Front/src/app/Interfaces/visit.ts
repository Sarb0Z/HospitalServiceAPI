
export class Visit implements IVisit {
    id?: number;
    timing?: Date;
    purpose?: string | undefined;
    patient_id?: number | undefined;
    doctor_id?: number | undefined;

    constructor(data?: IVisit) {
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
            this.timing = _data["timing"] ? new Date(_data["timing"].toString()) : <any>undefined;
            this.purpose = _data["purpose"];
            this.patient_id = _data["patient_id"];
            this.doctor_id = _data["doctor_id"];
        }
    }

    static fromJS(data: any): Visit {
        data = typeof data === 'object' ? data : {};
        let result = new Visit();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["timing"] = this.timing ? this.timing.toISOString() : <any>undefined;
        data["purpose"] = this.purpose;
        data["patient_id"] = this.patient_id;
        data["doctor_id"] = this.doctor_id;
        return data;
    }
}

export interface IVisit {
    id?: number;
    timing?: Date;
    purpose?: string | undefined;
    patient_id?: number | undefined;
    doctor_id?: number | undefined;
}