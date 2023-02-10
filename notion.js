// // function halfNumber(value) {
// // 	return value / 2;
// // }

// // // console.log(halfNumber(100));

// // function halfAddNumber(value) {
// // 	let result = halfNumber(value);
// // 	return result + 1;
// // }

// // console.log(halfAddNumber(100));

// // index.js

// // Assignment. 아래에 코드를 작성해주세요.
// // `${year}` 백틱 사용해주세요.

// // function meetAt(year, month, date) {
// // if(year){

// // }else if(year,month){

// // }else if(year,month,date){

// // }
// // }
// // function meetAt(y, m, d) {
// // 	if ((y, m, d)) {
// // 		//인자 3개가 다들어 올수 있으로 3개가 다 올경우!
// // 		return y + "/" + m + "/" + d;
// // 	} else if ((y, m)) {
// // 		// 인자 세개가 아니면 2개 갖고 하기
// // 		return y + "년 " + m + "월";
// // 	} else if (y) {
// // 		return y + "년";
// // 	}
// // }

// // let result = console.log(meetAt(2022, 12, 3));
// function getTax(price) {
// 	return price * 0.1;
// }

// // const result = getTax(24000);
// // console.log(result);

// let result = console.log(getTax(24000));
// // function calculateTotal(price) {
// // 	return price + getTax(price);
// // }

// // const result = calculateTotal(3500);
// // console.log(result);
// function getTax(price) {
// 	return price * 0.1;
// }

// function calculateTotal(price) {
// 	//상품의 가격에 tax를 더한 값을 구하는 함수입니다.
// 	return price + getTax(price);
// }

// function getTotal(price) {
// 	let result = calculateTotal(23000);
// 	console.log(result);
// }

// // let result = console.log(calculateTotal(10000));

// function getTotal(p1, p2) {
// 	return calculateTotal(p1) + calculateTotal(p2);
// }
// let result = calculateTotal(3000) + calculateTotal(4000);
// console.log(result);
function getTax(price) {
	return price * 0.1;
}

function calculateTotal(price) {
	return price + getTax(price);
}

// let result = calculateTotal(3500);
// // console.log(result);

//assignment
function getTotal(price1, price2) {
	return calculateTotal(price1) + calculateTotal(price2);
}
// let result = getTotal(2000, 200);
// console.log(result);
let result = console.log(getTotal(2000, 200));
