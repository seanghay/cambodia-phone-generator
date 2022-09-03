# Cambodia Phone Number Generator

Create a random phone number based on network carrier or prefix.

[![test](https://github.com/seanghay/cambodia-phone-generator/actions/workflows/test.yml/badge.svg)](https://github.com/seanghay/cambodia-phone-generator/actions/workflows/test.yml)

### Supported network operators

- ✅ Telecom Cambodia
- ✅ Cellcard
- ✅ CooTel
- ✅ Kingtel
- ✅ Seatel
- ✅ Metfone
- ✅ qb
- ✅ Smart


## Usage

```js
import { 
  generateByOperator, 
  generateByPrefix 
} from 'cambodia-phone-generator'

generateByOperator()
// => '0963978484'

generateByOperator('Smart')
// => '015557901'

generateByPrefix('010')
// => '010013503'
```


## Types

```typescript
import { PhoneNumberPrefix, NetworkOperator } from 'network-operators';

/**
 * Create a random phone number from a prefix.
 * @param prefix phone number prefix to be generated from
 * @returns a valid random phone number.
 */
declare function generateByPrefix(prefix: PhoneNumberPrefix): string;
/**
 * Create a random number phone based on network operator if provided.
 * @param operator optional network operator name.
 * @returns a valid random phone number.
 */
declare function generateByOperator(operator?: NetworkOperator): string;

export { generateByOperator, generateByPrefix };
```


## Related

- [network-operators](https://github.com/seanghay/network-operators)