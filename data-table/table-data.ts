import { Component, Input, OnChanges } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { combineLatest } from "rxjs/observable/combineLatest";
import { Subscription } from "rxjs/Subscription";
import { map } from "rxjs/operators/map";

@Component({
  selector: "table-data",
  templateUrl: "table-data.html"
})
export class TableDataComponent implements OnChanges {
  @Input("rows") rows: any[];
  @Input("keys") keys: any[];
  @Input("labels") labels: any[];
  @Input("color-code") colorCode: string;
  @Input("color-code-target") colorCodeTarget: string;
  // @Input('index-key') indexKey: any;
  itemsInView: any[];
  descending: boolean = false;
  arrowPointer;
  pages: any[];
  itemsPerPage$ = new BehaviorSubject(10);
  currentPage$ = new BehaviorSubject(0);
  totalPages$ = new BehaviorSubject(0);
  isFirstPage$ = this.currentPage$.pipe(map(page => page === 0));
  isLastPage$ = new BehaviorSubject(false);
  changeSub: Subscription;

  ngOnChanges(changes) {
    // console.log(changes);
    this.currentPage$.next(0);
    this.refresh();
  }

  ngOnDestroy() {
    if (this.changeSub) this.changeSub.unsubscribe();
  }

  refresh() {
    if (this.rows && this.rows.length > 0) {
      this.changeSub = combineLatest(
        this.itemsPerPage$,
        this.currentPage$
      ).subscribe(([itemsPerPage, currentPage]) => {
        const startIndex = itemsPerPage * currentPage;
        this.itemsInView = this.rows.slice(
          startIndex,
          startIndex + itemsPerPage
        );
        this.totalPages$.next(Math.ceil(this.rows.length / itemsPerPage));
        this.isLastPage$.next(this.totalPages$.getValue() === currentPage + 1);
      });
      // this.pages = Array.from(Array(this.totalPages$.getValue()).keys());
    }
  }

  setPage(num) {
    let newPage;
    newPage = this.currentPage$.getValue() + num;
    if (num === 0) newPage = 0;
    if (num === -2) newPage = this.totalPages$.getValue() - 1;
    this.currentPage$.next(newPage);
  }

  setCurrentPage($event) {
    if ($event > 1 && $event <= this.totalPages$.getValue()) {
      this.currentPage$.next($event - 1);
    }
  }

  changeItemsPerPage($event) {
    if ($event >= 5 && $event <= 50) {
      this.currentPage$.next(0);
      this.itemsPerPage$.next($event);
    }
  }

  sortBy(array: any[], index: number) {
    this.descending = !this.descending;
    this.arrowPointer = this.labels[index];
    let field = this.keys[index],
      newA,
      newB;
    array.sort((a, b) => {
      // test for date or string
      if (
        /((\/{1}\d{1,2}\/{1}){1}|(-{1}\d{1,2}-{1}){1})/gi.test(a[field]) ||
        isNaN(parseFloat(a[field]))
      ) {
        newA = a[field];
        newB = b[field];
      } else {
        newA = parseFloat(a[field]);
        newB = parseFloat(b[field]);
      }
      if (this.descending) {
        if (newA > newB) {
          return -1;
        } else if (newA < newB) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (newA > newB) {
          return 1;
        } else if (newA < newB) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
}
