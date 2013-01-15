var width: int;
var height: int;
var brushWidth: int;
var brushHeight: int;
var brushColor: Color;

var prefab : Transform;

private var transTex: Texture2D;
private var brush: Color[];



function Start() {
	transTex = new Texture2D(width, height);
	renderer.material.mainTexture = transTex;
	Clear(transTex, Color.clear);
	
	brush = new Color[brushWidth * brushHeight];
	
	for (i = 0; i < brush.Length; i++) {
		brush[i] = brushColor;
	}
}



private var oldX: int;
private var oldY: int;

function Update () {
	var hit: RaycastHit;
	
	var camRay: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	
	if (Physics.Raycast(camRay, hit) && Input.GetMouseButton(0)) {
		var x: int = hit.point.x * width;
		var y: int = hit.point.y * height;
		
		if ((x != oldX) || (y != oldY)) {
			//transTex.SetPixels(x, y, brushWidth, brushHeight, brush);
			Instantiate (prefab, Vector3(x, y, 26), Quaternion.identity);
			//transTex.Apply();
			oldX = x;
			oldY = y;
		}
	}
}


	
function Clear(tex: Texture2D, clearCol: Color) {
	var col: Color[] = new Color[tex.width * tex.height];
	
	for (i = 0; i < col.Length; i++) {
		col[i] = clearCol;
	}
	
	tex.SetPixels(col);
	tex.Apply();
}
