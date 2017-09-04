export type AlertAction = 'Success' | 'Failure';

export interface Alert {
    message: string;
    action?: AlertAction;
}
