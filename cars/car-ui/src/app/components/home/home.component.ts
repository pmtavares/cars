import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'AVJ Chevy 2010',
    'Corsa Opel 4 doors 2009',
    'BMW sport 2018'
  ];
  carform: FormGroup;
  validMessage: string = "";

  constructor( private carService: CarService) { }

  ngOnInit() {
    this.carform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      plateNumber: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required)

    });
  }

  submitRegistration(){
    if(this.carform.valid)
    {
      this.validMessage = "Your car registration has been submitted. Thank you!";
      this.carService.createCarRegistration(this.carform.value).subscribe(
        data =>{
          this.carform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else
    {
      this.validMessage = "Please fill out the form!";
    }
  }

}
