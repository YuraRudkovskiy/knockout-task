(function(){
	"use strict"

	var files = ko.observableArray(),
   		places = ko.observableArray(),
   		activate = ko.observable(),
   		email = ko.observable(),
   		text = ko.observable(),
   		textarea = ko.observable(),
		availableLiterature = [
			{ literatureTitle: "О компании QAP INT", link:"" },
			{ literatureTitle: "Преимущества использования CLM-инструмента для Вашего бизнеса", link:"" },
			{ literatureTitle: "Перспективы сотрудничества с QAP INT", link:"" },
			{ literatureTitle: "Описание решения для разработки HTML5-презентаций", link:"" },
			{ literatureTitle: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)", link:"" },
			{ literatureTitle: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)", link:"" }
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
				literature : literature.literatureTitle,
				actChecked : actChecked
			});
		});
		return notes;
	})());

	ko.applyBindings({
		activate : activate,
		sendMessage : sendMessage,
		closePopup : closePopup,	
		files : files,
		places : places,
		email : email,
   		text : text,
   		textarea : textarea,
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