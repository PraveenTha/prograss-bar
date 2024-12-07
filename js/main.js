$(document).ready(function () {
  const steps = $('.step-labels li').length;
  let currentStep = 0;

  function updateProgress() {
    const progress = (currentStep / (steps - 1)) * 100;
    $('.progress').css('width', `${progress}%`);
    $('.marker').css('left', `calc(${progress}% - 10px)`);

    $('.step-labels li').removeClass('active');
    $('.step-labels li').eq(currentStep).addClass('active');

    $('#prev').prop('disabled', currentStep === 0);
    $('#next').prop('disabled', currentStep === steps - 1);
  }

  $('#next').click(function () {
    if (currentStep < steps - 1) {
      currentStep++;
      updateProgress();
    }
  });

  $('#prev').click(function () {
    if (currentStep > 0) {
      currentStep--;
      updateProgress();
    }
  });

  updateProgress();
});
