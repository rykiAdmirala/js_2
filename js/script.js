var createDoc = {
	makeWrapper : function() {
		var wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
		document.body.appendChild(wrapper);
	},
	makeHeading : function() {
		var heading = document.createElement('div');
		heading.classList.add('heading');
		heading.innerHTML = 'Тест по программированию';
		document.querySelector('.wrapper').appendChild(heading);
	},
	makeList : function() {
		var list = document.createElement('ol');
		list.classList.add('list');
		document.querySelector('.wrapper').appendChild(list);
		for (var i = 1; i <= 3; i++) {
			var listItem = document.createElement('li');
			listItem.innerHTML = 'Вопрос №<span class="list-item-order"></span>';
			listItem.querySelector('.list-item-order').innerHTML = i;
			list.appendChild(listItem);
			var childList = document.createElement('ul');
			childList.classList.add('child-list');
			listItem.appendChild(childList);
			for (var j = 1; j <= 3; j++) {
				var childListItem = document.createElement('li');
				childListItem.innerHTML = '<label><input type="checkbox">Вариант ответа №<span class="child-list-item-order"></span><label>';
				childListItem.querySelector('.child-list-item-order').innerHTML = j;
				childList.appendChild(childListItem);
			};
		}
	},
	makeBtn : function() {
		var btn = document.createElement('div');
		btn.classList.add('submit-btn');
		btn.innerHTML = 'Проверить мои результаты';
		document.querySelector('.wrapper').appendChild(btn);
	}

}
createDoc.makeWrapper();
createDoc.makeHeading();
createDoc.makeList();
createDoc.makeBtn();