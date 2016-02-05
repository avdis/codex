$ = require('jquery');
require('test/utility/testUrl');
var feedbackQueueFactory = require('feedbackQueue');
var carouselFactory = require('carousel');
var dialogueFactory = require('dialogue');
var spinnerFactory = require('spinner');
var url = require('utility/url');
var dialogue1 = new dialogueFactory();
var dialogue2 = new dialogueFactory();
var dialogue3 = new dialogueFactory();
var dialogue4 = new dialogueFactory();
var dialogue5 = new dialogueFactory();
var spinner1 = new spinnerFactory();

$('.rainbow-pre').on('click', function() {
  $(this).select();
  console.log('value');
});

// masked
$('.js-dialogue-1').on('click', function() {
  dialogue1.create({
    mask: true,
    className: 'dialogue-1',
    width: 200,
    title: 'Masked',
    description: 'Positioned to the window and fixed, this masks the current window.',
    actions: [
      {name: 'Cancel', action: function() {
        console.log('Cancel');
      }},
      {name: 'Ok', action: function() {
        console.log('Ok');
      }}
    ],
    onComplete: function() {
      console.log('dialogue.onComplete');
    },
    onClose: function() {
      console.log('dialogue.onClose');
    }
  });
});

// positioned
$('.js-dialogue-2').on('click', function() {
  dialogue2.create({
    className: 'dialogue-2',
    positionTo: '.js-dialogue-2',
    width: 200,
    title: 'Positioned',
    description: 'This dialogue is positioned to the selector \'.js-dialogue-2\'.',
    actions: [
      {name: 'Ok', action: function() {
        dialogue2.close(dialogue2);
      }}
    ]
  });
});

// well-hard only closable via action or cross
$('.js-dialogue-3').on('click', function() {
  dialogue3.create({
    hardClose: true,
    className: 'dialogue-3',
    width: 250,
    title: 'Well Hard To Close',
    description: 'Harder than usual to close.',
    actions: [
      {name: 'Close', action: function() {
        dialogue3.close(dialogue3);
      }}
    ]
  });
});

// edge case testing
$('.js-dialogue-4').on('click', function() {
  dialogue4.create({
    hardClose: true,
    mask: true,
    width: 550,
    title: 'Create Shipment',
    html: '<p></p>'
  });
});

// ajax
$('.js-dialogue-5').on('click', function() {
  dialogue5.create({
    mask: true,
    width: 250,
    ajaxConfig: {
      type: 'get',
      url: url.getBase('asset/common.css'),
      dataType: 'text',
      data: {},
      success: function(response) {
        $('.js-dialogue-html').html(response);
        console.log('dialogue5 success', response);
      },
      error: function(response) {
        console.log('dialogue5 error', response);
      }
    }
  });
});

// auto width scrollable
$('.js-dialogue-6').on('click', function() {
  dialogue5.create({
    mask: true,
    title: '6',
    description: 'auto width and scrollable'
  });
});

// feedback queue
var feedbackQueue = new feedbackQueueFactory({
  templateContainer: $('#mst-feedback').html(),
  templateSingle: $('#mst-feedback-single').html()
});
$('.js-feedback-queue-1').on('click', function() {
  feedbackQueue.createMessage({message: 'test 1'});
});
$('.js-feedback-queue-2').on('click', function() {
  feedbackQueue.createMessage({type: 'success', message: 'test 2'});
});
$('.js-feedback-queue-3').on('click', function() {
  feedbackQueue.createMessage({type: 'fail', message: 'test 3'});
});




window.carousel = new carouselFactory();