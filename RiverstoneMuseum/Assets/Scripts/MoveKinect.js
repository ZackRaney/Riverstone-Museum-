#pragma strict


function Start () {

}

function Update () {

}

function MoveKinect (movespeed:float) {
	//transform.Translate(0, 0, movespeed);
	transform.Translate(Vector3.forward * Time.deltaTime * movespeed);
}