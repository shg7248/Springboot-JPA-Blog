let index = {
	init: function() {
		const btn = document.querySelector("#btn-save");
		const btn2 = document.querySelector("#btn-update");
		
		if(btn != null){
			btn.addEventListener("click", (event) => { // function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.save();
			});
		}
		if(btn2 != null){
			btn2.addEventListener("click", (event) => { // function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.update();
			});
		}
	},
	save: async () => {
		let data = {
				username: 	document.querySelector("#username").value,
				email: 		document.querySelector("#email").value,
				password: 	document.querySelector("#password").value
		};
		
		await fetch('http://localhost:8000/auth/joinProc', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(commits => {
			console.log(commits);
			alert("회원가입이 완료되었습니다.");
			location.href="/";
		})
	},
	update: async () => {
		
		let data = {
				id: 		document.querySelector("#id").value,
				username:  document.querySelector("#username").value,
				email: 		document.querySelector("#email").value,
				password: 	document.querySelector("#password").value
		};
		
		await fetch('http://localhost:8000/user/', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(commits => {
			console.log(commits);
			alert("회원정보 수정이 완료되었습니다.");
			location.href="/";
		})
	}
}

index.init();