import { CstNode, DefaultValueConverter, GrammarAST, ValueType } from "langium";


export class LivExValueConverter extends DefaultValueConverter {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected override runConverter(rule: GrammarAST.AbstractRule, input: string, cstNode: CstNode): ValueType {
        switch (rule.name.toUpperCase()) {
            case 'ANY_EXPR': return input.slice(1, -1);
            default: return super.runConverter(rule, input, cstNode);
        }
    
    }

}