import { SubTechnology } from "./sub-technology";

export class Tools {
    public id: number;
    public name: string;
    public sub_tech_id: number;
    public sub_technology: SubTechnology;
    public m_proc_id: number;

    constructor( name: string, sub_tech_id: number, m_proc_id: number) {
        this.name = name;
        this.sub_tech_id = sub_tech_id;
        this.m_proc_id = m_proc_id;
    }
}
