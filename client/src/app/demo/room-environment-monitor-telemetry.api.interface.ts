export interface RoomEnvironmentMonitorTelemetryApiInterface {
    lux: number;
    co2: number;
    roomTemp: number;
    cpuTemp: number;
    pressure: number;
    humidity: number;
    timestamp: string;
    deviceId: string;
}

export interface RoomEnvironmentMonitorTelemetryApiListRequestInterface {
    pageSize: number;
    deviceId: string;
    cursor: number;
}

export interface RoomEnvironmentMonitorTelemetryApiListResponseInterface {
    hasMore: boolean;
    nextCursor: number;
    data: RoomEnvironmentMonitorTelemetryApiInterface[];
}
