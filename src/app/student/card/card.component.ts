import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/models/student.model';
import { UzmiPodatkeService } from 'src/app/servis/uzmi-podatke.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() korisnik:Student;
  listaStudenata: Student[] = [];
  constructor(private studentServis: UzmiPodatkeService,
              private snackBar:MatSnackBar,
              private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.prikaziPodatke();
  }

  openDialogDetaljnije() {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      height: "350px",
      data: {
        id: this.korisnik.id, name: this.korisnik.name, email: this.korisnik.email,
        gender: this.korisnik.gender, status: this.korisnik.status
      }
    })

  }
  errorSnackBar(){
    this.snackBar.open("Doslo je do greske","Ok",{
      panelClass:['greskaSnackBar']
    });
    
  }


  public prikaziPodatke(): void {
    this.studentServis.getStudents().subscribe((data: any) => {
      this.listaStudenata = data.data;
      //console.log(data);
    }, error=>{
      this.listaStudenata=[];
      this.errorSnackBar()
    }
    );

  }
}

 



  


