//% weight=100 color=#5abcab icon=""
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
    export function LeftWheelForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    //% block
    export function LeftWheelBackward(speed: number): void {
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    //% block
    export function RightWheelForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    //% block
    export function RightWheelBackward(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    //% block
    export function LeftTurn(speed: number): void {
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    //% block
    export function RightTurn(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    //% block
    export function MoveBackward(speed: number): void {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    //% block
    export function MoveForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, speed)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}