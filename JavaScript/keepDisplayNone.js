function fnKeepWatch(id, propVal)
	{
		var obj = idExists(id);
		if(obj)
		{
			try
			{	//For Chrome
				var element = document.getElementById(id), bubbles = false;

				var observer = new WebKitMutationObserver(function (mutations) {
				  mutations.forEach(attrModified);
				});
				observer.observe(element, { attributes: true, subtree: bubbles });

				function attrModified(mutation) {
					var name = mutation.attributeName,
						newValue = mutation.target.getAttribute(name),
						oldValue = mutation.oldValue;

					//console.log(name, newValue, oldValue);
					if (name === 'style'){// && oldValue.indexOf(propVal) != -1) {
						//console.log('prevValue: ' + oldValue, 'newValue: ' + newValue);
						document.getElementById(id).style.display = 'none';
					}
				}
			}
			catch(e){alert(e.name+" "+e.message);}
			
			try{	//For other than Chrome
				document.getElementById(id).addEventListener('DOMAttrModified', function(e){
				  if (e.attrName === 'style' && e.prevValue.indexOf(propVal) != -1) {
					//console.log('prevValue: ' + e.prevValue, 'newValue: ' + e.newValue);
					document.getElementById(id).style.display = 'none';
				  }
				}, false);
			}
			catch(e){alert(e.name+" "+e.message);}
		}
	}
	
	fnKeepWatch('div_id','display: none;');
