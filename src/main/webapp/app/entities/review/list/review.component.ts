import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IReview } from '../review.model';
import { ReviewService } from '../service/review.service';
import { ReviewDeleteDialogComponent } from '../delete/review-delete-dialog.component';

@Component({
  selector: 'jhi-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {
  reviews?: IReview[];
  isLoading = false;

  constructor(protected reviewService: ReviewService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.reviewService.query().subscribe({
      next: (res: HttpResponse<IReview[]>) => {
        this.isLoading = false;
        this.reviews = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: IReview): number {
    return item.id!;
  }

  delete(review: IReview): void {
    const modalRef = this.modalService.open(ReviewDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.review = review;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
