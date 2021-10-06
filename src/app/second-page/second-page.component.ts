import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';


@Component({
    selector: 'second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ["./second-page.component.css"]
})
export class SecondPageComponent implements OnInit {

    constructor(private router: RouterExtensions) { }

    ngOnInit(): void { }

    public onNavigate() {
        this.router.navigate(['/home-page']);
    }
}