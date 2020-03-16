export interface ListTelemetryApiResponse {
    telemetry: TelemeteryApiInterface[];
    hasMore: boolean;
    nextCusor: string;
}

export interface TelemeteryApiInterface {
    lux: number;
    co2: number;
    tvoc: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;
}

export interface TelemeteryEventApiInterface extends TelemeteryApiInterface {
    timestamp: string;
    deviceId: string;
    id: string;
}

export class Telemetry {
    lux: number;
    co2: number;
    tvoc: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;

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
        return s
    }
}

export class TelemetryEvent extends Telemetry {
    timestamp: Date;
    deviceId: string;
    id: string;

    static fromApi(data: TelemeteryEventApiInterface): TelemetryEvent {
        const telemetryEvent = Telemetry.fromApi(data) as TelemetryEvent;
        telemetryEvent.timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
        telemetryEvent.deviceId = data.deviceId;
        telemetryEvent.id = data.id;
        return telemetryEvent;
    }
}