function clearLocalHistory(e) {
	if (confirm('Would you like to delete your data points?')) {
		localStorage.clear();
		console.log(localStorage);
		e.target.textContent = 'Cleared';
	}
}

export default clearLocalHistory;
