import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  chart = new Chart({
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '<strong>total</strong>',
      align: 'center',
      verticalAlign: 'middle',
      // y: 0,
      x: 0
    },
    // tooltip: {
    //   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: -180,
        center: ['50%', '50%'],
        size: '100%',
        showInLegend: false,
      }
    },
    series: null
    // series: [
    //   {
    //     name: 'Browsers',
    //     data: [
    //       {
    //         name: 'Chrome',
    //         y: 61.41
    //       },
    //       {
    //         name: 'Internet Explorer',
    //         y: 11.84,
    //       }, {
    //         name: 'Firefox',
    //         y: 10.85,
    //       }, {
    //         name: 'Edge',
    //         y: 4.67
    //       }, {
    //         name: 'Safari',
    //         y: 4.18
    //       }],
    //     type: 'pie',
    //     innerSize: '50%',
    //   }]
  });

  ngOnInit() {
    this.chart.addSeries({
      type: 'pie',
      innerSize: '80%',
      name: 'dsadas',
      data: [
        {
          name: 'Chrome',
          y: 61.41
        },
        {
          name: 'Internet Explorer',
          y: 11.84,
        }, {
          name: 'Firefox',
          y: 10.85,
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }],
    }, true, false);
  }
}

