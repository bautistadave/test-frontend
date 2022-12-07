import { Component, OnInit } from '@angular/core';
import { Patito } from 'src/app/models/patito.model';
import { PatitoService } from 'src/app/services/patito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patitosList: Patito[] = [];
  
  constructor(private patitoService: PatitoService) { }

  ngOnInit(): void {
   this.getPatitos();
  }

  getPatitos() {
    this.patitoService.getAll()
      .subscribe((data) => {
        this.patitosList = data;
        console.log(data);
        
      })
  }

  delete(id: any) {
    if(confirm("Esta seguro de eliminar este registro? " + id)) {  
      this.patitoService.delete(id)
      .subscribe((res) => {
        console.log("Eliminado")
        this.getPatitos();
      })
    }
  }

}
