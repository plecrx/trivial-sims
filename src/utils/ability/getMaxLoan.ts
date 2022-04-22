export const getMaxLoan = (
	revenue: number,
	expanses: number,
	duration: number,
	contribution: number = 0,
) => {
	const monthlyLoanAbility = (revenue * 33) / 100 - expanses
	const loanAbility = monthlyLoanAbility * 12 * duration - contribution

	return {loanAbility, monthlyLoanAbility}
}
