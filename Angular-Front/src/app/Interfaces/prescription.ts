export class Prescription implements IPrescription {
    id?: number;
    patient_id?: number;
    doctor_id?: number;
    medicine_id?: number;
    recommendation?: string | undefined;
    intake_amount?: number;

    constructor(data?: IPrescription) {
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
            this.patient_id = _data["patient_id"];
            this.doctor_id = _data["doctor_id"];
            this.medicine_id = _data["medicine_id"];
            this.recommendation = _data["recommendation"];
            this.intake_amount = _data["intake_amount"];
        }
    }

    static fromJS(data: any): Prescription {
        data = typeof data === 'object' ? data : {};
        let result = new Prescription();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["patient_id"] = this.patient_id;
        data["doctor_id"] = this.doctor_id;
        data["medicine_id"] = this.medicine_id;
        data["recommendation"] = this.recommendation;
        data["intake_amount"] = this.intake_amount;
        return data;
    }
}

export interface IPrescription {
    id?: number;
    patient_id?: number;
    doctor_id?: number;
    medicine_id?: number;
    recommendation?: string | undefined;
    intake_amount?: number;
}
