export class Device {
  constructor(private _place: string, private _deviceType: string){}


  get place(): string {
    return this._place;
  }

  get deviceType(): string {
    return this._deviceType;
  }
}
