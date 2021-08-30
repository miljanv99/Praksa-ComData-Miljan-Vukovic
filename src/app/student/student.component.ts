import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from '../models/student.model';
import { UzmiPodatkeService } from '../servis/uzmi-podatke.service';
import { DialogUnosComponent } from './dialog-unos/dialog-unos.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  

  //{ime:"Miljan",prezime:"Vukovic",adresa:"Cara Lazara 33",grad:"Novi Sad",slika:'../../assets/slike/osoba1.jpg',pol:"Musko",brak:true,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Doktor"},
  //{ime:"Milan",prezime:"Radic",adresa:"Nikole Pasica 55",grad:"Beograd",slika:'../../assets/slike/osoba2.jpg',pol:"Musko",brak:false,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Programer"},
  //{ime:"Sanja",prezime:"Jovanovic",adresa:"Milosa Obilica 11",grad:"Kula",slika:'../../assets/slike/osoba3.jpg',pol:"Zensko",brak:true,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Arhitekta"},
  //{ime:"Sara",prezime:"Nikolic",adresa:"Bulevar Evrope 100",grad:"Subotica",slika:'../../assets/slike/osoba4.jpg',pol:"Zensko",brak:false,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Majstor"},
  //{ime:"Jovan",prezime:"Ivic",adresa:"Kosovska 14",grad:"Novi Sad",slika:'../../assets/slike/osoba5.jpg',pol:"Musko",brak:false,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Profesor"},
  //{ime:"Violeta",prezime:"Markovic",adresa:"Milosa Oblicia 23",grad:"Novi Sad",slika:'../../assets/slike/osoba4.jpg',pol:"Zensko",brak:true,drzava:"Srbija",mejl:"dfsf@gmail.com",telefon:"025541547",zanimanje:"Profesor"}


  constructor(private snackBar : MatSnackBar,
              private dialogUnos: MatDialog) {

  }

 

  ngOnInit(): void {
   this.loadSnackBar();
  }

  loadSnackBar(){
    this.snackBar.open('Dobrodosli :D', 'Ok', {
      duration: 3500, panelClass: ['snackBarDobroDosao']
    });
  }

  
  openDialogUnos(){
    this.dialogUnos.open(DialogUnosComponent,{
      width:"500px",
      height:"450px"
    })

  }
  


  

}




