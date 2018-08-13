import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
       
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'; 
    }
}
// Renderer is a better way of manipulating the dom 

// not limited to running is the browser and works with service workers 
