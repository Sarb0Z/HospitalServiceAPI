export class Logs implements ILogs {
    id?: number;
    log_text?: string | undefined;
    log_datetime?: Date;

    constructor(data?: ILogs) {
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
            this.log_text = _data["log_text"];
            this.log_datetime = _data["log_datetime"] ? new Date(_data["log_datetime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Logs {
        data = typeof data === 'object' ? data : {};
        let result = new Logs();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["log_text"] = this.log_text;
        data["log_datetime"] = this.log_datetime ? this.log_datetime.toISOString() : <any>undefined;
        return data;
    }
}

export interface ILogs {
    id?: number;
    log_text?: string | undefined;
    log_datetime?: Date;
}