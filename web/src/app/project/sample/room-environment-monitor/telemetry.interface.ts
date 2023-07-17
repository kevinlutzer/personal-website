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
    constructor(public lux: number, public co2: number, public tvoc: number, public roomTemp: number, 
      public cpuTemp: number, public pressure: number, public humidity: number) {}

    static fromApi(data: TelemeteryApiInterface): Telemetry {
        return new Telemetry(data.lux, data.co2, data.tvoc, data.roomTemp, 
          data.cpuTemp, data.pressure, data.humidity);
    }
}

export class TelemetryEvent extends Telemetry {
    constructor(lux: number, co2: number, tvoc: number, roomTemp: number, 
      cpuTemp: number, pressure: number, humidity: number, public timestamp: Date, public deviceId: string, public id: string){
      super(lux, co2, tvoc, roomTemp, cpuTemp, pressure, humidity);
    }

    static fromApi2(data: TelemeteryEventApiInterface): any {
      return null;
    }
}