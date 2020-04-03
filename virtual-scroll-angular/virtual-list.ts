import {
  Component,
  Input,
  ViewChild,
  Directive,
  ContentChild,
  TemplateRef
} from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { combineLatest } from "rxjs/Observable/combineLatest";
import { map } from "rxjs/operators/map";

@Directive({
  selector: "[listItem]"
})
class ListItemDirective {}

@Component({
  selector: "virtual-list",
  templateUrl: "virtual-list.html"
})
export class VirtualListComponent {
  @ViewChild("viewport") viewport: HTMLDivElement;
  @Input() list: any[];
  @Input() itemHeight: number;
  @ContentChild(ListItemDirective, { read: TemplateRef }) listItemTemplate;
  private startIndex$ = new BehaviorSubject(0);
  private itemsCounts$ = new BehaviorSubject(8);
  visibleItems$ = combineLatest(this.startIndex$, this.itemsCounts$).pipe(
    map(([startIndex, itemsCounts]) => {
      return this.list.slice(startIndex, startIndex + itemsCounts);
    })
  );

  ngOnChanges(changes) {
    // console.log(changes);
  }

  changeCounts(num) {
    console.log(num);
    let count = this.startIndex$.getValue();
    this.startIndex$.next(count + num);
  }

  changeIndex() {}

  onScroll($event) {
    console.log($event);
    console.log(this.viewport.scrollTop);
    if (this.viewport.offsetTop > 300) {
      this.changeCounts(this.viewport.offsetTop / 100);
    }
  }
}
