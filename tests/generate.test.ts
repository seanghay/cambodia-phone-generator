import { expect, describe, it } from "vitest";
import { generateByOperator, generateByPrefix } from "../src/main";
import { parsePhoneNumber, prefixInfo } from 'network-operators'

describe("generate", () => {
	
  it("should return a random phone number", () => {
		const phone = generateByOperator();
    const result = parsePhoneNumber(phone);
    const info = prefixInfo(result!.prefix);
    expect(phone).toBeTypeOf("string");
    expect(result).toBeTruthy()
    expect(info.operator).toBeTruthy()
  });

  it("should return a random phone number of an operator", () => {
		const phone = generateByOperator('Smart');
    const result = parsePhoneNumber(phone);
    const info = prefixInfo(result!.prefix);
    expect(phone).toBeTypeOf("string");
    expect(result).toBeTruthy()
    expect(info.operator).toBe('Smart')
  });


  it("should return a random phone number of a prefix", () => {
		const phone = generateByPrefix('010');
    const result = parsePhoneNumber(phone);
    const info = prefixInfo(result!.prefix);
    expect(phone).toBeTypeOf("string");
    expect(result).toBeTruthy()
    expect(result!.prefix).toBe('010')
    expect(info.operator).toBe('Smart')
  });
  

});
