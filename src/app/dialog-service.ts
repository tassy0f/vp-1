import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class DialogService {
    public isShowModalWindow: boolean = false

    constructor() {
        
    }
}