import { RoomEnvironmentMonitorTelemetryApiInterface } from "./room-environment-monitor-telemetry.api.interface";

export class RoomEnvironmentMonitorTelemetry {

    lux: number;
    co2: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;
    timestamp: Date;
    deviceId: string;

    static fromApi(data: RoomEnvironmentMonitorTelemetryApiInterface): RoomEnvironmentMonitorTelemetry {
        const obj = new RoomEnvironmentMonitorTelemetry();
        obj.lux = data.lux;
        obj.co2 = data.co2;
        obj.roomTemp = data.roomTemp;
        obj.cpuTemp = data.cpuTemp;
        obj.pressure = data.pressure;
        obj.humidity = data.humidity;
        obj.timestamp = new Date(data.timestamp || '');
        obj.deviceId = data.deviceId;
        return obj;
    }
}