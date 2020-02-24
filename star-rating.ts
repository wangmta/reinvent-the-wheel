export class MenuPage {
  showRating = false;
  starRating;
  comment;
  stars = [
    { value: 1, clicked: false },
    { value: 2, clicked: false },
    { value: 3, clicked: false },
    { value: 4, clicked: false },
    { value: 5, clicked: false }
  ];

  template = `
  <div class="back-drop star-rating" [ngClass]="showRating ? 'backdrop-show' : 'backdrop-hide'">
    <div class="custom-card-padding">
        <h2>Let us know your thoughts</h2>
        <p>How do you like this app?</p>
        <div class="flex-container">
            <ion-icon *ngFor="let star of stars" [name]="
          star.clicked && !star.halfStar
            ? 'ios-star'
            : !star.clicked && star.halfStar
            ? 'ios-star-half'
            : 'ios-star-outline'
        " (click)="countStars(star)"></ion-icon>
        </div>
        <p>Do you have any comments? (Optional)</p>
        <textarea [(ngModel)]="comment"></textarea>
        <button ion-button color="orange" class="wide-button bold" (click)="submitRating()">
      SUBMIT
    </button>
    </div>
    <ion-fab center bottom>
        <button ion-fab color="secondary" (click)="close()">
      <ion-icon name="md-close"></ion-icon>
    </button>
    </ion-fab>
</div>
  `;

  close() {
    this.showRating = false;
  }

  countStars(star) {
    if (star.clicked) {
      for (let i = star.value - 1; i < this.stars.length; i++) {
        this.stars[i].clicked = false;
      }
      this.starRating = star.value - 1;
    } else {
      this.starRating = star.value;
      for (let i = 0; i < star.value; i++) {
        this.stars[i].clicked = true;
      }
    }
    console.log(this.starRating);
  }

  submitRating() {
    if (!this.starRating || this.starRating < 1) {
      //   this.util.showAlert('Oops...', 'Please tap the stars, then submit.', 'OK');
      return;
    } else {
      // ajax ...
    }
  }
}
