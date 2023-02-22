import { Component } from '@angular/core'
@Component({
    selector:'app-body',
    templateUrl:'./body.component.html',
})
export class BodyComponent {

    show = true;

    sentence: any = {
        message: 'With great power, comes great responsibility',
        author: 'Ben Parker'
    }

    characters: string[] = ['Spiderman','Venom','Dr. Octopus']
}