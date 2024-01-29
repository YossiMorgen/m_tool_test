import { MeasurementUnit } from "./measurement-unit";
import { Tools } from "./tools";

export class MeasurementField {
    public id: number;
    public name: string;
    public toolId: number;
    public tool: Tools;
    public minValue: number;
    public maxValue: number;
    public measurementUnitId: number;
    public measurementUnit: MeasurementUnit;
    public uncertainty: number;
    public uncertaintyMeasurementUnitId: number;
    public uncertaintyMeasurementUnit: MeasurementUnit;

    constructor(name: string, toolId: number, minValue: number, maxValue: number, measurementUnitId: number, uncertainty: number) {
        this.name = name;
        this.toolId = toolId;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.measurementUnitId = measurementUnitId;
        this.uncertainty = uncertainty;
    }
}
