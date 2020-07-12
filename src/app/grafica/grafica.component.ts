import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {SalesService} from './../services/sales.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  i:number = 0
  datos;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[];
  constructor(private salesService: SalesService) { 

    
  }

  ngOnInit(): void {
    this.getSalesAll();
    let label = [], valor= [];
    this.datos.map((e)=>{
      label.push(e.name);
      valor.push(parseInt(e.sales));
    });
    this.barChartLabels = label;
    this.barChartData = [
      { 
        data: valor, 
        label: "Ventas", 
        backgroundColor: '#6200EE', 
        borderColor: '#3700B3', 
        borderWidth: 3, 
        hoverBackgroundColor:null,
        hoverBorderColor: null,
        
      }
    ]
  }
  getSalesAll(){
    this.salesService.getSales().subscribe(sales =>{
      localStorage.setItem("sales", JSON.stringify(sales));
    })
    this.datos = JSON.parse(localStorage.getItem("sales"));
    setTimeout(()=>{localStorage.removeItem("sales");},100); 
  }

  

}
