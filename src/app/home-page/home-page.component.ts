import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

    constructor(private router: RouterExtensions) { }

    ngOnInit(): void { }

    public onNavigate() {
        this.router.navigate(['/second-page']);
    }
}