import { TelemeteryApiInterface, Telemetry } from './telemetry.interface';

export interface ListDeviceApiResponse {
  devices: DeviceApiInterface[];
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
    constructor(
      public deviceId: string,
      public name: string, 
      public roomLocation: string,
      public description: string,
      public lastTelemetry: Telemetry,
      public lastActivity: Date
    ) {}

    static fromApi(data: DeviceApiInterface): Device {
      const lastTelemetry = Telemetry.fromApi(data.lastTelemetry);
      const s = new Device(data.deviceId, data.name, data.roomLocation, data.description, lastTelemetry, new Date(data.lastActivity))
      return s
    }
}