let index = {
	init: function() {
		const btn = document.querySelector("#btn-save");
		
		if(btn != null){
			btn.addEventListener("click", (event) => { // function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.save();
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
	}
}

index.init();