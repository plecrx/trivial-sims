export const getObjectFromArray = (
	arr: Array<any>,
	key: string,
	value: string,
) => arr.reduce((obj, _a) => Object.assign(obj, {[_a[key]]: _a[value]}), {})
