grammar LivEx

entry DefinitionList:
    (defs+=Definition)*;

Definition:
    Example | Scenario | State | Probe;

Example:
    (name=ID ':') target=Target  scenario=Scenario state=State?;

Target:
    name=ID;

Scenario:
    '(' (args+=Arg ',')* args+=Arg ')';

Arg:
    value=(INT | STRING);

State:
    'state' name=ID;

Probe:
    '[' line=INT ']' (example_name=[Example:ID] ':') 'probe''(' expr=ID ')' ;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;



