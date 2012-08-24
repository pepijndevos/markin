var fuse = false;

function update(ev) {
	console.log(ev);
	switch(ev.charCode || ev.keyCode + 256) {
		case 42: // *
		case 95: // _
			if (fuse) {
				document.execCommand("italic", false, null);
				document.execCommand("bold", false, null);
				fuse = false;
			} else {
				document.execCommand("italic", false, null);
				fuse = true;
			}
			ev.preventDefault()
			break;
		case 62: // >
			document.execCommand("formatBlock", false, "BLOCKQUOTE");
			ev.preventDefault()
			break;
		case 35: // #
			if(fuse) {
				fuse += 1
				document.execCommand("formatBlock", false, "H"+fuse);
			} else {
				document.execCommand("formatBlock", false, "H1");
				fuse = 1
			}
			ev.preventDefault()
			break;
		case 9 + 256: // tab
			document.execCommand("formatBlock", false, "PRE");
			ev.preventDefault()
			break;
		case 45: // -
		case 43: // +
			document.execCommand("insertUnorderedList", false, null);
			ev.preventDefault()
			break;

		default:
			fuse = false;
	}
}

function edit(id) {
	var editor = document.getElementById(id);
	editor.innerHTML = "<p><br/></p>"
	editor.contentEditable = true;
	editor.className += " rmd-on rmd-ul-plus"
	editor.onkeypress = update;
}

