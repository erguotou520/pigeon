import type { ValidatorConstraintInterface } from 'class-validator'
import { ValidatorConstraint } from 'class-validator'

@ValidatorConstraint()
export class IsNumberArray implements ValidatorConstraintInterface {
  validate(val: unknown) {
    // 允许空数组
    if (Array.isArray(val) && !val.length) {
      return true
    }
    return Array.isArray(val)
      ? val.every(i => typeof i === 'number')
      : typeof val === 'string'
      ? val.split(',').every(i => typeof i === 'number')
      : false
  }
}
