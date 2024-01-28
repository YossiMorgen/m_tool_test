import { MeasurementUnit } from "./measurement-unit";

export class MeasurementField {
    public id: number;
    public name: string;
    public minValue: number;
    public maxValue: number;
    public measurementUnitId: number;
    public measurementUnit: MeasurementUnit;
    public uncertainty: number;

    constructor(name: string, minValue: number, maxValue: number, measurementUnitId: number, uncertainty: number) {
        this.name = name;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.measurementUnitId = measurementUnitId;
        this.uncertainty = uncertainty;
    }
}
