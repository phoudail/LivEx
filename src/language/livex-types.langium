interface Example {
    name: string
    target: Target
    scenario: Scenario
    state?: State
}

interface Target {
    name: string
}

interface Scenario {
    args: Arg[]
}

interface Arg { // for now, numeric constants or variables; later will have to be refactored into arbitrary expressions
    value: number | string 
}

interface State { // TODO
    name: string 
}

interface Probe {
    line: number
    example_name: @Example
    expr: string
    condition: string = "True" // if no condition is specified, always display the probe result
}