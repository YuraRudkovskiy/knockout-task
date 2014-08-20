(function(){
	"use strict"

	var files = ko.observableArray(),
   		places = ko.observableArray(),
		availableLiterature = [
			{ title: "О компании QAP INT", link:"", src:"assets/images/pdf-icon.gif" },
			{ title: "Преимущества использования CLM-инструмента для Вашего бизнеса", link:"", src:"assets/images/pdf-icon.gif"},
			{ title: "Перспективы сотрудничества с QAP INT", link:"", src:"assets/images/pdf-icon.gif"},
			{ title: "Описание решения для разработки HTML5-презентаций", link:"", src:"assets/images/pdf-icon.gif"},
			{ title: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)", link:"", src:"assets/images/pdf-icon.gif"},
			{ title: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)", link:"", src:"assets/images/pdf-icon.gif"}
   		];

	function actChecked(){
		this.isChecked ? places.push(this) : places.remove(this);
		return true;
	}

	function sendMessage(){
		this.activate('activate');
	}

	function closePopup(){
		this.activate('');
	}

	files = ko.observableArray((function(){
		var notes = [];
		availableLiterature.forEach(function(literature, index){
			notes.push({
				index : index,
				isChecked : false,
				literature : literature.title,
				src : literature.src,
				actChecked : actChecked
			});
		});
		return notes;
	})());

	ko.applyBindings({
		files : files,
		places : places,
		sendMessage : sendMessage,
		closePopup : closePopup,
		activate : ko.observable(),
		email : ko.observable(),
   		text : ko.observable(),
   		textarea : ko.observable(),
   		h1_1 : "Легкое использование существующих электронных документов (инструкций)",
   		h2_1 : "Список литературы:",
   		h2_2 : "Отправка письма",
   		dt_1 : "Email:",
   		dt_2 : "Тема:",
   		dt_3 : "Текст сообщения:",
   		dt_4 : "Прикрепленные файлы:",
   		button_1: "Close"
	});

})();