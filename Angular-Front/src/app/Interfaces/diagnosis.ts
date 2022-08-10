
export class Diagnosis implements IDiagnosis {
    id?: number;
    doctor?: number;
    visit?: number;
    result?: string | undefined;
    patient_id?: number;

    constructor(data?: IDiagnosis) {
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
            this.doctor = _data["doctor"];
            this.visit = _data["visit"];
            this.result = _data["result"];
            this.patient_id = _data["patient_id"];
        }
    }

    static fromJS(data: any): Diagnosis {
        data = typeof data === 'object' ? data : {};
        let result = new Diagnosis();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["doctor"] = this.doctor;
        data["visit"] = this.visit;
        data["result"] = this.result;
        data["patient_id"] = this.patient_id;
        return data;
    }
}

export interface IDiagnosis {
    id?: number;
    doctor?: number;
    visit?: number;
    result?: string | undefined;
    patient_id?: number;
}

