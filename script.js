//your JS code here. If required.
let arr = [1,2,3,4];

function promise1(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			 resolve(arr);
		},3000)
	})
}

function promise2(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let data = arr.filter((e)=> e%2 === 0);
			resolve(data);
			// let output = document.getElementById("output");
			// output.innerContext = data;
		},1000)
	})
}

function promise3(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let ans = data.map((e)=> e*2);
			 resolve(ans);
			// let output = document.getElementById("output");
			// output.innerContext = ans;
		},2000)
	})
}

promise1(arr).then((data)=>{
	console.log(data);
	return promise2(data);
}).then((data)=>{
	console.log(data);
	let output = document.getElementById("output");
			output.textContent = data;
	return promise3(data);
}).then((data)=>{
	let output = document.getElementById("output");
			output.textContent = data;
	console.log(data);
}).catch((err)=>{
	console.log(err);
})