export class Todo{
    Sno:number
    Title:string
    desc:string
    active:boolean

    constructor(Sno: number, Title: string, desc: string, active: boolean) {
        this.Sno = Sno;
        this.Title = Title;
        this.desc = desc;
        this.active = active;
    }
}