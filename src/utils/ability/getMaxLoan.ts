export const getMaxLoan = (
	revenue: number,
	expanses: number,
	duration: number,
	contribution: number,
) => {
	const monthlyLoanAbility = Math.round(0.33 * revenue) - expanses
	const loanAbility = monthlyLoanAbility * 12 * duration + contribution

	if (monthlyLoanAbility <= 0) {
		return {loanAbility: 0, monthlyLoanAbility: 0}
	}
	return {loanAbility, monthlyLoanAbility}
}
