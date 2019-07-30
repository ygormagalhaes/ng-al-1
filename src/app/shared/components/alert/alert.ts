export enum AlertType {
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}

export class Alert {
    constructor(
        public readonly type: AlertType,
        public readonly message: string
    ) { }
}
