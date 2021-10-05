function KeyPressed() {
  if (keyWentDown(' ')) { // SPACE
    player.AddState('JumpState');
  }
  if (keyWentDown(65)) { // A
    player.AddState('MoveLeftState');
  }
  if (keyWentDown(68)) { // D
    player.AddState('MoveRightState');
  }
}

function keyReleased() {
  switch (key) {
    case ' ':
      player.RemoveState('JumpState');
      break;
    case 'A':
    case 'a':
      player.RemoveState('MoveLeftState');
      break;
    case 'D':
    case 'd':
      player.RemoveState('MoveRightState');
      break;
  }
}