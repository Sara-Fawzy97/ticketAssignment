import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  basicData: any;
  options: any;
  constructor() {}
  @ViewChild('myChart') myChart: ElementRef | undefined;

  
  ngOnInit() {
    this.basicData = {
        labels: [ "ديسمبر","نوفمبر","اكتوبر","سبتمبر","اغسطس",'يوليو','يونيو','مايو', 'ابريل','مارس','فبراير', 'يناير'],
        datasets: [
            {label:' ',
                data: [50, 100, 10, 70, 250, 150, 230,170,172,60,30,150],
                fill: true,
                borderColor: '#8A74F9',
                tension: .5,
                backgroundColor: 'rgba(138, 116, 249,.5)'
            },
          
        ]
    };

    this.options = { 
        legend: {
             display:false,/** the legend doesn't be displayed* */
          
      },

      maintainAspectRatio: false,
      aspectRatio: 0, 
     
       scales: {
        x: {
            ticks: {
                color:'#9291A5'
            },
            grid: {
                color:'transparent',
                drawBorder: false
            }
        },   y: {
          ticks: {
              color: 'transparent'
          },
          grid: {
              color: '#E5E5EF'
          }
      }
     
      } }
      };
      

    }