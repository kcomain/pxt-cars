//% weight=100 color=#5abcab icon=":)"
//        >>
namespace cars {
    /**
     * TODO: describe your function here
     * @param StopAll degfjkhbghsdngfdnfsd DESPACITO
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function StopAll(): void {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }

    //% block
    export function LeftWheelForward(): void {
        pins.analogWritePin(AnalogPin.P8, 500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    //% block
    export function LeftWheelBackward(): void {
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    //% block
    export function RightWheelForward(): void {
        pins.analogWritePin(AnalogPin.P0, 500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    //% block
    export function RightWheelBackward(): void {
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    //% block
    export function LeftTurn(): void {
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P0, 500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    //% block
    export function RightTurn(): void {
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P8, 500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    //% block
    export function MoveBackward(): void {
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    //% block
    export function MoveForward(): void {
        pins.analogWritePin(AnalogPin.P8, 500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, 500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}