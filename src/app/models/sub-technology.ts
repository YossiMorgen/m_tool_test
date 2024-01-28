import { Technology } from "./technology";

export class SubTechnology {
    public id: number;
    public name: string;
    public m_code: string;
    public technology_id: number;
    public technology: Technology;

    constructor( name: string, m_code: string, technology_id: number) {
        this.name = name;
        this.m_code = m_code;
        this.technology_id = technology_id;
    }
}
