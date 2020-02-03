export interface GetTelemetryApiResponse {
    telemetry: TelemeteryApiInterface
}

export interface TelemeteryApiInterface {
    lux: number;
    co2: number;
    tvoc: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;
    timestamp: string;
    deviceId: string;
}

export class Telemetry {
    lux: number;
    co2: number;
    tvoc: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;
    timestamp: Date;
    deviceId: string;

    static fromApi(data: TelemeteryApiInterface): Telemetry {
        const s = new Telemetry()
        if (!data) {
            return s;
        }
        s.lux = data.lux;
        s.co2 = data.co2;
        s.tvoc = data.tvoc;
        s.roomTemp = data.roomTemp; 
        s.cpuTemp = data.cpuTemp;
        s.pressure = data.pressure;
        s.humidity = data.humidity;
        s.timestamp = new Date(data.timestamp);
        s.deviceId = data.deviceId;
        return s
    }
}