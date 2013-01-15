#pragma strict

var kinectSpeed:float = 10;
function Start () {

}

function Update () {
	 
	   
}
function OnTriggerStay (other : Collider) {
    print("collide!");
    SendMessageUpwards ("MoveKinect", kinectSpeed);
    //transform.Translate(Vector3.forward * Time.deltaTime);
}