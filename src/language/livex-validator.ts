import type { /*ValidationAcceptor,*/ ValidationChecks } from 'langium';
import type { LivExAstType } from './generated/ast.js';
import type { LivExServices } from './livex-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: LivExServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.LivExValidator;
    const checks: ValidationChecks<LivExAstType> = {
        // Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class LivExValidator {

    // checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
    //     if (person.name) {
    //         const firstChar = person.name.substring(0, 1);
    //         if (firstChar.toUpperCase() !== firstChar) {
    //             accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //         }
    //     }
    // }

}
