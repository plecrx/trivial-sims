export const getTotalRevenue = (tax_revenue: number, operation_cost: number) =>
	tax_revenue > operation_cost / 9 ? tax_revenue : operation_cost
