// ====== VARIABLES ====== //
// Start Button
const $start = $('#start_btn');

// Navbar - Timer
const $nav_right_side = $('#nav_right_side');
const $nav_left_side = $('#nav_left_side');
const $timer = $('#timer');

// Navbar Buttons
const $instructions = $('#instructions');
const $play = $('#play');
const $pause = $('#pause');
const $fast_forward = $('#fast_forward');
const $reset = $('#reset');

// Tower Buttons
const $tower_buttons = $('#tower_buttons');
const $tower1 = $('#tower_1');
const $tower2 = $('#tower_2');
const $tower3 = $('#tower_3');
const $tower4 = $('#tower_4');
const $tower5 = $('#tower_5');

// Event Listeners
$start.on('click', () => {
  $start.addClass('is-hidden');
  $nav_right_side.removeClass('is-hidden');
  $nav_left_side.removeClass('is-hidden');
  $timer.removeClass('is-hidden');
  $tower_buttons.removeClass('is-hidden');
});

$reset.on('click', () => {
  $start.removeClass('is-hidden');
  $nav_right_side.addClass('is-hidden');
  $nav_left_side.addClass('is-hidden');
  $timer.addClass('is-hidden');
  $tower_buttons.addClass('is-hidden');
});

