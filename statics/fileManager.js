class FileManager {

	static fileReader = new FileReader();
	
	static readTextFile(file) {
		let rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					alert(allText);
				}
			}
		}
		rawFile.send(null);
	}

	static loadOBJFile(filePath) {

		return new Mesh();
	} 
}