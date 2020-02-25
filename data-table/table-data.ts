import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "table-data",
  templateUrl: "table-data.html"
})
export class TableDataComponent implements OnInit, OnChanges {
  @Input("rows") rows: any[];
  @Input("keys") keys: any[];
  @Input("labels") labels: any[];
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

  ngOnInit() {}

  ngOnChanges(changes) {
    // console.log(changes);
    this.currentPage$.next(0);
    this.refresh();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }

  refresh() {
    if (this.rows) {
      this.changeSub = Observable.combineLatest(
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

  changeItemsPerPage(value) {
    this.itemsPerPage$.next(value);
  }

  // trackByKey(index, item) {
  //   return item[this.indexKey];
  // }

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
