self.addEventListener("message",onMessageReceived);
function onMessageReceived(msgArg){
	var data = msgArg.data;
	findPrimes(data.start,data.end);
}
function findPrimes(start,end){
	var primeCount = 0;
	for(var i=start;i<=end;i++){
		var percentCompleted = ((i-start)/(end-start)) * 100;
		if (isPrime(i)) primeCount++;
		self.postMessage({
			percentCompleted : percentCompleted,
			primeCount : primeCount
		});
	}
	
}
function isPrime(n){
	if (n<=3) return true;
	for(var i=2;i<=(n/2);i++)
		if (n % i == 0) return false;
	return true;
}