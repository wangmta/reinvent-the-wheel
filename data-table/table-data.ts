import { Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators/map';

interface Filter {
  method: Function;
  trigger: any;
}

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.html'
})
export class TableDataComponent implements OnChanges {
  @Input('rows') rows: any[];
  @Input('keys') keys: any[];
  @Input('labels') labels: any[];
  @Input('special-column') specialColumn: any[] = [];
  @Input('special-column-exe') specialColumnExe: Object = {};
  // @Input('special-column-func') specialColumnFunc: Object = {};
  // @Input('special-column-event') specialColumnEvent: Object = {};
  @Input('show-sort') showSort: boolean;
  @Input('custom-style') customStyle: any;
  @Input('filter-by') filterBy: Filter;
  @Input('init-rows') initRows: number;
  itemsInView: any[];
  descending: boolean = false;
  arrowPointer;
  pages: any[];
  itemsPerPage$: BehaviorSubject<number>;
  currentPage$ = new BehaviorSubject(0);
  totalPages$ = new BehaviorSubject(0);
  isFirstPage$ = this.currentPage$.pipe(map(page => page === 0));
  isLastPage$ = new BehaviorSubject(false);
  changeSub: Subscription;
  dbSub: Subscription;
  totalRows$ = new BehaviorSubject(0);
  debounceSub$ = new Subject();

  constructor() {
    this.dbSub = this.debounceCall(500).subscribe(() => {
      if (this.filterBy && typeof this.filterBy.method === 'function') {
        let filterData = this.filterBy.method(this.rows);
        // console.log(filterData.length);
        this.totalRows$.next(filterData.length);
        this.currentPage$.next(0);
        this.refresh(filterData);
      } else {
        this.currentPage$.next(0);
        this.refresh(this.rows);
      }
    });
  }

  ngOnInit() {
    this.itemsPerPage$ = new BehaviorSubject(this.initRows || 10);
  }

  ngOnChanges(changes) {
    this.debounceSub$.next(true);
  }

  ngOnDestroy() {
    if (this.changeSub) this.changeSub.unsubscribe();
    if (this.dbSub) this.dbSub.unsubscribe();
  }

  refresh(rawData) {
    if (rawData && rawData.length >= 0) {
      this.changeSub = combineLatest(this.itemsPerPage$, this.currentPage$).subscribe(
        ([itemsPerPage, currentPage]) => {
          const startIndex = itemsPerPage * currentPage;
          this.itemsInView = rawData.slice(startIndex, startIndex + itemsPerPage);
          this.totalPages$.next(Math.ceil(rawData.length / itemsPerPage));
          this.isLastPage$.next(this.totalPages$.getValue() === currentPage + 1);
        }
      );
    }
  }

  debounceCall(delay: number) {
    return this.debounceSub$.pipe(debounceTime(delay));
  }

  checkSpecialCol(key) {
    if (this.specialColumn.indexOf(key) > -1) return true;
    return false;
  }

  // onSpecialColFunc(key, rawData) {
  //   if (this.specialColumnFunc.hasOwnProperty(key)) {
  //     return this.specialColumnFunc[key](rawData);
  //   } else {
  //     return rawData;
  //   }
  // }

  // onSpecialColEvent(key, rawData) {
  //   if (this.specialColumnEvent.hasOwnProperty(key)) {
  //     this.specialColumnEvent[key](rawData);
  //   }
  // }
  onSpecialColFunc(key, rawData) {
    if (this.specialColumnExe.hasOwnProperty(key)) {
      return this.specialColumnExe[key]['func'](rawData);
    } else {
      return rawData;
    }
  }

  onSpecialColEvent(key, rawData) {
    if (this.specialColumnExe.hasOwnProperty(key)) {
      this.specialColumnExe[key]['event'](rawData);
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
    if (!this.showSort) return;
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
