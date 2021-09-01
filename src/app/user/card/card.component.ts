import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() userCard: User;
  @Output() changeUsers = new EventEmitter();

  constructor(
    private dialog: MatDialog) {
  }

  openDialogDetails() {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      data: {
        id: this.userCard.id, name: this.userCard.name, email: this.userCard.email,
        gender: this.userCard.gender, status: this.userCard.status
      }
    })
  }

  openDialogDelete() {
    this.dialog.open(DialogDeleteComponent, {
      width: "400px",
      data: this.userCard
    }).afterClosed().subscribe((user: User) => {//osluskuje i ceka se zatvaranje
      if (user) {
        this.changeUsers.emit();//moze se u emit proslediti user, i onda u smart komponenti raditi brisanje
      }
    });
  }

  openDialogEdit() {
    this.dialog.open(DialogSubmitComponent, {
      width: "400px",
      data: this.userCard
    }).afterClosed().subscribe((user: User) => {
      if (user) {
        this.changeUsers.emit();
      }
    });
  }

}