import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './photo-search.component.html'
})
export class PhotoSearchComponent implements OnInit, OnDestroy {
    @Output()
    filterTyped = new EventEmitter<string>();

    @Input()
    filterValue = '';

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.filterTyped.emit(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}
