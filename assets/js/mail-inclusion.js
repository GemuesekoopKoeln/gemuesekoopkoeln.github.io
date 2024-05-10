(function(){
	const address = "aW5mbw==";
	const connector = "QA==";
	const domain = "Z2VtdWVzZWtvb3AuZGU=";
	function addEvent(el){
		const endpoint = atob(address) + atob(connector) + atob(domain);
		el.addEventListener('click', () => window.location.assign("mailto:"+endpoint));
	}
	for (const e of document.querySelectorAll("a.mail")){
		addEvent(e);
	}
})();