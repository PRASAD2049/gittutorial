$(document).ready(function() {
			
    var delhi_val = parseInt($('.delhi').text());
    var mumbai_val = parseInt($('.mumbai').text());
    var bengalur_val = parseInt($('.bengalur').text());
    var chennai_val = parseInt($('.chennai').text());
    var others_val = parseInt($('.others').text());
    
    
    var delhi_label = $('.delhi-label').text()
    var mumbai_label = $('.mumbai-label').text()
    var bengalur_label = $('.bengalur-label').text()
    var chennai_label = $('.chennai-label').text()
    var others_label = $('.others-label').text()


// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'column',
  },
  title: {
    text: null
  },
    credits: {
        enabled: false
    },
  xAxis: {
       lineWidth: 0,
   minorGridLineWidth: 0,
   lineColor: 'transparent',
      minorTickLength: 0,
   tickLength: 0,
    type: 'category',
      labels: {
          rotation:'0',
         style: {
            color: '#343434',
            'font-family': "'Lato', sans-serif",
             'font-size':'13px',
             'font-weight':700,
         }
      },
      
  },
  yAxis: {
      
      gridLineColor:'rgba(225, 222, 213, 0.3)',
      tickInterval: 5,
      labels: {
          format: '{value}%',
         style: {
            color: '#343434',
           'font-family': "'Lato', sans-serif",
             'font-size':'13px',
             'font-weight':700
         }
      },
    title: {
      text: null
    }

  },
  legend: {
    enabled: false,
      symbolRadius: 0
  },
  plotOptions: {
    series: {
        pointWidth: 20,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y}%',
          color:'#343434',
           
          style: {
              
              fontFamily: "'Lato', sans-serif",
              fontSize:'13px',
                    fontWeight: 700
                }
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  "series": [
    {
      "name": ' ',
      "colorByPoint": false ,
        color: '#d5266a',
      "data": [
       {
          "name": "20",
          "y": delhi_val,
            color: {
                      linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                      },
                    stops: [[0, '#ec4ea3'],[1, '#d5266a']]
        }
        },
        {
          "name": "16-20",
          "y": mumbai_val,
           color: {
                      linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                      },
                    stops: [[0, '#f3b2d1'],[1, '#e47ba4']]
        }
         
        },
        {
          "name": "11-15",
          "y": bengalur_val,
           color: {
                      linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                      },
                    stops: [[0, '#38c1df'],[1, '#1a8dbb']]
        }
        },
        {
          "name": "6-10",
          "y": chennai_val,
           color: {
                      linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                      },
                    stops: [[0, '#acddec'],[1, '#74b9d4']]
        }
        },
        {
          "name": "0-5",
          "y": others_val,
            color: {
                      linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                      },
                    stops: [[0, '#c2b7cf'],[1, '#8f81a1']]
        }
        }
          
          
      
      ]
    },
      
 
      
  ],
 
});
				
			});