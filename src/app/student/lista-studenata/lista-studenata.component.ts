import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/models/student.model';
import { UzmiPodatkeService } from 'src/app/servis/uzmi-podatke.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-lista-studenata',
  templateUrl: './lista-studenata.component.html',
  styleUrls: ['./lista-studenata.component.css']
})
export class ListaStudenataComponent implements OnInit {

  selektovaniStudent?: Student;
  listaStudenata: Student[] = [];
  constructor(private studentServis: UzmiPodatkeService,
              private dialog: MatDialog,
              private snackBar:MatSnackBar) {

  }
  ngOnInit(): void {
    this.prikaziPodatke();
  }


 
  openDialog(student:Student) {
   this.dialog.open(DialogUserComponent,{
     width:"400px",
     height:"350px",
     //data:{id:student.id,name:student.name,email:student.email,
       //   gender:student.gender,status:student.status}
       data:student
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
      console.log(data);
    }, error=>{
      this.listaStudenata=[];
      this.errorSnackBar()
    }
    );


  }

}
