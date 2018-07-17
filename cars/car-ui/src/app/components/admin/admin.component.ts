import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  public cars;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(
      data=> {this.cars = data},
      err => console.log(err),
      () => console.log('Cars loaded')
    );
  }

}
