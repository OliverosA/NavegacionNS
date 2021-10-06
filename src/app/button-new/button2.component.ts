import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: "button-new",
    templateUrl: './button2.component.html',
    styleUrls: ["./button2.component.css"]
})

export class NewButton{

    constructor(private router: RouterExtensions) { }

    public onNavigate(_selector: String){
        this.router.navigate([_selector]);
    }
}