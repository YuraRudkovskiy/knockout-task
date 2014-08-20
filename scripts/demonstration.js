(function(){
	"use strict"

	var files, places = ko.observableArray(),
		availableLiterature = [
			{index : 1, title: "О компании QAP INT", link:"", src:"assets/images/pdf-icon.gif" },
			{index : 2, title: "Преимущества использования CLM-инструмента для Вашего бизнеса", link:"", src:"assets/images/pdf-icon.gif"},
			{index : 3, title: "Перспективы сотрудничества с QAP INT", link:"", src:"assets/images/pdf-icon.gif"},
			{index : 4, title: "Описание решения для разработки HTML5-презентаций", link:"", src:"assets/images/pdf-icon.gif"},
			{index : 5, title: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)", link:"", src:"assets/images/pdf-icon.gif"},
			{index : 6, title: "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)", link:"", src:"assets/images/pdf-icon.gif"}
   		];

   	function actChecked(){
		this.isChecked ? places.push(this) : places.remove(this);
		return true;
	}

   	availableLiterature.forEach(function(literature){
		literature.actChecked = actChecked;
		literature.isChecked = false;
	});

   	files = ko.observableArray(availableLiterature);

	function sendMessage(){
		this.activate('activate');
	}

	function closePopup(){
		this.activate('');
	}

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