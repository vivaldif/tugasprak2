var username = [];
var password = [];

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKonfirmasi = document.querySelector("#konfirmasi");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	const valueInputUsername = inputUsername.value;
	const valueInputPassword = inputPassword.value;
	const valueInputKonfirmasi = inputKonfirmasi.value;
	console.log(valueInputUsername);
	console.log(valueInputPassword);
	console.log(valueInputKonfirmasi);
	
	let flag = 0;
	if(valueInputPassword === valueInputKonfirmasi){
		flag = 1;	
	}	
	
	const warningMsg = document.querySelector(".warning");
	
	if(flag === 0){
		warningMsg.className = "text-danger"
	}else{
		alert("Akun Berhasil di Registrasi");
	}
})