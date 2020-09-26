

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    

    constructor(newName: string, newType: string, newLaunchDate: string, newOrbitType: string, newOperational: boolean){
        this.name = newName;
        this.type = newType;
        this.launchDate = newLaunchDate;
        this.orbitType = newOrbitType;
        this.operational = newOperational;
        let check = false;
        
    }
    houldShowWarning(): boolean{
        let check = false;
        if(this.type.toLowerCase() == "space debris"){
            check = true;
        }
        return check;  
    }
}
