import { TelemeteryApiInterface, Telemetry } from './telemetry.interface';

export interface ListDeviceApiResponse {
    devices: DeviceApiInterface[]
}

export interface DeviceApiInterface {
    deviceId: string;
    name: string; 
    roomLocation: string;
    description: string;
    lastTelemetry: TelemeteryApiInterface;
    lastActivity: string;
}

export class Device {
    deviceId: string;
    name: string; 
    roomLocation: string;
    description: string;
    lastTelemetry: Telemetry;
    lastActivity: Date;

    static fromApi(data: DeviceApiInterface): Device {
        const s = new Device()
        s.deviceId = data.deviceId;
        s.name = data.name;
        s.roomLocation = data.roomLocation;
        s.description = data.description;
        s.lastTelemetry = Telemetry.fromApi(data.lastTelemetry);
        s.lastActivity = new Date(data.lastActivity);
        return s
    }
}