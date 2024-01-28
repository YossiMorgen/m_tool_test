import { MeasurementTool } from "./measurement-tool";
import { Tools } from "./tools";

export class ToolsFinalDefinition {
    public id: number;
    public toolId: number;
    public tool: Tools
    public measurementToolId: number;
    public measurementTool: MeasurementTool;
    public resolution: number;
    public iso: boolean;

    constructor(toolId: number, measurementToolId: number, resolution: number, iso: boolean) {
        this.toolId = toolId;
        this.measurementToolId = measurementToolId;
        this.resolution = resolution;
        this.iso = iso;
    }

}
