// initialize node coordinates
let x = [], origin = [];
y = new Array(25).fill(0);
for (let i = 0; i < 25; i++) {
  x[i] = i;
  origin[i] = i;
}

let yShape = new Array(25).fill(0);
// input mode shapes for 24-element rod
shape = [
  [0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333,0.083333  ],
  [-0.11785,-0.11684,-0.11384,-0.10888,-0.10206,-0.0935,-0.08333,-0.07174,-0.05893,-0.0451,-0.0305,-0.01538,8.78e-16,0.015383,0.030502,0.0451,0.058926,0.071743,0.083333,0.093498,0.102062,0.10888,0.113835,0.116843,0.117851  ],
  [-0.11785,-0.11384,-0.10206,-0.08333,-0.05893,-0.0305,4.02e-16,0.030502,0.058926,0.083333,0.102062,0.113835,0.117851,0.113835,0.102062,0.083333,0.058926,0.030502,-8.5e-16,-0.0305,-0.05893,-0.08333,-0.10206,-0.11384,-0.11785  ],
  [0.117851,0.10888,0.083333,0.0451,-6.7e-16,-0.0451,-0.08333,-0.10888,-0.11785,-0.10888,-0.08333,-0.0451,9.72e-16,0.0451,0.083333,0.10888,0.117851,0.10888,0.083333,0.0451,-1.3e-16,-0.0451,-0.08333,-0.10888,-0.11785  ],
  [-0.11785,-0.10206,-0.05893,2.73e-16,0.058926,0.102062,0.117851,0.102062,0.058926,6.23e-16,-0.05893,-0.10206,-0.11785,-0.10206,-0.05893,2.19e-16,0.058926,0.102062,0.117851,0.102062,0.058926,-1.3e-16,-0.05893,-0.10206,-0.11785  ],
  [0.117851,0.093498,0.030502,-0.0451,-0.10206,-0.11684,-0.08333,-0.01538,0.058926,0.10888,0.113835,0.071743,-1.3e-16,-0.07174,-0.11384,-0.10888,-0.05893,0.015383,0.083333,0.116843,0.102062,0.0451,-0.0305,-0.0935,-0.11785  ],
  [-0.11785,-0.08333,1.75e-17,0.083333,0.117851,0.083333,-1.3e-16,-0.08333,-0.11785,-0.08333,1.04e-16,0.083333,0.117851,0.083333,-5.4e-16,-0.08333,-0.11785,-0.08333,1.73e-16,0.083333,0.117851,0.083333,-2.2e-16,-0.08333,-0.11785  ],
  [0.117851,0.071743,-0.0305,-0.10888,-0.10206,-0.01538,0.083333,0.116843,0.058926,-0.0451,-0.11384,-0.0935,2.84e-16,0.093498,0.113835,0.0451,-0.05893,-0.11684,-0.08333,0.015383,0.102062,0.10888,0.030502,-0.07174,-0.11785  ],
  [-0.11785,-0.05893,0.058926,0.117851,0.058926,-0.05893,-0.11785,-0.05893,0.058926,0.117851,0.058926,-0.05893,-0.11785,-0.05893,0.058926,0.117851,0.058926,-0.05893,-0.11785,-0.05893,0.058926,0.117851,0.058926,-0.05893,-0.11785  ],
  [0.117851,0.0451,-0.08333,-0.10888,2.1e-16,0.10888,0.083333,-0.0451,-0.11785,-0.0451,0.083333,0.10888,1.23e-16,-0.10888,-0.08333,0.0451,0.117851,0.0451,-0.08333,-0.10888,-5e-17,0.10888,0.083333,-0.0451,-0.11785  ],
  [-0.11785,-0.0305,0.102062,0.083333,-0.05893,-0.11384,4.82e-19,0.113835,0.058926,-0.08333,-0.10206,0.030502,0.117851,0.030502,-0.10206,-0.08333,0.058926,0.113835,-1.5e-16,-0.11384,-0.05893,0.083333,0.102062,-0.0305,-0.11785  ],
  [0.117851,0.015383,-0.11384,-0.0451,0.102062,0.071743,-0.08333,-0.0935,0.058926,0.10888,-0.0305,-0.11684,2.59e-16,0.116843,0.030502,-0.10888,-0.05893,0.093498,0.083333,-0.07174,-0.10206,0.0451,0.113835,-0.01538,-0.11785  ],
  [-0.11785,2.5e-17,0.117851,-2.1e-16,-0.11785,2.63e-16,0.117851,-1.9e-16,-0.11785,2.64e-16,0.117851,-3.1e-16,-0.11785,4.43e-16,0.117851,-3.3e-16,-0.11785,3.05e-16,0.117851,-3.7e-16,-0.11785,2.17e-16,0.117851,-2.1e-17,-0.11785  ],
  [0.117851,-0.01538,-0.11384,0.0451,0.102062,-0.07174,-0.08333,0.093498,0.058926,-0.10888,-0.0305,0.116843,-5.1e-16,-0.11684,0.030502,0.10888,-0.05893,-0.0935,0.083333,0.071743,-0.10206,-0.0451,0.113835,0.015383,-0.11785  ],
  [-0.11785,0.030502,0.102062,-0.08333,-0.05893,0.113835,-1.2e-16,-0.11384,0.058926,0.083333,-0.10206,-0.0305,0.117851,-0.0305,-0.10206,0.083333,0.058926,-0.11384,7.39e-17,0.113835,-0.05893,-0.08333,0.102062,0.030502,-0.11785  ],
  [0.117851,-0.0451,-0.08333,0.10888,-1.1e-16,-0.10888,0.083333,0.0451,-0.11785,0.0451,0.083333,-0.10888,2.3e-16,0.10888,-0.08333,-0.0451,0.117851,-0.0451,-0.08333,0.10888,-2.8e-16,-0.10888,0.083333,0.0451,-0.11785  ],
  [-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785,0.058926,0.058926,-0.11785  ],
  [0.117851,-0.07174,-0.0305,0.10888,-0.10206,0.015383,0.083333,-0.11684,0.058926,0.0451,-0.11384,0.093498,2.75e-16,-0.0935,0.113835,-0.0451,-0.05893,0.116843,-0.08333,-0.01538,0.102062,-0.10888,0.030502,0.071743,-0.11785  ],
  [0.117851,-0.08333,3.48e-17,0.083333,-0.11785,0.083333,1.12e-16,-0.08333,0.117851,-0.08333,-2.1e-16,0.083333,-0.11785,0.083333,8.56e-17,-0.08333,0.117851,-0.08333,2.06e-16,0.083333,-0.11785,0.083333,1.25e-17,-0.08333,0.117851  ],
  [0.117851,-0.0935,0.030502,0.0451,-0.10206,0.116843,-0.08333,0.015383,0.058926,-0.10888,0.113835,-0.07174,-3.2e-16,0.071743,-0.11384,0.10888,-0.05893,-0.01538,0.083333,-0.11684,0.102062,-0.0451,-0.0305,0.093498,-0.11785  ],
  [-0.11785,0.102062,-0.05893,-5e-16,0.058926,-0.10206,0.117851,-0.10206,0.058926,5.67e-16,-0.05893,0.102062,-0.11785,0.102062,-0.05893,-2.7e-16,0.058926,-0.10206,0.117851,-0.10206,0.058926,-2.1e-16,-0.05893,0.102062,-0.11785  ],
  [0.117851,-0.10888,0.083333,-0.0451,-3e-16,0.0451,-0.08333,0.10888,-0.11785,0.10888,-0.08333,0.0451,-3.7e-17,-0.0451,0.083333,-0.10888,0.117851,-0.10888,0.083333,-0.0451,6.06e-17,0.0451,-0.08333,0.10888,-0.11785  ],
  [0.117851,-0.11384,0.102062,-0.08333,0.058926,-0.0305,1.38e-15,0.030502,-0.05893,0.083333,-0.10206,0.113835,-0.11785,0.113835,-0.10206,0.083333,-0.05893,0.030502,-8.9e-16,-0.0305,0.058926,-0.08333,0.102062,-0.11384,0.117851  ],
  [0.117851,-0.11684,0.113835,-0.10888,0.102062,-0.0935,0.083333,-0.07174,0.058926,-0.0451,0.030502,-0.01538,6.98e-15,0.015383,-0.0305,0.0451,-0.05893,0.071743,-0.08333,0.093498,-0.10206,0.10888,-0.11384,0.116843,-0.11785  ],
  [-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333,0.083333,-0.08333  ]
];

// set color gradient
let colors= [];
for(i=0;i<25;i++){
  // colors.push('rgb('+(i*10).toString()+','+(266-(i*5)).toString()+',170)')
  colors.push(3*i)
}
// plot nodes with color gradient
var nodePlot = {
  x: x,
  y: y,
  type: 'scatter',
  mode: 'markers',
  marker: {
    color: colors,
    size: 10
  },
  connectgaps: true
};
// graph layout
var layout = {
  xaxis: {
  range: [-5, 30],
  showgrid: true,
  zeroline: true,
  showline: false,
  autotick: true,
  ticks: '',
  showticklabels: false
},
yaxis: {
  autorange: true,
  showgrid: true,
  zeroline: false,
  showline: false,
  autotick: true,
  ticks: '',
  showticklabels: false
},
    showlegend:false
}
var data = [nodePlot];

// adding line plots for elements with color gradient
let xSegment = new Array(24), trace = new Array(24);
for (let i = 0; i < 24; i++) {
  xSegment[i] = new Array(2);
  xSegment[i][0] = x[i];
  xSegment[i][1] = x[i+1];
  trace[i] = {
    x: xSegment[i],
    y: [0,0],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: i*5,
      width: 4
    }
  };
  data.push(trace[i]);
}




Plotly.plot('graphRod', data, layout); // initial plot

dt = 0.0001; t = 0; n = 5;

$('.start.button').on('click',()=>{
  $('.start.button').addClass('active');}).on('click',() =>{
  $('.pause.button').removeClass('active');})

$('.pause.button').on('click',()=>{
  $('.pause.button').addClass('active');}).on('click',() =>{
  $('.start.button').removeClass('active');})

$('.start.button').on('click',begin_animation)

$('.reset.button').on('click',function(){
  for (let i = 0; i < 25; i++) {
  x[i] = i;
}}) // remember to add pause function to reset button !!

let anim;

function begin_animation(){
  function shakeAnime (){
    //html change bit
    let elementNumber = $("#element").val();
    $("#elementDisplay").html(elementNumber);

    let mode = $("#modeIndex").val();
    $("#ModeDisplay").html(mode);

    let mag = $('#displacementMag').val();
    $("#dispMag").html(mag);

    let new_max = parseFloat($('input#element').val())+1;
    $('input#modeIndex').attr('max',new_max)
    $('#sliderMax').html(new_max)

    function computeNode () {
      for (let i = 0; i < 25; i++) {
        t = t + dt;
        x[i] = x[i]+shape[mode-1][i] * Math.sin(108*t) * mag;
        y[i] = shape[mode-1][i] * Math.sin(108*t);
        // yShape[i] = shape[mode-1][i] * Math.sin(108*t);
      }
    };

    var newNodePlot = {
      x: origin,
      y: y,
      type: 'scatter',
      mode: 'markers+lines',
      marker: {
        color: colors,
        size: 10
        // lines: {
        //   color: 'rgb(0,0,0)'
        // }
      },
      connectgaps: true
    };

    data = [newNodePlot];

    function computeSegment () {
      for (let i = 0; i < 24; i++) {
        xSegment[i] = new Array(2);
        xSegment[i][0] = x[i];
        xSegment[i][1] = x[i+1];
        trace[i] = {
          x: xSegment[i],
          y: [0,0],
          type: 'scatter',
          mode: 'lines',
          line: {
            color: i*5,
            width: 4
          }
        };
        data.push(trace[i]);
      }
    }

    // yTrace = {
    //   x: origin,
    //   y: yTrace,
    //   type: 'scatter',
    //   mode: 'lines',
    // }
    // data.push(yTrace);

    computeNode();
    computeSegment();
    Plotly.animate('graphRod',{data: data},
      { transition: {duration: 0},
        frame: {
          duration: 10,
          redraw: false
        }
      }
    );
    return;
  }

  if ($(this).html().toString()=="Start"){
    anim= setInterval(shakeAnime,10);
    $(this).text("Pause")
  }else {
        clearInterval(anim);
        $(this).text("Start")
    };
}

$(document).ready(function(){
  $("#dispMag").hide();
});

$(document).ready(function(){
  $(".show.button").click(function(){
    $("#modePlot").toggle();
  });
});

$("#elementDisplay").hover(function(){
  alert("select the number of element you want for the rod analysis")
},
function(){
});