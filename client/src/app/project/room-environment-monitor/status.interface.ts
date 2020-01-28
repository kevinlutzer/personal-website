export interface ListStatusApiResponse {
    data: StatusApiInterface[]
}

export interface StatusApiInterface {
    name: string; 
    roomDescription: string;
    deviceId: string
    lastActive: string;
    cpuTemp: number;
}

export class Status {
    name: string;
    deviceId: string
    lastActive: Date;
    roomDescription: string; 
    cpuTemp: number;

    static fromApi(data: StatusApiInterface): Status {
        const s = new Status()
        s.cpuTemp = data.cpuTemp;
        s.deviceId = data.deviceId;
        s.lastActive = new Date(data.lastActive || '');
        s.roomDescription = data.roomDescription;
        s.name = data.name;
        return s
    }
}