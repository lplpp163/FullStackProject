import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewFrom = {
    title: '',
    description: '',
    user_name: '',
    product_id: '',
  };
  id = this.route.snapshot.paramMap.get('id');
  reviews: Review[];

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviewService.getReviewsById(this.id).subscribe((data: Review[]) => {
      this.reviews = data;
    });
  }

  isLogin() {
    return localStorage.getItem('token');
  }

  createReview() {
    this.reviewFrom.user_name = localStorage.getItem('user_name');
    this.reviewFrom.product_id = this.id;
    this.reviewService.create(this.reviewFrom).subscribe((data: any) => {
      if (data.success) {
        alert('發表成功');
        this.ngOnInit();
      }
    });
  }


}
