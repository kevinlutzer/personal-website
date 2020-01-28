export interface ListStatusApiResponse {
    data: StatusApiInterface[]
}

export interface StatusApiInterface {
    deviceId: string
    isActive: boolean;
    lastActive: string;
    cpuTemp: number;
}

export class Status {
    deviceId: string
    isActive: boolean;
    lastActive: Date;
    cpuTemp: number;

    static fromApi(data: StatusApiInterface): Status {
        const s = new Status()
        s.cpuTemp = data.cpuTemp;
        s.deviceId = data.deviceId;
        s.lastActive = new Date(data.lastActive);
        s.isActive = data.isActive;
        return s
    }
}