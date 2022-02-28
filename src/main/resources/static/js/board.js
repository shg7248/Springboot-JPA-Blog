let index = {
	init: function() {
		const save_btn = document.querySelector("#btn-save");
		const delete_btn = document.querySelector("#btn-delete");
		const update_btn = document.querySelector("#btn-update");
		
		if(save_btn != null){
			save_btn.addEventListener("click", (event) => { // function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.save();
			});
		}
		if(delete_btn != null){
			delete_btn.addEventListener("click", (event) => {
				this.deleteById();
			});
		}
		if(update_btn != null){
			update_btn.addEventListener("click", (event) => {
				this.update();
			});
		}
	},
	save: async () => {
		let data = {
				title: 	document.querySelector("#title").value,
				content: 		document.querySelector("#content").value
		};
		
		await fetch('http://localhost:8000/api/board', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(commits => {
			alert("글쓰기가 완료되었습니다.");
			location.href="/";
		})
	},
	deleteById: async () => {
		
		const id = document.querySelector("#id").firstElementChild.innerHTML;

		await fetch('http://localhost:8000/api/board/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		})
		.then(response => response.json())
		.then(commits => {
			alert("삭제가 완료되었습니다.");
			location.href="/";
		})		
	},
	update: async () => {
		
		let id = document.querySelector("#id").value;
		
		let data = {
				title: 		document.querySelector("#title").value,
				content: 	document.querySelector("#content").value,
		};

		await fetch('http://localhost:8000/api/board/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(commits => {
			alert("글 수정이 완료되었습니다.");
			location.href="/";
		})		
	}
}

index.init();