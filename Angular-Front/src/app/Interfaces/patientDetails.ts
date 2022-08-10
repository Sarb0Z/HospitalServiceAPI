export class PatientDetails implements IPatientDetails {
    details_id?: number;
    patient_id?: number;
    blood_type?: string | undefined;
    bone_density?: number | undefined;

    constructor(data?: IPatientDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.details_id = _data["details_id"];
            this.patient_id = _data["patient_id"];
            this.blood_type = _data["blood_type"];
            this.bone_density = _data["bone_density"];
        }
    }

    static fromJS(data: any): PatientDetails {
        data = typeof data === 'object' ? data : {};
        let result = new PatientDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["details_id"] = this.details_id;
        data["patient_id"] = this.patient_id;
        data["blood_type"] = this.blood_type;
        data["bone_density"] = this.bone_density;
        return data;
    }
}

export interface IPatientDetails {
    details_id?: number;
    patient_id?: number;
    blood_type?: string | undefined;
    bone_density?: number | undefined;
}
