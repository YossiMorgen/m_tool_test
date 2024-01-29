import { MeasurementTool } from "./measurement-tool";
import { Tools } from "./tools";

export class ToolsFinalDefinition {
    public id: number;
    public measurementToolId: number;
    public measurementTool: MeasurementTool;
    public resolution: number;
    public iso: boolean;

    constructor(measurementToolId: number, resolution: number, iso: boolean) {
        this.measurementToolId = measurementToolId;
        this.resolution = resolution;
        this.iso = iso;
    }

}
