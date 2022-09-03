import {
	NetworkOperator,
	PhoneNumberPrefix,
	PhoneNumberPrefixesWithOperators,
	type PhoneNumberPrefixDefinition,
	prefixInfo,
} from "network-operators";

function _sample<T>(array: T[]): T {
	const l = array.length;
	return array[Math.floor(Math.random() * l) % l];
}

function _generateNumber(length: number) {
	let result = "";
	const characters = "0123456789";
	const charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function generate(prefix: string, info: PhoneNumberPrefixDefinition) {
	let { length } = info;
	if (Array.isArray(length)) length = _sample(length);
	const number = _generateNumber(length as number);
	return `${prefix}${number}`;
}

/**
 * Create a random phone number from a prefix.
 * @param prefix phone number prefix to be generated from
 * @returns a valid random phone number.
 */
export function generateByPrefix(prefix: PhoneNumberPrefix) {
	return generate(prefix, prefixInfo(prefix));
}

/**
 * Create a random number phone based on network operator if provided.
 * @param operator optional network operator name.
 * @returns a valid random phone number.
 */
export function generateByOperator(operator?: NetworkOperator) {
	let entries = Object.entries(PhoneNumberPrefixesWithOperators);
	if (typeof operator === "string") {
		entries = entries.filter(([key, value]) => value.operator === operator);
	}
	const [prefix, info] = _sample(entries);
	return generate(prefix as PhoneNumberPrefix, info);
}
