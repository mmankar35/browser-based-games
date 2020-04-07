#pragma strict

private var isJumping: boolean;
private var playerObject: GameObject;
private var player:Player;
function Start () {
	isJumping = false;
	playerObject = GameObject.Find("player");
	player = playerObject.GetComponent("Player") as Player;
}

function Update () {
	if (Time.timeScale > 0) {
		if (Input.GetKeyDown ("space") || Input.GetMouseButtonDown(0)) {
			if (Input.mousePosition.x < 580 || Input.mousePosition.y < 420) { // if we are not clicking on pause...
				if (!isJumping) {
		        	player.triggerJump();
		        }
		        isJumping = true;
			}
		}
		if (Input.GetKeyUp ("space") || Input.GetMouseButtonUp(0)) {
			if (isJumping) {
	        	player.triggerStopJump();
	        }
	        isJumping = false;
		}
		
		if (Input.GetKeyUp ("s") || Input.GetMouseButtonUp(1)) {
			player.triggerSlowDown();
		}
	}
}