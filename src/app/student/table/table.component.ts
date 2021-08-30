import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Student } from 'src/app/models/student.model';
import { UzmiPodatkeService } from 'src/app/servis/uzmi-podatke.service';
import { DialogUnosComponent } from '../dialog-unos/dialog-unos.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  studenti: Student[] = [];
  selektovaniStudent?: Student;
  displayedColumns = ['id', 'name', 'email', 'gender', 'status'];
  
  pageSlice = this.studenti.slice(0, 6);
  constructor(private studentServis: UzmiPodatkeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.prikaziPodatke();
  }

  public prikaziPodatke(): void {
    this.studentServis.getStudents().subscribe((data: any) => {
      this.studenti = data.data;
      console.log(data);
    });
  }
  openDialogDetaljnije(student: Student) {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      height: "350px",
      data: {
        id: student.id, name: student.name, email: student.email,
        gender: student.gender, status: student.status
      }
    })

  }

  


  public promeniStranicu(event: PageEvent) {
    console.log(event);
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.studenti.length) {
      endIndex = this.studenti.length;

    }
    this.pageSlice = this.studenti.slice(startIndex, endIndex);
    console.log(this.pageSlice);
  }

}
