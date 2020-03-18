import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HitsService } from '../../services/hits.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiResult, Hits } from '../../modal/modal';

@Component({
  selector: 'app-pollslis',
  templateUrl: './pollslis.component.html',
  styleUrls: ['./pollslis.component.css']
})
export class PollslisComponent implements OnInit {
  Subscription: Subscription
  dataSource: MatTableDataSource<Hits>;
  displayedColumns: string[] = ['title', 'url', 'author', 'created_at'];

  constructor(public dialog: MatDialog,
    public hitsService: HitsService) { }

  ngOnInit() {
    this.getPollsList()
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }

  getPollsList() {
    this.Subscription = timer(0, 10000).pipe(
      switchMap(() => this.hitsService.get())
    ).subscribe((response: ApiResult) => {
      this.dataSource = new MatTableDataSource(response.hits);
      this.filterPerdicate()
    })
  }

  filterPerdicate() {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.title.toLowerCase().includes(filter)
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { row }
    });

    dialogRef.afterClosed();
  }
}
