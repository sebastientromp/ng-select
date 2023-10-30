import { AfterViewInit, Component, ElementRef } from "@angular/core";
import { IOption } from "@firestone-hs/ng-select";
import { OptionService } from "../../services/option.service";
declare var hljs: any;

@Component({
    selector: "filter-placeholder",
    templateUrl: "./filter-placeholder.component.html",
})
export class FilterPlaceholder implements AfterViewInit {
    characters: Array<IOption> = this.optionService.getCharacters();

    constructor(
        private elementRef: ElementRef,
        private optionService: OptionService
    ) {}

    ngAfterViewInit() {
        hljs.initHighlighting();
        let nodes: NodeList = this.elementRef.nativeElement.querySelectorAll(
            ".typescript, .html, .css"
        );

        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    html: string = `
<pre><code class="html">&lt;ng-select
    filterPlaceholder="Type to search..."
    [options]="characters"&gt;
&lt;/ng-select&gt;
</code></pre>`;
}
