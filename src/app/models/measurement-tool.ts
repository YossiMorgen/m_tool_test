import { MeasurementField } from "./measurement-field";
import { MeasurementUnit } from "./measurement-unit";

export class MeasurementTool {
    public id: number;
    public measurementFieldId: number;
    public measurementField: MeasurementField;
    public name: string;
    public minValue: number;
    public maxValue: number;
    public uncertainty: number;
    public uncertaintyMeasurementUnitId: number;
    public uncertaintyMeasurementUnit: MeasurementUnit;

    constructor(name: string, minValue: number, maxValue: number, measurementUnitId: number, uncertainty: number) {
        this.measurementFieldId = measurementUnitId;
        this.name = name;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.uncertainty = uncertainty;
    }
}
