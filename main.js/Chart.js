const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20', '25', '30', '35', '40', '60', '65'],
    datasets: [{
      label: '....',
      data: [20, 25, 30, 35, 40, 60, 65],
      backgroundColor: 'blue', // Set background color for bars
      barThickness: 60, // Set the thickness of the bars
      maxBarThickness: 80,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      
      y: {
        beginAtZero: true,
        min: 0,
        max: 300,
        ticks: {
          callback: function (value, index, values) {
            return '$' + value;
          },
          stepSize: 100  
        }
      }
    }
  }
});